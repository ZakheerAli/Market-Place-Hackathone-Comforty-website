import { client } from "@/sanity/lib/client";
import NewsLetter from "../components/newsletter";
import Link from "next/link";
import ProductCard from "../components/productCard";
interface productType {
  title: string;
  _id: string;
  description: string;
  image: string;
  inventory: number;
  category: string;
  price: number | string;
}
export default async function ProductPage() {
  const resp = await client.fetch(`*[_type=="products"]{
    _id,
     title, 
     price,
    description,
    "image":image.asset->url, 
    badge, 
    inventory, 
    _createdAt, 
    tags,
    "category":category._ref
  }`);
  // console.log(resp.category)
  return (
    <div className="px-7 py-10 flex flex-col gap-5">
      <span>
        <h1 className=" mb-8 text-center  text-4xl md:text-6xl font-bold underline decoration-[#ae4102]">
          OUR LATEST PRODUCTS
        </h1>
      </span>
      <div className="w-full px-[7vw] grid grid-cols-1 md:space-x-4 sm:grid-cols-2  md:grid-cols-2 lg:grid-cols-4 gap-8">
        {resp.map((product: productType) => {
          return <ProductCard key={product._id} product={product} />;
        })}
      </div>
      <NewsLetter />
    </div>
  );
}
