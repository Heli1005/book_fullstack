import mongoose from "mongoose";

const connect = (uri) => {
    const mongoDB_uri = process.env.MONGODB_URI
    return mongoose.connect(mongoDB_uri)
}
export default connect
