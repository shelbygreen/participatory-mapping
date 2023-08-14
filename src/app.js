// Import required modules
const express = require('express');
const cors = require('cors');

// Create an Express application
const app = express();

// Define CORS options
let corsOptions = {
    origin: ["http://localhost:3000", "https://participatory-map-e1663db63ec0.herokuapp.com"],
    optionsSuccessStatus: 200,
    credentials: true,
    method: ['GET, POST'],
    // allowedHeaders: '*',
    // credentials: true,
    // origin: true
    // origin: 'http://localhost:3000'
    // origin: "*",
    // "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    // "preflightContinue": false,
    // "optionsSuccessStatus": 200
}

// Enable CORS for the application using the defined options
app.use(cors(corsOptions));
// app.use(cors())

// Enable parsing of URL-encoded data
app.use(express.urlencoded({ extended: true }));

// Enable parsing of JSON data with specific content type
app.use(express.json({ type: 'application/vnd.api+json' }));

// Mount the index route
const index = require('./routes/index');
app.use(index);

// Mount the userRoute for API routes starting with '/api/'
const userRoute = require('./routes/product.routes');
app.use('/api/', userRoute);

// Serve static files from the 'docs' directory for the root path
app.use('/', express.static('docs'))

// Export the app module
module.exports = app;
