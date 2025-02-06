import { client } from "@/sanity/lib/client";
import Image from "next/image";
import ProductCard from "../components/productCard";
export default async function Shop() {
  const res = await client.fetch(`*[_type=="products"][0..3]{
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
const cate= await client.fetch(`*[_type=="categories"]{
    _id,
      "image":image.asset->url,
        title,
      products
      
  }`)
  console.log(res)
  return (
    <>
      <div className="w-full px-[5vw] lg:h-[600px] mt-[20px] space-y-[30px] pt-[20px]">
        <div>
          <h1 className="text-[30px] md:text-[50px] font-semibold underline decoration-[#ae4102]">
            Feature products
          </h1>
        </div>
        <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-7 lg:gap-4   ">{res.map((product)=>{
          return(
            <ProductCard key={product._id} product={product}/>
          )
        })}</div>
 
      </div>
      <div className="px-[3vw] space-y-5 pb-10 mt-10">
          <div className="w-full h-[58px] flex items-center justify-between xs:gap-6 xs:px-6 xs:mt-9">
          <p className="text-[30px] md:text-[50px] font-semibold underline decoration-[#ae4102]">Top Categories</p>
       </div> 
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">{cate.map((elem)=>{
          return(
            <div key={elem._id} className="w-full  xs:h-[300px] xs:w-[300px]  md:h-[424px] flex flex-col gap-3 xs:px-10 md:px-2  relative">
                      <Image
                        className="hover:scale-105 duration-150 cursor-pointer"
                        src={elem.image}
                        alt={elem.title}
                        width={400}
                        height={400}
                      />
                      <div className="bg-black text-white  w-[90%] xs:h-[70px] md:h-[85px] opacity-70 absolute xs:top-[50%]  md:top-[70%] px-4 py-3 ">
                        <h1 className="text-[20px] ">{elem.title}</h1>
                        <p className="text-[16px]">{elem.products} Products</p>
                      </div>
                      </div> 
          )
       })}</div>
          </div>
    </>
  );
}
