import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './mongodb/connect.js';
import postRoute from './routes/postRoute.js';
import artistryRoute from './routes/artistryRoute.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));

// Define routes
app.use('/api/v1/post', postRoute);
app.use('/api/v1/artistry', artistryRoute);

// Root route
app.get('/', async (req, res) => {
  res.send('Hello from Artistry!');
});

const startServer = async () => {
  try {
    await connectDB(process.env.MONGODB_URL); // Ensure the database is connected before starting the server
    app.listen(8080, () => 
      console.log('Server has started on http://localhost:8080')
    );
  } catch (error) {
    console.log('Error starting server:', error);
  }
};

startServer();
