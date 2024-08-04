import mongoose, { Schema } from 'mongoose';

const RatingSchema = new Schema({
    customerId: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    merchantId: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    }
}, { timestamps: false, versionKey: false });

export default mongoose.models.Rating || mongoose.model("Rating", RatingSchema);