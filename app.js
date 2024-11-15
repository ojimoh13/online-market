const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();  // Load environment variables

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB using the connection string stored in the .env file
const dbURI = process.env.DB_URI;  // Get the MongoDB URI from the environment variables

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Database connected successfully');
  })
  .catch((err) => {
    console.error('Database connection error:', err);
  });

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
