import mongoose from "mongoose";

const connectDb = async () => {
  const uri = process.env.MONGODB_URI?.trim();
if (!uri) {
  throw new Error("MONGODB_URI is not set.");
}

  const connect = await mongoose.connect(uri);
  console.log(`MongoDB connected: ${connect.connection.host}`);
};

export default connectDb;
