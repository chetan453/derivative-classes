const express = require("express");
const router = express.Router();

const Candidate = require("../modal/candidate");


router.post("/", (req, res) => {
    const data = req.body;
    if (data.is_demo) {
        Candidate.create(data)
            .then(result => {
                res.json({ msg: "Student data added succesfully" })
            })
            .catch(err => {
                res.status(404).json({ msg: "Cannot add student data" })
            })
    }

})

module.exports = router;