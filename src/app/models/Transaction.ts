import mongoose, { Schema } from 'mongoose';

const TransactionSchema = new Schema({
    customerId: {
        type: String,
    },
    total: {
        type: Number,
    },
    status: {
        type: Number,
    },
    time: {
        type: String
    },
    link: {
        type: String
    },
    midtransId: {
        type: String
    },
    delivery: {
        type: Boolean
    }
}, { timestamps: true, versionKey: false });

TransactionSchema.index({ customerId: 1 })

export default mongoose.models.Transaction || mongoose.model("Transaction", TransactionSchema);