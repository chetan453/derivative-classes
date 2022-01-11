import React from 'react'
import './CSS/registration.css'
import { Redirect } from 'react-router';
import { useState } from 'react';
import axios from 'axios';
import Modals from './Modals';

const base_url = 'http://1ba62d862d8e.ngrok.io'
function Registration() {
    const [state, setState] = useState({ redirect: false, open: true, openModal: false });
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [percentile, setPercentile] = useState();
    const [phone, setPhone] = useState();
    const [coupenCode, setCoupenCode] = useState("");
    const [price, setPrice] = useState(7000);
    const [cpn, setCpn] = useState(false);
    const [finalCoupen, setfinalCoupen] = useState({});
    // const formSubmitHandler = (e) => {
    //     e.preventDefault();
    //     


    // }
    document.title = "Registration Page";
    const applyCoupenCode = (e) => {
        e.preventDefault();

        axios
            .get(`${base_url}/coupen`)
            .then(res => {
                const coupens = res.data;
                // eslint-disable-next-line array-callback-return
                var [coupen] = coupens.filter((item) => (item.code === coupenCode));
                if (coupen) {
                    setPrice(6000);
                    setCpn(true);
                    setfinalCoupen(coupen);
                }

            })
            .catch(err => {
                console.error("error occured" + err);
            })
    }

    const displayRazorpay = async (e) => {
        e.preventDefault();
        const res = await loadRazorpay();

        const data = {
            name: name,
            email: email,
            phone: phone,
            percentile: percentile,
            is_registration: true,
            coupen_used: cpn ? coupenCode : null,
            coupen_applied: cpn
        }

        if (!res) {
            alert("razorpay SDK failed to load");
            return
        }

        const result = await axios.post(`${base_url}/payment/razorpay`, data)
            .then(result => result.data);

        const options = {
            key: "rzp_test_WkuRO8POgXNtw7",
            currency: result.currency,
            amount: result.amount,
            name: "Derivative Classes",
            description: "Registration for derivative classes",
            image: "https://images.unsplash.com/photo-1531804055935-76f44d7c3621?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvdG98ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
            order_id: result.id,
            prefill: {
                name: name,
                email: email,
                contact: phone
            },
            handler: function (response) {
                setState({ redirect: false, open: true, openModal: true })
                if (cpn) {
                    axios.put(`${base_url}/coupen/${finalCoupen._id}`, { used_times: finalCoupen.used_times + 1 })
                }
                setTimeout(() => {
                    setState({ redirect: true, open: false, openModal: false })
                }, 2000);

            }
        };
        var paymentObject = new window.Razorpay(options);
        paymentObject.open()
    }
    const loadRazorpay = () => {
        return new Promise(resolve => {
            const script = document.createElement("script");
            script.src = "https://checkout.razorpay.com/v1/checkout.js";
            script.onload = () => {
                resolve(true)
            }
            script.onerror = () => {
                resolve(false)
            }
            document.body.appendChild(script);
        })


    }
    return (
        <div className="registration-form">
            <div className="title">Registration</div>
            <form onSubmit={displayRazorpay}>
                <div className="user-details">
                    <div className="input-box">
                        <span className="details">Full Name</span>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            required />
                    </div>
                    <div className="input-box">
                        <span className="details">Email</span>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email address"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            required />
                    </div>
                    <div className="input-box">
                        <span className="details">JEE percentile(highest)</span>
                        <input
                            type="number"
                            name="percentile"
                            placeholder="Enter your JEE percentile here"
                            value={percentile}
                            onChange={e => setPercentile(e.target.value)}
                            required />
                    </div>
                    <div className="input-box">
                        <span className="details">Phone Number</span>
                        <input
                            type="number"
                            name="name"
                            placeholder="Enter your Phone Number"
                            value={phone}
                            onChange={e => setPhone(e.target.value)}
                            required />
                    </div>
                    <div id="coupen">
                        <h3>Price - {price}</h3>
                        <div>
                            <input
                                type="text"
                                name="coupen"
                                value={coupenCode}
                                onChange={(e) => setCoupenCode(e.target.value.toUpperCase())}
                                placeholder="Have a Coupen code?"
                            />
                            <button onClick={applyCoupenCode}>APPLY</button>
                            {
                                cpn ? <div style={{ color: "#17bf17" }}>Congrats!! coupen applied successfully </div> : null
                            }

                        </div>
                    </div>
                    <div className="button">
                        <button type="submit" >Proceed</button>
                    </div>
                </div>
            </form>
            {state.redirect ? <Redirect push to="/" /> : null}
            {state.openModal ? <Modals open={state.open} >
                <h3>Congratulation!! you have registered succesfully</h3>
            </Modals> : null}
        </div>
    )

}

export default Registration
