import { Schema, model, Document } from 'mongoose';

const videoSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    url: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    }
}, {
    versionKey: false,
    timestamps: true,
});

export interface IVideo extends Document {
    title: string;
    description: string;
    url: string;
}

export default model<IVideo>('Video', videoSchema);