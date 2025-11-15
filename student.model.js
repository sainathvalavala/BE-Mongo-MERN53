const mongoose=require('mongoose')



//Define the schema( format )  - to check data is in correct format or not!
let studentSchema = mongoose.Schema({
  firstname: String,
  lastname: String,
});


let studentModel = mongoose.model("student", studentSchema);
module.exports=studentModel