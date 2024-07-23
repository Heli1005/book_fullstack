import mongoose from "mongoose";

// console.log("uri", uri);

const connect = (uri) => {
    const mongoDB_uri = process.env.MONGODB_URI
    console.log("uri", mongoDB_uri);
    
    console.log("process.env.MONGODB_URI", process.env.MONGODB_URI);
    
    console.log("Connect with DB", mongoDB_uri);
    return mongoose.connect(uri)
}
export default connect
