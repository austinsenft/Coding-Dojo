const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema(
    {
        name: {
            type: String, 
            required: [true, '{PATH} is required.'],
            minlength: [1 , '{PATH} must be at least {MINLENGTH} characters.']
        },
        description: {
            type: String, 
            required: [true, '{PATH} is required.'],
            minlength: [4 , '{PATH} must be at least {MINLENGTH} characters.']
        },
    },
    {timestamps: true}
);


/* 
Register schema with mongoose and provide a string to name the collection. This
also returns a reference to our model that we can use for DB operations.
*/
const Author = mongoose.model("Author", AuthorSchema);


module.exports = {Author: Author};