const express = require('express');

const {
    handleCreateUser,
    handleGetAllUsers,
    handleGetUserById,
    handleDeleteUserById,
    handleUpdateUserById,
    handleCreateManyUsers
} = require('../controllers/user.controller')


const router = express.Router();

router.get('/dashboard')
router.get('/', handleGetAllUsers)
router.post('/', handleCreateUser)
router.get('/:id', handleGetUserById)
router.delete('/:id', handleDeleteUserById)
router.put('/:id', handleUpdateUserById)
router.post('/many', handleCreateManyUsers)


module.exports = { userRouter: router }