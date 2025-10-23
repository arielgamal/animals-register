const express = require('express');
const app = express();
const cors = require('cors');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
require('dotenv').config();

connectDB();

app.use(cors());
app.use(express.json());

app.use('/', userRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} acesse localhost:${PORT}`);
});