const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
    name: String,
    date: Date,
    location: String,
    created_by: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // Reference to User
});

module.exports = mongoose.model("Event", eventSchema);
