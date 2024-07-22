import mongoose from "mongoose";

// const uri = process.env.URI
// console.log("uri", uri);

const connect = (uri) => {
    console.log("Connect with DB");
    return mongoose.connect(uri)
}
export default connect
