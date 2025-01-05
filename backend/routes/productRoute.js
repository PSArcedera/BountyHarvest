import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import Products from '../models/productModel.js';
import jwt from 'jsonwebtoken'
import dotenv from "dotenv"
dotenv.config({path: "../config.env"})

const productRouter = express.Router();

//#1 Get all products
productRouter.get(
    '/', 
    verifyToken,
    expressAsyncHandler(async (req, res) => {
        const products = await Products.find();
        res.send(products);
    })
);

//#2 Find a product
productRouter.get(
    '/:id', 
    verifyToken,
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

//#3 Create a product
productRouter.post(
    '/create',
    verifyToken,
    expressAsyncHandler(async (req, res) => {
        const newProduct = new Products({
            productName: req.body.productName,
            productPrice: req.body.productPrice,
            productStock: req.body.productStock,
            productImage: req.body.productImage
        });
        const product = await newProduct.save();
        res.send({ message: 'Product Created', product});
    })
);

//#4 Update a product
productRouter.put(
    '/:id',
    verifyToken,
    expressAsyncHandler(async (req, res) => {
        const productId = req.params.id;
        const product = await Products.findById(productId);
        if(product){
            productName = req.body.productName;
            productPrice = req.body.productPrice;
            productStock = req.body.productStock;
            productImage = req.body.productImage;
            await product.save();
            res.send({message: 'Product Updated'});
        }
        else{
            res.status(404).send({message: 'Product Not Found'});
        }
    })
);

//#5 Delete product
productRouter.delete(
  '/:id',
  verifyToken,
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

//#6 Verify login
function verifyToken(request, response, next){
    const authHeaders = request.headers["authorization"]
    const token = authHeaders && authHeaders.split(' ')[1]
    if(!token){
        return response.status(401).json({message: "Authentication token is missing"})
    }
    
    jwt.verify(token, process.env.SECRETKEY, (error, user) => {
        if(error){
            return response.status(403).json({message:"Invalid token"})
        }
        request.body.user = user
        next()
    })

}
export default productRouter;