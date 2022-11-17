const { User } = require("../models/user.model");

const createUser = async (data) => {
    console.log('service: createUser');
    const user = await User.create(data);
    return user;
}

const getAllUsers = async () => {
    console.log('service: getAllUsers');
    const users = await User.find().sort({type:1});
    // blackbelt feature 
    return users;
}

const getUserById = async (id) => {
    console.log('service: getUserById');
    const user = await User.findById(id);
    return user;
}

const deleteUserById = async (id) => {
    console.log('service: deleteUserById');
    const user = await User.findByIdAndDelete(id);
    return user;
}

const getUserByIdAndUpdate = async (id, data) => {
    console.log('service: getUserByIdAndUpdate');
    const user = await User.findByIdAndUpdate(id, data, {
        // Re-run validations.
        runValidators: true,
        // Return the updated user.
        new: true
    });
    return user;
}

const createManyUsers = async (documents) => {
    // Don't await inside a loop, it will delay iteration.
    const createPromises = documents.map((document) =>
        createUser(document)
    );
    // The one resulting promise will be awaited by the caller of this function.
    return Promise.allSettled(createPromises);
};

module.exports = {
    createUser: createUser,
    getAllUsers,
    getUserById,
    deleteUserById,
    getUserByIdAndUpdate,
    createManyUsers
};