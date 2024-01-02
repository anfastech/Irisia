import mongoose from "mongoose";
const MONGODB_URI= "mongodb+srv://anfas:anfas18@cluster0.pgplvh1.mongodb.net/test?retryWrites=true&w=majority";

export function mongooseConnect() {
  if (mongoose.connection.readyState === 1) {
    return mongoose.connection.asPromise();
  } else {
    const uri = MONGODB_URI;
    return mongoose.connect(uri);
  }
}