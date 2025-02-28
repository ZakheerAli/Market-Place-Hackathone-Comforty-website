import { client } from "@/sanity/lib/client";
import ProductCard from "./productCard";
import { Product } from "../types/product"; // Ensure correct import

export default async function Features() {
  const res: Product[] = await client.fetch(`*[_type=="products"][0..3]{
    _id,
    title,
    price,
    description,
    "image":image.asset->url,
    badge,
    inventory,
    _createdAt,
    tags
  }`);

  console.log("Sanity response:", res); // Debugging: Check if title exists

  return (
    <>
      <div className="w-full px-[5vw] lg:h-[600px] mt-[20px] space-y-[30px] pt-[20px]">
        <div>
          <h1 className="text-[35px] md:text-[50px] font-semibold underline decoration-[#ae4102]">
            Feature products
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-7 lg:gap-4">
          {res.map((product) => {
            // Ensure 'title' exists before passing to ProductCard
            return (
              <ProductCard
                key={product._id}
                product={{ title: product.title || "No Title", ...product }}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}


// import { client } from "@/sanity/lib/client";
// import ProductCard from "./productCard";
// import { product } from "../types/product";
// export default async function Features() {
//   const res:product[]= await client.fetch(`*[_type=="products"][0..3]{
//   _id,
//     title,
//     price,
//     description,
//     "image":image.asset->url,
//     badge,
//     inventory,
//     _createdAt,
//     tags
    
// }`)
// console.log(res)
//   return (
//     <>
//       <div className="w-full px-[5vw] lg:h-[600px] mt-[20px] space-y-[30px] pt-[20px]">
//         <div>
//           <h1 className="text-[35px] md:text-[50px] font-semibold underline decoration-[#ae4102]">
//             Feature products
//           </h1>
//         </div>
//         <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-7 lg:gap-4   ">{res.map((product)=>{
//           return(
//             <ProductCard key={product._id} product={product}/>
//           )
//         })}</div>
       
//       </div>
//     </>
//   );
// }
