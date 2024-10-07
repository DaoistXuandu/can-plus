import mongoose, { Schema } from 'mongoose';

const OrderSchema = new Schema({
    customerId: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    menuId: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    comment: String
}, { timestamps: false, versionKey: false });

OrderSchema.index({ customerId: 1, menuId: 1 })

export default mongoose.models.Order || mongoose.model("Order", OrderSchema);