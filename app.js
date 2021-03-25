// const express = require("express");
// const config = require("config");
import config from "config";
import express from "express";
import mongoose from "mongoose";
import router from "./routes/authRoutes.js";
// import routerMessage from './routes/messageRouter.js'
// const http = ('http').Server(app)
// const io = require('socket.io')(http);
// const http = require('http').Server(app);



const app = express();
const PORT = config.get("port") || 4000;
app.use("/api/auth", router);
// app.use(express.static(path.join(__dirname, '..', 'client','build')))
// app.use('/message', routerMessage)



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