const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Enable CORS
app.use(cors());

// Set up the database connection
mongoose.connect('mongodb://127.0.0.1:27017/my-database', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log(err));

// Define a schema for the data
const contactSchema = new mongoose.Schema({
  name: String,
  phone: String,
  password: String,
  message: String
});

// Create a model for the data based on the schema
const Contact = mongoose.model('Contact', contactSchema);

// Set up the API endpoint to handle the form submission
app.post('/api/contact', (req, res) => {
  const contact = new Contact({
    name: req.body.name,
    phone: req.body.phone,
    password: req.body.password,
    message: req.body.message
  });
  contact.save()
    .then(() => res.send('Data saved to MongoDB'))
    .catch((err) => console.log(err));
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
