const express = require('express');

const {
    handleCreateAuthor,
    handleGetAllAuthors,
    handleGetAuthorById,
    handleDeleteAuthorById,
    handleUpdateAuthorById,
    handleCreateManyAuthors
} = require('../controllers/author.controller')


const router = express.Router();


router.get('/', handleGetAllAuthors)
router.post('/', handleCreateAuthor)
router.get('/:id', handleGetAuthorById)
router.delete('/:id', handleDeleteAuthorById)
router.put('/:id', handleUpdateAuthorById)
router.post('/many', handleCreateManyAuthors)


module.exports = { authorRouter: router }