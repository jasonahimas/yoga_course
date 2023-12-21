import mongoose from "mongoose";
import { DB_NAME} from "../constants.js"

const connectDB = async () => {
  try {
    console.log("connection string",`${process.env.MONGODB_URI}/${DB_NAME}`)
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(`\n MongoDB Connected Successfully on DB_HOST:${connectionInstance.connection.host}`);
  } catch (error) {
    console.log("MongoDB Connection Error", error);
    process.exit(1);
  }
};

export default connectDB;