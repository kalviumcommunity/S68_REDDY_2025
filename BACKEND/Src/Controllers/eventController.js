const Event = require("../models/Event");
const eventModel = require("../Models/eventModel");

// Create Event
exports.createEvent = async (req, res) => {
    try {
        const { name, date, location, createdBy } = req.body;
        const event = new Event({ name, date, location, created_by: createdBy });
        await event.save();
        res.status(201).json(event);
    } catch (error) {
        res.status(500).json({ error: "Error creating event" });
    }
};

// Get Events by User
exports.getEventsByUser = async (req, res) => {
    try {
        const events = await Event.find({ created_by: req.params.userId }).populate("created_by");
        res.json(events);
    } catch (error) {
        res.status(500).json({ error: "Error fetching events" });
    }
};

module.exports = eventController;
