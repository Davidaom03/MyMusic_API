import mongoose from 'mongoose';
import {v4 as uuidv4} from 'uuid';

const songSchema = new mongoose.Schema({
    title: { type: String, required: true},
    artist: { type: String, required: true},
    album: { type: String, required: true},
    length: { type: Number, required: true},
    type: { type: String, required: true},
    uploaded_by: { type: String, required: true},
    uploaded_date: { type: Date, required: true, default: Date.now()},
    rating: {type: Number, required: true, default: 0},
    image: { type: String, required: false},
    deleted: { type: Boolean, required: true, default: false},
    deleted_date: { type: Date, required: false}
});


export const Song = mongoose.model('Song', songSchema);

//export default songModel;
