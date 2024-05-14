import ProductItem from "@/components/ProductItem";
import { data } from "@/utils/data";


export default function Home() {
  const {products}=data
  return (
    <div className="bg-gray-900 py-16">
     <div className="container mx-auto px-4">
       <h2 className="text-3xl font-bold text-white mb-8">Introducing Our Latest Product</h2>
       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
   {products.map((product)=>(
<ProductItem key={product.id} product={product}/>

   ))}
   </div>
   </div>
   </div>
  );
}
