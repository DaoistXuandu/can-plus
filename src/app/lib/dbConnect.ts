import mongoose from 'mongoose';
const DATABASE_URL = process.env.MONGO_URL as string;

export async function connectToDB() {
    try {
        await mongoose.connect(DATABASE_URL)
        console.log("Succes Connecting to Database")
    }
    catch (error) {
        throw new Error("Error Connecting")
    }
}