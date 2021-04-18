import pkg from "mongoose";
import user from "./user";

const { Schema, model, Types } = pkg;

const schema = new Schema ({
    userName:{
        type:String,
        required:true
    },
    userAvatar:{
        type:String,
        required:false
    },
    messageText:{
        type:String,
        required:true
    },
    sender:{
        type:Schema.Types.ObjectId,
        ref:user
    }
},{
    timestamps:{
        createdAt:true,
        updatedAt:false
    }
})

export default ('Message',schema)