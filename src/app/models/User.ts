import mongoose, { Schema } from 'mongoose';

const UserSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    occupation: {
        type: Number,
        required: true
    },
    name: String,
    telephone: String,
    email: String,
    profile: {
        data: Buffer,
        content: String
    }
}, { timestamps: false, versionKey: false });

export default mongoose.models.User || mongoose.model("User", UserSchema);