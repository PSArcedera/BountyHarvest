import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        userName: {type: String, required: true},
        userPassword: {type:String, required: true},
        userNumber: {type:Number, required: true},
        userEmail: {type:String, required:true},
        userAddress: {type:String, required:true},
        userOrders: []
    },
);

const User = mongoose.model('User', userSchema);
export default User;