
function ProductTile({product}){
    return (
        <div className="m-10  bg-zinc-200 max-w-[300px]">
            <img src={product.productImage} alt="product image" className="w-[300px] h-[300px] object-fill"/>
            <div className="p-4 text-left">
                <h1 className="text-xl font-semibold">{product.productName}</h1>
                <div className="flex justify-between">
                    <h2 className="text-m font-medium">Php {product.productPrice}</h2>
                    <h2 className="text-m font-medium">Stocks: 10 </h2>
                </div>

            </div>
            <button className="bg-green-900 w-[300px] h-[50px] text-white">ORDER</button>
        </div>
    )
}

export default ProductTile