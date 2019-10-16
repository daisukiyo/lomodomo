const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ImageSchema = new Schema({
    name: { type: String, default: "n/a" },
    camera: { type: String, required: true },
    lens: { type: String, default: "n/a" },
    film: { type: String, default: "n/a" },
    image: { type: String, required: true }
});

module.exports =  mongoose.model('Image', ImageSchema)