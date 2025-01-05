import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import Order from '../models/orderModel.js';

const orderRouter = express.Router();

//#1 Get all orders
orderRouter.get(
    '/', 
    expressAsyncHandler(async (req, res) => {
        const orders = await Order.find({});
        res.send(orders);
    })
);

//#2 Find an order
orderRouter.get(
    '/:id',
    expressAsyncHandler(async (req,res) => {
        const order = await Order.findById(req.params.id);
        if(order){
            res.send(order)
        }
        else{
            res.status(404).send({message: 'Order Not Found'});
        }
    })
);

//#3 Create an order
orderRouter.post(
    '/create',
    expressAsyncHandler(async (req, res) => {
        const newOrder = new Order({
            orderPerson : req.body.orderPerson,
            orderProduct: req.body.orderProduct,
            orderPrice: req.body.orderPrice
        });
        const order = await newOrder.save();
        res.send({message: 'Order Created', order});
    })
);

//#4 Update an order
orderRouter.put(
    '/:id',
    expressAsyncHandler(async (req, res) => {
        const orderId = req.params.id;
        const order = await Order.findById(orderId);
        if(order){
            orderPerson = req.body.orderPerson;
            orderProduct = req.body.orderProduct;
            orderPrice = req.body.orderPrice;
            await order.save();
            res.send({message: 'Order Updated'});
        }
        else{
            res.status(404).send({message: 'Order Not Found'});
        }
    })
);

//#5 Delete an order
orderRouter.delete(
    '/:id',
    expressAsyncHandler(async (req, res) =>{
        const orderId = req.params.id;
        const order = await Order.findById(orderId);
        if(order){
            await order.remove();
            res.send({message: 'Order Deleted'});
        }
        else{
            res.status(404).send({message: 'Order Not Found'});
        }

    })
);

export default orderRouter;