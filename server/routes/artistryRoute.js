import express from 'express';
import dotenv from 'dotenv';
import OpenAI from 'openai';

dotenv.config();

const router = express.Router();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

router.post('/', async (req, res) => {
  try {
    const { prompt } = req.body;

    const aiResponse = await openai.images.create({
      prompt,
      n: 1,
      size: '1024x1024',
      responseType: 'b64',
    });

    const image = aiResponse.data[0].toString('base64');
    res.status(200).json({ photo: image });
  } catch (error) {
    console.error('Error generating image:', error);
    res.status(500).send(error?.response?.data?.error?.message || 'Something went wrong');
  }
});

export default router;
