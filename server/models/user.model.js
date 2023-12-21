import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  { 
    name: {
      type: String,
      required: [true, "name is required"],
      trim:true,
    },
    email:{
     type:String,
     required: [true, "email is required"],
     unique:true,
     lowercase:true,
     trim:true,
     match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    },
    age: {
      type: Number,
      required: true,
    }
  }
);

export const User = mongoose.model("User", userSchema);
