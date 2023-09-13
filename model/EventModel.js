const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
    eventName: String,
    eventTitle: String,
    eventDescription: String,
    eventLocation: String,
    eventDate: Date,
    images: [String], // Store image file names
});

const Event = mongoose.model('Event', eventSchema);
module.exports = { Event }; 
