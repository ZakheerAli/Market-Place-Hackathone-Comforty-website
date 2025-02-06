import { client } from "@/sanity/lib/client"
import ProductCard from "./productCard"
import { product } from "../types/product"
export default async function Products(){
  const res:product[]= await client.fetch(`*[_type=="products"][10..17]{
  _id,
    title,
    price,
    description,
    "image":image.asset->url,
    badge,
    inventory,
    _createdAt,
    tags
    
}`)
console.log(res)
    return(
       <>
        <div className=" md:mt-40 w-full px-[7vw]  mt-[600px] space-y-[40px] pt-[20px]">
        <div>
          <h1 className="text-[35px] md:text-[50px] font-semibold text-center underline decoration-[#ae4102]">
            Our products
          </h1>
        </div>
        <div className="gap-5 grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">{
          res.map((product)=>{
            return(
              <ProductCard key={product._id} product={product}/>
            )
          })}
        </div>
       
      </div>       
        </>
    )
}