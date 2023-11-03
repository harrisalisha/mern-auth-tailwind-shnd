import express from 'express'
import dotenv from 'dotenv'
const app = express()
import connectDB from '../../logRoket-auth-redux-tookit/backend/config/db.js';
import userRoutes from './routes/userRoutes.js' 

dotenv.config()
connectDB();
const PORT = 5000 ;

app.use(express.json())

app.get ('/', (req, res) => {
    res.send('Heloo')
})
app.use('/api/users', userRoutes);

app.listen( PORT, function(){
    console.log(`Server Listening at ${PORT}`)
})