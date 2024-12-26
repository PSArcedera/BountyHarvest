import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
    {
        orderProduct: {type:String, required: true},
        orderPrice: {type:Number, required:true}
    }
);

const Order = mongoose.model('Order', orderSchema);
export default Order;