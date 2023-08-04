// dbConnection.js

const mongoose = require('mongoose');

const connectDb = async () => {
  try {
    const uri = 'mongodb+srv://solyman:solyman@cluster0.a6uhokg.mongodb.net/my-contacts-backend?retryWrites=true&w=majority'
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
     
    });
    console.log('Connected to MongoDB successfully!');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1); // Exit the application on failure
  }
};

module.exports = connectDb;