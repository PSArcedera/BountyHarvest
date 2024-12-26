import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import Products from '../models/productModel.js';

const productRouter = express.Router();

productRouter.get('/', expressAsyncHandler(async (req, res) => {
    const products = await Products.find();
    res.send(products);
}));


export default productRouter;