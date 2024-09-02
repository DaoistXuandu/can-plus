import mongoose, { Schema } from 'mongoose';

const MenuSchema = new Schema({
    sectionId: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    searchId: {
        type: mongoose.Types.ObjectId,
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

export default mongoose.models.Menu || mongoose.model("Menu", MenuSchema);