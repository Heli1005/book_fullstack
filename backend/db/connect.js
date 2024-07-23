import mongoose from "mongoose";

const connect = async(uri) => {
    try {
        const dbUri = process.env.MONGODB_URI;
        console.log('MongoDB URI:', dbUri); // Add this line
        if (!dbUri) {
            throw new Error('URI environment variable not defined');
        }
        await mongoose.connect(dbUri);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
        process.exit(1);
    }
}
export default connect
