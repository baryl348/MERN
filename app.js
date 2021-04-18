import config from "config";
import express from "express";
import mongoose, { connect } from "mongoose";
import router from "./routes/authRoutes.js";
import cors from 'cors'
import Chat from './schema&model/message.js'



const app = express();
const PORT = config.get("port") || 4000;
app.use(express.json({extended:true}))
app.use("/api/auth", cors(),  router);
app.use(express.static(path.join(__dirname,  'public')))

socket.on('connection', (msg)=>{
  connect.then((db) => {
    try {
        let chat = new Chat({ message: msg.chatMessage, sender:msg.userID, type: msg.type })

        chat.save((err, doc) => {
          if(err) return res.json({ success: false, err })

          Chat.find({ "_id": doc._id })
          .populate("sender")
          .exec((err, doc)=> {

              return io.emit("Output Chat Message", doc);
          })
        })
    } catch (error) {
      console.error(error);
    }
  })
 })




async function start() {
  try {
    await mongoose.connect(config.get("mongoUri"), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    app.listen(PORT, () => {
      console.log(`server has ben started http://localhost:${PORT}/...`);
    });
  } catch (error) {
    console.log("Server error", error.message);
    process.exit(1);
  }
}
start();