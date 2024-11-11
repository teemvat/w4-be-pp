const express = require('express');
const router = express.Router();

const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
} = require ("../controllers/userControllers");

router.use(express.json());

router.get("/users", getAllUsers);

router.post("/users",createUser);

router.get("/users/:userId", getUserById);

router.put("/users/:userId", updateUser);

router.delete("/users/:userId", deleteUser)

module.exports = router;