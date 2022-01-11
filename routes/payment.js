const router = require("express").Router();
const shortid = require("shortid");
const Razorpay = require("razorpay");
const Candidate = require("../modal/candidate");
const { key_id, key_secret, secret } = require("../config/keys");

let data = {};

var razorpay = new Razorpay({

    key_id: key_id,
    key_secret: key_secret
})

router.post("/verification", (req, res) => {
    //validation
    const crypto = require('crypto')

    const shasum = crypto.createHmac('sha256', secret)
    shasum.update(JSON.stringify(req.body))
    const digest = shasum.digest('hex')

    console.log(digest, req.headers["x-razorpay-signature"])

    if (digest === req.headers["x-razorpay-signature"]) {
        //process it
        console.log("Payment is legit");
        Candidate.create(data)
            .then(result => {
                res.json({ msg: "Student registered successfully" })
            }).catch(err => {
                console.log(err);
            })
    } else {
        //pass it
        console.log("Payment is not legit");
        res.status(404).json({ msg: "Payment is not completed" });
    }
})

router.post("/razorpay", async (req, res) => {
    const payment_capture = 1;
    let amount = 7000;
    const currency = "INR";

    data = req.body;
    if (data.coupen_applied) {
        amount = 6000;
    }

    const response = await razorpay.orders.create({
        amount: (amount * 100).toString(),
        currency,
        receipt: shortid.generate(),
        payment_capture
    })

    res.json({
        id: response.id,
        currency: "INR",
        amount: response.amount
    })

})

module.exports = router;