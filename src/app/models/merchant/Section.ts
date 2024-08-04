import mongoose, { Schema } from 'mongoose';

const SectionSchema = new Schema({
    merchantId: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    name: {
        type: String,
        required: true
    }
}, { timestamps: false, versionKey: false });

export default mongoose.models.Section || mongoose.model("Section", SectionSchema);