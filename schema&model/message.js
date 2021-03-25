import pkg from "mongoose";

const { Schema, model, Types } = pkg;

const schema = new Schema ({
    content:String,
    name:String,
},{
    timestamps:true
})

export default ('Message',schema)