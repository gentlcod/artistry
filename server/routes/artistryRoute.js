import express from 'express';
import dotenv from 'dotenv';
import OpenAI from 'openai'; // Correct import based on the provided documentation

dotenv.config();

const router = express.Router();

// Initialize OpenAI with your API key
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Test route to check if the server is running
router.route('/').get((req, res) => {
  res.status(200).json({ message: 'Hello from ARTISTRY!' });
});

// Route to generate an image using OpenAI
router.route('/').post(async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({ error: 'Prompt is required' });
    }

    // Use the OpenAI API to generate an image
    const aiResponse = await openai.images.create({
      prompt,
      n: 1,
      size: '1024x1024',
      response_format: 'b64_json',
    });

    const image = aiResponse.data[0].b64_json;
    res.status(200).json({ photo: image });
  } catch (error) {
    console.error('Error generating image:', error);

    if (error.response) {
      console.error('Response error data:', error.response.data);
      res.status(error.response.status).send(error.response.data);
    } else {
      res.status(500).send('Something went wrong');
    }
  }
});

export default router;
