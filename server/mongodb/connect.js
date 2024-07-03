import mongoose from 'mongoose';

const connectDB = (url) => {
  mongoose.set('strictQuery', true);

  mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false  // optional but recommended
  })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));
};

export default connectDB;
