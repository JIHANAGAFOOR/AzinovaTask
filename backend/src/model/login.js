const mongoose=require("mongoose")
const schema=new mongoose.Schema({
    email:String,
    username:String,
    password:String,
 
})
const login=mongoose.model("Login",schema)
module.exports=login;