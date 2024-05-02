import { MongoClient, ServerApiVersion } from 'mongodb';

const uri = "mongodb+srv://orizu1996:Qwertyuiop14%40@barter.besxqtv.mongodb.net/?retryWrites=true&w=majority";


const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    await client.close();
  }
}

// Function to connect to the MongoDB database
async function connectToDatabase() {
  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();
    console.log("Connected to the database");
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
}

// Function to insert a document into the database
async function insertDocument(document) {
  try {
    const database = client.db("<dbname>");
    const collection = database.collection("documents");
    const result = await collection.insertOne(document);
    console.log("Inserted document with id:", result.insertedId);
  } catch (error) {
    console.error("Error inserting document:", error);
  }
}

// Function to close the database connection
async function closeDatabase() {
  try {
    // Close the MongoClient connection
    await client.close();
    console.log("Closed the database connection");
  } catch (error) {
    console.error("Error closing the database connection:", error);
  }
}

// Export the connectToDatabase, insertDocument, and closeDatabase functions
export { connectToDatabase, insertDocument, closeDatabase, run };
