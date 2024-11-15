const express = require('express');
const connectDB = require('./config/db');  // Import the MongoDB connection function
const cors = require('cors');
const productRoutes = require('./routes/productRoutes');  // Assuming this file exists for product-related routes
require('dotenv').config();  // Load environment variables from .env file

const app = express();

// Connect to MongoDB
connectDB();  // Call the connectDB function to establish the MongoDB connection

// Middleware
app.use(cors());  // Enable CORS
app.use(express.json());  // Parse incoming JSON data

// Routes
app.use('/api', productRoutes);  // Use the productRoutes for API calls

// Start server
const PORT = process.env.PORT || 5000;  // Set the port, defaulting to 5000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
