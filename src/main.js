// Import the database functions from databaseConfig.js
import { connectToDatabase, insertDocument, closeDatabase } from './lib/config/databaseConfig.js';

async function main() {
    try {
        // Connect to the database
        await connectToDatabase();
        console.log("Connected to the database");

        // Insert a document into the database
        const document = { name: 'John Doe', age: 30, status: 'active' };
        await insertDocument(document);
        console.log("Inserted document:", document);

        // Close the database connection
        await closeDatabase();
        console.log("Closed the database connection");
    } catch (error) {
        console.error('Error:', error);
    }
}

main();
