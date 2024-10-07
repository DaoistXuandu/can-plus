import mongoose, { Schema } from 'mongoose';

const MerchantSchema = new Schema({
    canteen: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },

    description: String,
    rating: String,

    time_open: Date,
    time_close: Date,

    email: String,
    telephone: String
}, { timestamps: false, versionKey: false });

export default mongoose.models.Merchant || mongoose.model("Merchant", MerchantSchema);