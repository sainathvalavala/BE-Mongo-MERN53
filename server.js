const express = require("express");
const app = express();
const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://sai:456@cluster0.hgi1t11.mongodb.net/edupoly?appName=Cluster0"
  )
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((err) => {
    console.error("MongoDb connection error:", err);
  });

//schema creation - to check data is in correct format or not!
let studentSchema = mongoose.Schema({
  firstname: String,
  lastname: String,
});

//Modal - represenatation of collection of database
let studentsModel = mongoose.model("student", studentSchema);

app.get("/", (req, res) => {
  studentsModel.find({}).then((data) => {
    console.log(data);
    res.send(data);
  });
});

app.listen("3200", () => {
  console.log("server is running on portno 3200");
});
