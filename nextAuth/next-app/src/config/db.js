import mongoose from "mongoose";
import { EventEmitter } from "events";
const db_event_emitter = new EventEmitter();
export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connection To Database Successfull!!");
    db_event_emitter.emit("connection");
    return true;
  } catch (err) {
    console.log(`Error:${err.message}`);
  }
};
