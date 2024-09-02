import mongoose, { Schema } from 'mongoose';

const CanteenSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    searchId: {
        type: mongoose.Types.ObjectId,
    },
    location: {
        type: String,
        required: true
    },
    image: String,
}, { timestamps: false, versionKey: false });

export default mongoose.models.Canteen || mongoose.model("Canteen", CanteenSchema);