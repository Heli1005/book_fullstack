import mongoose from "mongoose";

const uri = "mongodb+srv://hgangwal4833:pO3ql9nn9Z9eCwWd@bookcluster.j4xpqkw.mongodb.net/?retryWrites=true&w=majority&appName=BookCluster"
const connect = () => {
    console.log("Connect with DB");
    return mongoose.connect(uri)
}
export default connect
