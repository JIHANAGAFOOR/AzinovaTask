const mongoose=require("mongoose")
const schema=new mongoose.Schema({
    login_id:{type:mongoose.Schema.Types.ObjectId,ref:"Login"},
   name:String,
   email:String,
   mobile:Number,
   age:Number,
   place:String,
 
})
const Register=mongoose.model("Register",schema)
module.exports=Register;