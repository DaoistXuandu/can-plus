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

SectionSchema.index({ name: 1, merchantId: 1 })

export default mongoose.models.Section || mongoose.model("Section", SectionSchema);