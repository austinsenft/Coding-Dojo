const { Author } = require("../models/author.model");

const createAuthor = async (data) => {
    console.log('service: createAuthor');
    const author = await Author.create(data);
    return author;
}

const getAllAuthors = async () => {
    console.log('service: getAllAuthors');
    const authors = await Author.find();
    return authors;
}

const getAuthorById = async (id) => {
    console.log('service: getAuthorById');
    const author = await Author.findById(id);
    return author;
}

const deleteAuthorById = async (id) => {
    console.log('service: deleteAuthorById');
    const author = await Author.findByIdAndDelete(id);
    return author;
}

const getAuthorByIdAndUpdate = async (id, data) => {
    console.log('service: getAuthorByIdAndUpdate');
    const author = await Author.findByIdAndUpdate(id, data, {
        // Re-run validations.
        runValidators: true,
        // Return the updated author.
        new: true
    });
    return author;
}

const createManyAuthors = async (documents) => {
    // Don't await inside a loop, it will delay iteration.
    const createPromises = documents.map((document) =>
        createAuthor(document)
    );
    // The one resulting promise will be awaited by the caller of this function.
    return Promise.allSettled(createPromises);
};

module.exports = {
    createAuthor: createAuthor,
    getAllAuthors,
    getAuthorById,
    deleteAuthorById,
    getAuthorByIdAndUpdate,
    createManyAuthors
};