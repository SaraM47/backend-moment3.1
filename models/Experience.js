/* This file defines the Mongoose schema for a work experience entry.
// It specifies the structure of documents stored in the MongoDB "experiences" collection,
// including company name, job title, location, start and end dates, and a description.
// The schema is used to create the Experience model for interacting with the database.
*/

const mongoose = require('mongoose');

const experienceSchema = new mongoose.Schema({
  companyName: String,
  jobTitle: String,
  location: String,
  startDate: String,
  endDate: String,
  description: String
});

module.exports = mongoose.model('Experience', experienceSchema);
