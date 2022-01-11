const express = require("express");
const router = express.Router();

const Coupen = require("../modal/coupen");

router.get("/", (req, res) => {
    Coupen.find()
        .then(coupens => {
            res.json(coupens);
        }).catch(err => {
            res.status(404).json({ msg: "Cannot send Coupens" });
        })
})

router.post("/", (req, res) => {
    Coupen.create(req.body)
        .then((result) => {
            res.json({ msg: "Coupen added succefully" })
        }).catch((err) => {
            res.status(404).json({ msg: "cannot add Coupen" + err })
        });
})

router.put("/:id", (req, res) => {
    Coupen.findByIdAndUpdate(req.params.id, req.body)
        .then((result) => {
            res.json({ msg: "Updated Successfully" })
        }).catch((err) => {
            res.status(404).json({ msg: "cannot update Coupen" })
        });
})

router.delete("/:id", (req, res) => {
    Coupen.findByIdAndRemove(req.params.id)
        .then((result) => {
            res.json({ msg: "Deleted succefully" })
        }).catch((err) => {
            res.status(404).json({ msg: "Could not find the Coupen" })
        });
})


module.exports = router;