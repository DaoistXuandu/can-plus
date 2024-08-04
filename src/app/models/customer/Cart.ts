import mongoose, { Schema } from 'mongoose';

const CartSchema = new Schema({
    merchantId: {
        type: mongoose.Types.ObjectId,
    }
}, { timestamps: true, versionKey: false });

export default mongoose.models.Cart || mongoose.model("Cart", CartSchema);