const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    // DO BACKEND VALIDATIONS
    // CHECK ON REDIRECTS FOR EXAM
    title: { 
        type: String, 
        required: [true, '{PATH} is required'],
        minlength: [2, '{PATH} must be at least {MINLENGTH} characters long']
    },
    price: { 
        type: String, 
        required: [true, '{PATH} is required'],
    }, 
    description: { 
        type: String, 
        required: [true, '{PATH} is required'],
        minlength: [2, '{PATH} must be at least {MINLENGTH} characters long']
    }
}, { timestamps: true });

module.exports.Product = mongoose.model('Product', ProductSchema);