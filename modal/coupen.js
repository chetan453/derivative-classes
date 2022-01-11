const mongoose = require("mongoose");

const CoupenSchema = new mongoose.Schema({
    code: {
        type: String,
        required: true
    },
    used_times: {
        type: Number,
        default: 0
    }
})

const Coupen = new mongoose.model("Coupen", CoupenSchema);
module.exports = Coupen;