import mongoose from 'mongoose'

async function connectDb(){

    try{
        await mongoose.connect('mongodb+srv://user123:user123@cluster0.bc30dws.mongodb.net/traversy-mern-auth?retryWrites=true&w=majority');
        console.log('server connected to database');
         
    }catch(err){
         console.log(err);
         throw new Error('cannot connect to mongodb');
    }
}
 async function disConnectDb(){
    try{
        await mongoose.disconnect();

    }catch(err){
        console.log(err);
        throw new Error('Connection is to mongodb is closed');
   }
}

export { connectDb, disConnectDb};
