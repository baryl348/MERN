import pkg from "mongoose";

const { Schema, model, Types } = pkg;

const schema = new Schema({
  firstName: { type: String, required: true },
  secondName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  token : {type: String,},
  tokenExp :{type: Number},
  image: String,
  role : {
    type:Number,
    default: 0 
},
});

export default model("User", schema);
