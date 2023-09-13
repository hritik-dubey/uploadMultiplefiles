let { Event } = require("../model/EventModel")
let eventAdd = async (req, res) => {
    try {
        // Extract data from the request
        const { eventName, eventTitle, eventDescription, eventLocation, eventDate } = req.body;
        const images = req.files.map((file) => file.filename);

        // Create a new event
        const event = new Event({
            eventName,
            eventTitle,
            eventDescription,
            eventLocation,
            eventDate,
            images,
        });

        // Save the event to the database
        await event.save();

        res.status(201).json({ message: 'You have created event successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}


module.exports = { eventAdd }