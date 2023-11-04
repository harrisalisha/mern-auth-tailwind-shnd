import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
const app = express()
import {connectDb}from './config/db.js';
import userRoutes from './routes/userRoutes.js' 
import authRoutes from './routes/authRoutes.js';
import { errorHandler, notFound } from './middelware/errorMiddleware.js';


dotenv.config()

const PORT = 5000 ;

connectDb();

app.use(express.json())
app.use(cors());

app.get ('/', (req, res) => {
    res.send('Heloo')
})
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes)

app.use(notFound)
app.use(errorHandler)

app.listen( PORT, function(){
    console.log(`Server Listening at ${PORT}`)
})