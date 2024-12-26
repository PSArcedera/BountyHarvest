import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
        productName: {type:String, required:true},
        productPrice: {type:Number, required:true},
        productImage: {type:String, required:true}
    },
);

const Products = mongoose.model('Products', productSchema);
export default Products;