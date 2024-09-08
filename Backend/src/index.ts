import express, { Request, Response } from 'express';
import cors from 'cors';
import 'dotenv/config';
import mongoose from 'mongoose';
import userRoute from './Routes/userRoute'

const connectdb =async ()=>{

    mongoose
    .connect(process.env.DATABASE_URL as string)
    .then(() => {
        console.log('Database Connected Successfully');
    })
    .catch((err) => {
        console.error('Database connection failed:', err);
        process.exit(1); 
    });
}

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/v1/user',userRoute);
const PORT = process.env.PORT || 5000; 
connectdb();
app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
