const express = require("express");
const router = express.Router();
const multer = require("multer");
const { v4: uuid4 } = require("uuid");
const path = require("path");
const StdDocFile = require("../models/StdDocFile.model");

const storage = multer.diskStorage({
  destination: function (req, stdDocfile, cb) {
    cb(null, "uploadedStdDocFiles");
  },
  filename: function (req, stdDocfile, cb) {
    cb(null, uuid4() + "-" + Date.now() + path.extname(stdDocfile.originalname));
  },
});

const fileFilter = (req, stdDocfile, cb) => {
  const allowedFileTypes = [
    "image/jpeg",
    "image/jpg",
    "image/png",
    "application/pdf",
  ];
  if (allowedFileTypes.includes(stdDocfile.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

let upload = multer({ storage, fileFilter });


router.route("/").post(upload.single("stdDocfile"), (req, res) => {
  const groupID = req.body.groupID;
  const groupName = req.body.groupName;
  const leaderITNum = req.body.leaderITNum;
  const stdDocfile = req.stdDocfile.filename;

  const stdDocfile_ = new StdDocFile({
    groupID,
    groupName,
    leaderITNum,
    stdDocfile,
  });

  stdDocfile_
    .save()
    .then(() => {
      res.json("file added");
    })
    .catch((error) => {
      res.status(400).json(error);
    });
});

module.exports = router;