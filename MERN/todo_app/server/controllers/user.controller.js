const {
    createUser,
    getAllUsers,
    getUserById,
    deleteUserById,
    getUserByIdAndUpdate,
    createManyUsers
} = require('../services/user.service');

// ask about this 
register: (req, res) => {
    User.create(req.body)
        .then(user => {
            res.json({ msg: "success!", user: user });
        })
        .catch(err => res.json(err));
}

const handleCreateUser = async (req, res) => {
    console.log('controller: handleCreateUser req.body:', req.body);
    try {
        const user = await createUser(req.body);
        return res.json(user)
    } catch (error) {
        return res.status(400).json(error);
    }
}

const handleGetAllUsers = async (req, res) => {
    console.log('controller: handleGetAllUsers');
    try {
        const users = await getAllUsers();
        return res.json(users)
    } catch (error) {
        return res.status(400).json(error);
    }
}

const handleGetUserById = async (req, res) => {
    console.log('controller: handleGetUserById req.params: ', req.params.id);
    try {
        const user = await getUserById(req.params.id);
        return res.json(user)
    } catch (error) {
        return res.status(400).json(error);
    }
}

const handleDeleteUserById = async (req, res) => {
    console.log('controller: handleDeleteUserById req.params: ', req.params.id);
    try {
        const user = await deleteUserById(req.params.id);
        return res.json(user)
    } catch (error) {
        return res.status(400).json(error);
    }
}

const handleUpdateUserById = async (req, res) => {
    console.log('controller: handleUpdateUserById req.params: ', req.params.id, "\n req.body :", req.body);
    try {
        const user = await getUserByIdAndUpdate(req.params.id, req.body);
        return res.json(user)
    } catch (error) {
        return res.status(400).json(error);
    }
}

// Not needed on exam, used to seed lot's of data into the DB so we can travel
const handleCreateManyUsers = async (req, res) => {
    try {
        if (Array.isArray(req.body) === false) {
            throw new Error('The request body must be an array.');
        }

        const settledOutcomes = await createManyUsers(req.body);
        return res.json(settledOutcomes);
    } catch (error) {
        return res.status(400).json(error);
    }
}

module.exports = {
    handleCreateUser: handleCreateUser,
    handleGetAllUsers,
    handleGetUserById,
    handleDeleteUserById,
    handleUpdateUserById,
    handleCreateManyUsers
}