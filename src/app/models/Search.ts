import mongoose, { Schema } from 'mongoose';

const SearchSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    popularity: Number
}, { timestamps: false, versionKey: false });

export default mongoose.models.Search || mongoose.model("Search", SearchSchema);