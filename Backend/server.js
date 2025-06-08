const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const Blog = require('./models/blog.model');
require('dotenv').config();
const blogRoutes = require('./routes/blogRoutes');

const PORT = 5000;

// To resolve CORS errors
app.use(cors());
app.use(express.json());

// **Fix here:** Use the imported router correctly
app.use(blogRoutes);

mongoose.connect(process.env.DB_URI)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is listening on PORT: ${PORT}`);
        });
    })
    .catch(err => {
        console.log(err);
    });
