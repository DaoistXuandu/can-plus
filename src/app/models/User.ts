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
    telephone: String,
    email: String,
    profile: {
        data: Buffer,
        type: String
    }
}, { timestamps: false, versionKey: false });

export default mongoose.models.User || mongoose.model("User", UserSchema);