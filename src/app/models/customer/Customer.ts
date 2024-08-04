
import mongoose, { Schema } from 'mongoose';

const CustomerSchema = new Schema({
    userId: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    cartId: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    name: String,
    telephone: String,
    email: String,
    image: String
}, { timestamps: false, versionKey: false });

export default mongoose.models.Customer || mongoose.model("Customer", CustomerSchema);