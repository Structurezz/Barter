import { connectToDatabase, closeDatabase } from './lib/config/databaseConfig.js';
import { server } from './bootstrap/server.js';

// Create a flag to track whether the server is already started
let serverStarted = false;

const startServer = async () => {
  try {
    // Connect to the database only if the server is not already started
    if (!serverStarted) {
      await connectToDatabase();
      serverStarted = true;
    }

    // Start the server if it's not already started
    if (!server.listening) {
      server.listen(27017, () =>
        console.info(`📢 Application running on port 21390`)
      );
    }
  } catch (error) {
    console.error('Error starting server:', error);
    process.exit(1); // Exit the process with an error code
  }
};

// Start the server
startServer();
