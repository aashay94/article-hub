import mongoose from 'mongoose';
//import {registerEvents} from './ar.events';

var ArticleSchema = new mongoose.Schema({
    index: Number,
    title: String,
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    body: String,
    category: String,
    img: String,
    summary: String,
    comments: Array,
    likes: Number
});

//registerEvents(ThingSchema);
export default mongoose.model('Article', ArticleSchema);


