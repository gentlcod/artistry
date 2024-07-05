import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './mongodb/connect.js';
import postRoute from './routes/postRoute.js';
import artistryRoute from './routes/artistryRoute.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json({ limit: '50mb' }));

app.use('/api/v1/post', postRoute);
app.use('/api/v1/artistry', artistryRoute);

app.get('/', async (req, res) => {
  res.send('Hello from Artistry!');
});

app.use((err, req, res, next) => {
  console.error('Error:', err.stack);
  res.status(500).send('Something broke!');
});

const startServer = async () => {
  try {
    await connectDB(process.env.MONGODB_URL);
    app.listen(8080, () => {
      console.log('Server has started on http://localhost:8080');
    });
  } catch (error) {
    console.error('Error starting server:', error);
  }
};

startServer();
