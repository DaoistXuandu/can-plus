import mongoose, { Schema } from 'mongoose';

const transactionSchema = new Schema({
    customerId: {
        type: String,
        required: true
    },
    orderId: {
        type: String,
        required: true
    },
    total: {
        type: Number,
        required: true
    },
}, { timestamps: false, versionKey: false });

export default mongoose.models.transaction || mongoose.model("Transaction", transactionSchema);