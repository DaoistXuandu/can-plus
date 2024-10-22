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
}, { timestamps: false, versionKey: false });

CanteenSchema.index({ name: 1, location: 1, image: 1 })

export default mongoose.models.Canteen || mongoose.model("Canteen", CanteenSchema);