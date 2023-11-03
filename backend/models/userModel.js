import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    emai: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    }
}, { timestamps: true});

const User = mongoose.model('User', userSchema);

export default User;