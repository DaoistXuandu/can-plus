import mongoose, { Schema } from 'mongoose';

const MerchantSchema = new Schema({
    userId: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    searchId: {
        type: mongoose.Types.ObjectId,
    },
    canteenId: mongoose.Types.ObjectId,

    name: String,
    description: String,
    rating: String,
    image: String,
    telephone: String,
    email: String,

    time_open: Date,
    time_close: Date,
}, { timestamps: false, versionKey: false });

export default mongoose.models.Merchant || mongoose.model("Merchant", MerchantSchema);