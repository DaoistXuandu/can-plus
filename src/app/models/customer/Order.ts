import mongoose, { Schema } from 'mongoose';

const OrderSchema = new Schema({
    cartId: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }
}, { timestamps: false, versionKey: false });

export default mongoose.models.Order || mongoose.model("Order", OrderSchema);