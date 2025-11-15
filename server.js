const express = require("express");
const app = express();
var studentModel = require("./student.model");
//install mongoose(dbms) and import
const mongoose = require("mongoose");
//connect to the exact database("add database name before ?appName")
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

//Define the schema( format )  - to check data is in correct format or not!
let studentSchema = mongoose.Schema({
  firstname: String,
  lastname: String,
});

//Declare the Modal - establish connection to the  collection of database (remember singular plural issue)
let studentModel = mongoose.model("student", studentSchema);

app.get("/", (req, res) => {
  //call the find method with model
  studentModel.find({}).then((data) => {
    console.log(data);
    res.send(data);
  });
});

app.listen("3200", () => {
  console.log("server is running on portno 3200");
});
