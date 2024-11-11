const express = require('express');
const router = express.Router();

const {
  getAllTours,
  getTourById,
  createTour,
  updateTour,
  deleteTour,
} = require("../controllers/tourControllers.js"); 

// Middleware to parse JSON
router.use(express.json());

// ROUTES
// GET /tours
router.get("/tours", getAllTours);

// POST /tours
router.post("/tours", createTour);

// GET /tours/:tourId
router.get("/tours/:tourId", getTourById);

// PUT /tours/:tourId
router.put("/tours/:tourId", updateTour);

// DELETE /tours/:tourId
router.delete("/tours/:tourId", deleteTour);

module.exports = router;