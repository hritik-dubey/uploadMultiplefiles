const express = require("express");
const router = express.Router();
const multerMiddleware = require("../middleware/multer");
const eventController = require("../controller/addEvents")

router.put('/api/events', multerMiddleware.uploadMultipleFile("images",5), eventController.eventAdd);

module.exports = router;