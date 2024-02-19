import mongoose from 'mongoose';

const connectToDB = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("connected to datebase");
    } catch (error) {
        console.log('Error connecting to database',error.message);
    }
}

export default connectToDB;