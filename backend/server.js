import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import { connectDB } from './config/db.js';

import adminRoutes from './routes/adminRoutes.js';
import instructorRoutes from './routes/instructorRoutes.js';
import userRoutes from './routes/userRoute.js'

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
// Enable CORS in your Express app
app.use(cors({
    origin: ['http://localhost:3000', 'http://localhost:5173'], // Allow the frontend to access the backend
    credentials: true, // Allow cookies to be sent with requests
  }));
app.use(express.json());     // aow us to accept data in the req.body
app.use(bodyParser.json());

app.use('/api/user', userRoutes)
app.use('/api/admin', adminRoutes);
app.use('/api/instructor', instructorRoutes);

app.listen(PORT, () => {
    connectDB();
    console.log('server started at http://localhost:' + PORT);
});

