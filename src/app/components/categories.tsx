import Image from "next/image";
import { client } from "@/sanity/lib/client"; // Ensure this path is correct

// Define the Category type
type Category = {
  _id: string;
  image: string;
  title: string;
  products: number;
};

export default async function Categories() {
  try {
    // Fetch categories from Sanity
    const res: Category[] = await client.fetch(`*[_type=="categories"]{
      _id,
      "image": image.asset->url,
      title,
      products
    }`);

    // Check if data is available
    if (!res || res.length === 0) {
      return (
        <div className="text-center text-gray-500 py-10">
          No categories found.
        </div>
      );
    }

    return (
      <div className="px-[3vw] space-y-5">
        <div className="w-full h-[58px] flex items-center justify-between xs:gap-6 xs:px-6 xs:mt-9">
          <p className="text-[35px] md:text-[50px] font-semibold underline decoration-[#ae4102]">
            Top Categories
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {res.map((elem: Category) => (
            <div
              key={elem._id}
              className="w-full xs:h-[300px] xs:w-[300px] md:h-[424px] flex flex-col gap-3 xs:px-10 md:px-2 relative"
            >
              <Image
                className="hover:scale-105 duration-150 cursor-pointer"
                src={elem.image}
                alt={elem.title}
                width={400}
                height={400}
                priority
              />
              <div className="bg-black text-white w-[90%] xs:h-[70px] md:h-[85px] opacity-70 absolute xs:top-[50%] md:top-[70%] px-4 py-3">
                <h1 className="text-[20px]">{elem.title}</h1>
                <p className="text-[16px]">{elem.products} Products</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error fetching categories:", error);
    return (
      <div className="text-center text-red-500 py-10">
        Error loading categories. Please try again later.
      </div>
    );
  }
}


