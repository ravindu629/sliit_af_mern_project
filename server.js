const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5000;
const uri = process.env.MONGO_URI;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once("open", () => {
  console.log("MongoDB Connected");
});

//deploy code

//serve static assets if in production
if (process.env.NODE_ENV === "production") {
  //set static folder
  app.use(express.static(path.join(__dirname, "/client/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("Api running");
  });
}

app.use("/api/admins", require("./routes/Admin.route"));
app.use("/api/staffMembers", require("./routes/Staff.route"));
app.use("/api/students", require("./routes/Student.route"));
app.use("/api/markingSchemas", require("./routes/MarkingSchema.route"));
app.use("/api/submissions", require("./routes/Submission.route"));

app.use("/api/addMarks", require("./routes/SupervisorMarks.route"));
app.use("/api/acceptTopic", require("./routes/AcceptTopic.route"));

app.use("/api/studentGroups", require("./routes/StudentGroup.route"));
app.use("/api/researchTopics", require("./routes/ResearchTopic.route"));

app.listen(port, () => {
  console.log("Server is starting on port " + port);
});
