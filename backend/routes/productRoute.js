import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import Products from '../models/productModel.js';

const productRouter = express.Router();

//Get all products
productRouter.get(
    '/', 
    expressAsyncHandler(async (req, res) => {
        const products = await Products.find();
        res.send(products);
    })
);

//Find a product
productRouter.get(
    '/:id', 
    expressAsyncHandler(async(req, res) => {
        const product = await Products.findById(req.params.id);
        if(product) {
            res.send(product);
        } 
        else{
            res.status(404).send({message: 'Product Not Found'});
        }
    })
);

//Create a product
productRouter.post(
    '/create',
    expressAsyncHandler(async (req, res) => {
        const newProduct = new Products({
            productName: req.body.productName,
            productPrice: req.body.productPrice,
            productImage: req.body.productImage
        });
        const product = await newProduct.save();
        res.send({ message: 'Product Created', product});
    })
);

//Update a product
productRouter.put(
    '/:id',
    expressAsyncHandler(async (req, res) => {
        const productId = req.params.id;
        const product = await Products.findById(productId);
        if(product){
            productName = req.body.productName;
            productPrice = req.body.productPrice;
            productImage = req.body.productImage;
            await product.save();
            res.send({message: 'Product Updated'});
        }
        else{
            res.status(404).send({message: 'Product Not Found'});
        }
    })
);

//Delete product
productRouter.delete(
  '/:id',
  expressAsyncHandler(async (req, res) => {
    const product = await Products.findById(req.params.id);
    if(product){
        await product.remove();
        res.send({message: 'Product Deleted'});
    }
    else{
        res.status(404).send({message: 'Product Not Found'});
    }
  })  
);

export default productRouter;