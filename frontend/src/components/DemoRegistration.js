import React, { useState } from 'react';
import './CSS/DemoRegistration.css';
import axios from 'axios';

const base_url = 'http://1ba62d862d8e.ngrok.io';
function DemoRegistration() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [percentile, setPercentile] = useState();
    const [phone, setPhone] = useState();

    const demoRegistration = (e) => {
        e.preventDefault();
        const data = {
            name: name,
            email: email,
            percentile: percentile,
            phone: phone,
            is_demo: true
        }
        axios.post(`${base_url}/candidate-registration/`, data);
    }

    return (
        <div className="demo-registration">
            <h1>Register for Demo classes</h1>
            <form onSubmit={demoRegistration}>
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
                    <div className="button">
                        <button type="submit" >Proceed</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default DemoRegistration
