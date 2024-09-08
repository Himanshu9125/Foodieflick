import mongoose from "mongoose";

const userSchema= new mongoose.Schema(
    {
      auth0Id:{
          type:String,
          required:true,
      },
      email:{
        type:String,
        required:true,
      },
      name:{
        type:String
      },
      Address:{
        type:String
      },
      city:{
        type:String
      },
      Country:{
        type:String
      },
    }
);

const User=mongoose.model("User",userSchema);
export default User;