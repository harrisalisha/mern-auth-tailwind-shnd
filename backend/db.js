import mongoose from 'mongoose'

export async function connectdb(){
try{
  await  mongoose.connect(process.env.MONGO_URL)
  console.log('connect to database')
}catch(err){
    console.log(err);
}
}