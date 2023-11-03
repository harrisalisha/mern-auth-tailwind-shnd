import express from 'express'
import dotenv from 'dotenv'
const app = express()
import connectDB from '../../logRoket-auth-redux-tookit/backend/config/db.js';

dotenv.config()
connectDB();
const PORT = 5000 ;

app.listen( PORT, function(){
    console.log(`Server Listening at ${PORT}`)
})