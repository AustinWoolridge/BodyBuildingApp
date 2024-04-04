// Import required modules
const express = require('express');
const { MongoClient } = require('mongodb');

// Create an Express application
const app = express();
const port = 3000; // Set your desired port number

//Importing Cors app
const cors = require('cors');



// MongoDB Connection URI
//const uri = 'LOCATED IN THE IGNORED URI.TXT';
const dbName = 'sample_mflix'; // Replace with your database name
const collectionName = 'muscleGroups'; // Replace with your collection name

// Middleware to parse JSON data
app.use(express.json());
//Use the cors middleware in your Express app before defining your routes
app.use(cors());

async function connect() {
    const client = new MongoClient(uri);
    try {
        // Connect to MongoDB
        await client.connect();
        console.log('Connected to MongoDB');
        return client.db(dbName);
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        throw error;
    } finally {
        console.log('Connection attempt completed');
    }
}


// Route to handle inserting data into MongoDB
app.post('/insert', async (req, res) => {
    try {
        const db = await connect();
        const collection = db.collection(collectionName);
        const result = await collection.insertOne(req.body); // Assuming the request body contains the data to insert
        res.json({ success: true, insertedCount: result.insertedCount });
    } catch (error) {
        console.error('Error inserting data:', error);
        res.status(500).json({ success: false, error: 'Error inserting data' });
    }
});

// Route to handle fetching data from MongoDB
app.get('/fetch', async (req, res) => {
    try {
        const db = await connect();
        const collection = db.collection(collectionName);
        const data = await collection.find({}).toArray();
        res.json(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Error fetching data' });
    }
});

// Start the Express server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});