import mongoose, { Schema } from 'mongoose';

const CanteenSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    image: String,
    popularity: Number
}, { timestamps: false, versionKey: false });

export default mongoose.models.Canteen || mongoose.model("Canteen", CanteenSchema);