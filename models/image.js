const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ImageSchema = new Schema({
    createdAt: { type: Date },
    name: { type: String, default: "n/a" },
    camera: { type: String, required: true },
    lens: { type: String, default: "n/a" },
    film: { type: String, default: "n/a" },
    image: { type: String, required: true }
});

ImageSchema.pre('save', function(next) {
    const now = new Date();
    if (!this.createdAt) {
        this.createdAt= now;
    }

    next();
})

module.exports =  mongoose.model('Image', ImageSchema)