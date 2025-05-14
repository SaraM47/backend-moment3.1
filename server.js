// Load environment variables from .env file
require('dotenv').config();

// Import required packages
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Import routes
const experienceRoutes = require('./routes/experienceRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Enable Cross-Origin Resource Sharing (CORS)
// Allows the API to be accessed from other domains (e.g. frontend hosted elsewhere)
app.use(cors());

// Enable parsing of JSON in request bodies
app.use(express.json());

// Mount the experience routes under the /api/experience path
app.use('/api/experience', experienceRoutes);

// Connect to MongoDB Atlas using the URI from environment variables
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB Atlas');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.error('MongoDB connection error:', err));
