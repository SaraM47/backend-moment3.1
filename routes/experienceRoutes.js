const express = require('express');
const router = express.Router();
const Experience = require('../models/Experience');

// GET all experiences
// Returns all documents from the "experiences" collection
router.get('/', async (req, res) => {
    try {
      const data = await Experience.find();
      res.json(data);
    } catch (err) {
      console.error('GET /api/experience error:', err);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

// POST new experience
// Adds a new work experience to the database
router.post('/', async (req, res) => {
  const { companyName, jobTitle, location, startDate, endDate, description } = req.body;

  // Basic input validation: these fields are required
  if (!companyName || !jobTitle || !location) {
    return res.status(400).json({
      error: 'companyName, jobTitle and location are required fields.'
    });
  }

  try {
    // Create and save new experience document
    const item = new Experience({ companyName, jobTitle, location, startDate, endDate, description });
    const saved = await item.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: 'Invalid input' });
  }
});

// GET /:id 
// GET specific experience by ID
router.get('/:id', async (req, res) => {
    try {
      const experience = await Experience.findById(req.params.id);
      if (!experience) {
        return res.status(404).json({ error: 'Experience not found' });
      }
      res.json(experience);
    } catch (err) {
      res.status(500).json({ error: 'Server error' });
    }
  });
  

// PUT (update) an experience by ID
// Replaces the document with new data
router.put('/:id', async (req, res) => {
  const { companyName, jobTitle, location, startDate, endDate, description } = req.body;

  // Validate required fields
  if (!companyName || !jobTitle || !location) {
    return res.status(400).json({
      error: 'companyName, jobTitle and location are required fields for update.'
    });
  }

  try {
    // Update the experience document with new values
    const updated = await Experience.findByIdAndUpdate(
      req.params.id,
      { companyName, jobTitle, location, startDate, endDate, description },
      { new: true } // Return the updated document
    );
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: 'Update failed' });
  }
});

// DELETE an experience by ID
// Removes the document from the database
router.delete('/:id', async (req, res) => {
  try {
    await Experience.findByIdAndDelete(req.params.id);
    res.json({ message: 'Deleted successfully' });
  } catch (err) {
    res.status(400).json({ error: 'Delete failed' });
  }
});

module.exports = router;
