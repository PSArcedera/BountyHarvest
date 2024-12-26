import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import Order from '../models/orderModel.js';

const orderRouter = express.Router();

orderRouter.get('/', expressAsyncHandler(async (req, res) => {
    const orders = await Order.find({});
    res.send(orders);
}));

export default orderRouter;