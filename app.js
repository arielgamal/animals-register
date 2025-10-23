import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db.js';
import userRoutes from './routes/userRoutes.js'
import petRoutes from './routes/petRoutes.js'
import 'dotenv/config'

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use('/', userRoutes);
app.use('/', petRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} acesse localhost:${PORT}`);
});