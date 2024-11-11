const User = require("../models/userModel.js");

const getAllUsers = (req, res) => {
    res.json(User.getAll());
};

const createUser = (req, res) => {
    const newUser = User.addOne(req.body);
    if (newUser) {
        res.status(201).json(newUser);
    } else {
        res.status(500).json({message:"failed to create user"});
    }
};

const getUserById = (req, res) => {
    const userId = req.params.userId;
    const user = User.findById(userId);
    if(user) {
        res.json(user);
    } else {
        res.status(404).json({message: "User not found"});
    }
}

const updateUser = (req, res) => {
    const userId =req.params.userId;
    const updatedData = req.body;
    const updatedUser = User.updateOneById(userId, updatedData);
    if (updatedUser) {
        res.json(updatedUser);
    } else {
        res.status(404).json({message:"User not found"});
    }
}

const deleteUser = (req, res) => {
    const userId = req.params.userId;
    const isDeleted = User.deleteOneById(userId);
    if (isDeleted) {
        res.status(204).send();
    } else {
        res.status(404).json({message:"User not found"});
    }
}

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
};