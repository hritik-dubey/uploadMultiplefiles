const multer = require("multer");
var fs = require("fs");
var dir = "./upload";   // PATH TO UPLOAD FILE
if (!fs.existsSync(dir)) {  // CREATE DIRECTORY IF NOT FOUND
    fs.mkdirSync(dir, { recursive: true });
}
const fileStorageEngine = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, dir);
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + "_" + file.originalname);
    },
});

const upload = multer({ storage: fileStorageEngine });


let uploadMultipleFile = (fieldname, count) => (req, res, next) => {
    upload.array(fieldname, count)(req, res, function (err) {
        if (err instanceof multer.MulterError) {
            if (err.code == 'LIMIT_UNEXPECTED_FILE') {
                return res.status(400).json({ error: "Too many files selected. Maximum allowed: 5." });
            } else {
                return res.status(400).json({ error: "error occure in multer" });
            }
        } else if (err) {
            return res.status(400).json({ error: "unknown error occure!" });
        }
        next();
    });
}
module.exports = { upload, uploadMultipleFile };