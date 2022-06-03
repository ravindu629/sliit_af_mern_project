const express = require("express");
const router = express.Router();
const multer = require("multer");
const { v4: uuid4 } = require("uuid");
const path = require("path");
const File = require("../models/File.model");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "images");
  },
  filename: function (req, file, cb) {
    cb(null, uuid4() + "-" + Date.now() + path.extname(file.originalname));
  },
});

const fileFilter = (req, file, cb) => {
  const allowedFileTypes = [
    "image/jpeg",
    "image/jpg",
    "image/png",
    "application/pdf",
  ];
  if (allowedFileTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

let upload = multer({ storage, fileFilter });

router.route("/").post(upload.single("photo"), (req, res) => {
  const fName = req.body.fName;
  const photo = req.file.filename;

  const file = new File({
    fName,
    photo,
  });

  file
    .save()
    .then(() => {
      res.json("file added");
    })
    .catch((error) => {
      res.status(400).json(error);
    });
});

module.exports = router;
