import mongoose, { Schema } from 'mongoose';

const MenuSchema = new Schema({
    sectionId: {
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
    image: String
}, { timestamps: false, versionKey: false });

MenuSchema.index({ sectionId: 1, name: 1, price: -1 })

export default mongoose.models.Menu || mongoose.model("Menu", MenuSchema);