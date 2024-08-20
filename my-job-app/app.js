const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config(); 
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const jobRoutes = require('./routes/jobRoutes');


const app = express();

// Connect to MongoDB
connectDB();


app.use(bodyParser.json());
app.use(cors());

// Routes
app.use('/user', userRoutes);
app.use('/job', jobRoutes);



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
