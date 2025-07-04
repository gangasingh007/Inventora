import mongoose from "mongoose";

const userschema = new mongoose.Schema({
    username  : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    },
    email : {
        type : String,
        unique : true,
        required : true
    },
    role : {
        type: String,
        enum : ["user","admin"],
        default : "user"
    }
},{timeseries:true});

const User = mongoose.model("User",userschema);

export default User;