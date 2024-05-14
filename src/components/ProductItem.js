import React from "react"
import Link from "next/link"
import ProductRate from "./ProductRate"
import AddToCart from "./AddtoCart"
import Image from "next/image"

export default function ProductItem({product}){
    return(
      
         <div key={product.id} className="bg-white rounded-lg shadow-lg p-8">
           <div className="relative overflow-hidden">
             <Image 
             className="object-cover w-full h-full"
            src={product.image}
             width={100}
             height={100}
             alt="Product" />
             <div className="absolute inset-0 bg-black opacity-40" />
             <div className="absolute inset-0 flex items-center justify-center">
               <Link className="bg-white text-gray-900 py-2 px-6 rounded-full font-bold hover:bg-gray-300" href={`/product/${product.id}`}>View Product</Link>
             </div>
           </div>
           <h3 className="text-xl font-bold text-gray-900 mt-4">{product.name}</h3>
           <ProductRate rate={product.rating} count={product.numReviews} reviews/>
           <p className="text-gray-500 text-sm mt-2">{product.description}</p>
           <div className="flex items-center justify-between mt-4">
             <span className="text-gray-900 font-bold text-lg"> ₹{product.price}</span>
             
             <AddToCart
              showQty={false}
              product={product}
              increasePerClick={true}
              redirect={false}
             
             />
             
           </div>
         </div>
         
      
   

    )
}