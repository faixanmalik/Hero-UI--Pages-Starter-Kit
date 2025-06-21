import mongoose from 'mongoose';

const connectDb = (handler) => async (req, res) => {
  try {
    // Check if the connection is already established
    if (mongoose.connection.readyState) {
      return handler(req, res);
    }

    mongoose.set('strictQuery', false);

    // Connect to MongoDB
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('MongoDB connected successfully');
    return handler(req, res);
  } catch (error) {
    console.error('MongoDB connection error:', error);
    res.status(500).json({ error: 'Internal Server Error' }); // Respond with an error message
  }
};

export default connectDb;