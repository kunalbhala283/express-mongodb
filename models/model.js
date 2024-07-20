const mongoose = require('mongoose');

const ratingSchema = new mongoose.Schema({
    rate: {
        type: Number,
        required: true
    },
    count: {
        type: Number,
        required: true
    }
});

const productSchema = new mongoose.Schema({
    _id: {
        type: String,
        required: true,
        unique: true
    },
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    rating: {
        type: ratingSchema,
        required: true
    }
});

const empc = mongoose.model('Product', productSchema);

module.exports = empc;
