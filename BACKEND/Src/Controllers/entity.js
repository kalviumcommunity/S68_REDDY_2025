const express = require("express");
const Entity = require("../models/entityModel"); // Adjust based on your schema
const router = express.Router();

// Update an entity
router.put("/:id", async (req, res) => {
  try {
    const updatedEntity = await Entity.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedEntity);
  } catch (error) {
    res.status(500).json({ error: "Error updating entity" });
  }
});

module.exports = router;
