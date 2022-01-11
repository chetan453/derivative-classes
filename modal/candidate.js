const mongoose = require("mongoose");

const CandidateSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    percentile: {
        type: Number,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    coupen_used: {
        type: String,
        default: null
    },
    is_registration: {
        type: Boolean,
        default: false
    },
    is_demo: {
        type: Boolean,
        default: false
    }
})

const Candidate = new mongoose.model("candidate", CandidateSchema);
module.exports = Candidate;