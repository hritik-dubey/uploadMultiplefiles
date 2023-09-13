const express = require("express");
const router = express.Router();
let eventController = require('../controller/addEvents');
const upload = require("../middleware/multer");
router.put('/api/events', upload.array('images', 5), eventController.eventAdd);

module.exports = router;