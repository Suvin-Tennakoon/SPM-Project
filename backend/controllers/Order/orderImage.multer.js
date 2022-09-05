var multer = require("multer");

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "routes/uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname);
  },
});

var upload = multer({ storage: storage });
module.exports = upload;
