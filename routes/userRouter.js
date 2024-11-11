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

router.get("/", getAllUsers);

router.post("/",createUser);

router.get("/:userId", getUserById);

router.put("/:userId", updateUser);

router.delete("/:userId", deleteUser)

module.exports = router;