
import mongoose, { Schema } from 'mongoose';

const CustomerSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    merchantCart: mongoose.Types.ObjectId,
    name: String,
    telephone: String,
    email: String,
    image: String

}, { timestamps: false, versionKey: false });

CustomerSchema.index({ username: 1 })

export default mongoose.models.Customer || mongoose.model("Customer", CustomerSchema);