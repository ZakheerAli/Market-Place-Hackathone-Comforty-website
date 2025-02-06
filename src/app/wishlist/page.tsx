"use client";
import { useWishlist } from "../context/wishlistcontext";
import "remixicon/fonts/remixicon.css";
import Image from "next/image";
import { useCart } from "../context/cartcontext";
import { urlFor } from "@/sanity/lib/image";
import { useRouter } from "next/navigation";

export default function Wishlist() {
  const { wishlist, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();
  const router = useRouter();

  const maxItems = 10;
  const progress = (wishlist.length / maxItems) * 100;

  return (
    <div className="px-[3vw] py-10 bg-gradient-to-r from-gray-100 via-white to-gray-100 min-h-screen">
      <h1 className="text-center hover:scale-105 transition-transform duration-300 mb-4">
        <i className="ri-heart-3-line text-red-600 cursor-pointer text-[50px] md:text-[8vw]"></i>
      </h1>
      <h1 className="text-[32px] md:text-[4vw] text-center font-extrabold text-gray-800 tracking-wide">
        My Wishlist
      </h1>
      <div className="text-center mt-6">
        <button
          onClick={() => router.push("/product")}
          className="px-6 py-3 bg-[#029FAE] text-white font-bold rounded-md hover:bg-black hover:text-[#029FAE] transition-colors duration-300"
        >
          <i className="ri-arrow-left-line mr-2"></i>Back to Shopping
        </button>
      </div>
      <div className="mt-8 mx-auto max-w-[80%]">
        <div className="flex justify-between mb-2 text-gray-600 text-sm font-medium">
          <span>{wishlist.length} items saved</span>
          <span>{maxItems - wishlist.length} spots remaining</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
          <div
            className={`h-full ${progress === 100 ? "bg-red-600" : "bg-[#029FAE]"}`}
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        {progress === 100 && (
          <p className="text-center text-red-500 mt-2 text-sm">
            You've reached the maximum wishlist capacity!
          </p>
        )}
      </div>
      <div className="mt-10">
        {wishlist.length === 0 ? (
          <div className="text-center mt-20">
            <p className="text-[22px] md:text-[2vw] text-gray-600 font-semibold">
              Your Wishlist is Empty
            </p>
            <p className="text-[16px] text-gray-500">
              Add items to your wishlist to see them here!
            </p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {wishlist.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-gray-300 rounded-2xl shadow-md hover:shadow-2xl transition-shadow duration-300 overflow-hidden group relative"
              >
                <div className="relative w-full h-64 overflow-hidden">
                  <Image
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                    src={urlFor(item.image).url()}
                    alt={`${item.name}`}
                    width={300}
                    height={300}
                  />
                  <button
                    onClick={() => removeFromWishlist(item.id)}
                    className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md hover:bg-red-500 hover:text-white transition duration-300"
                  >
                    <i className="ri-heart-fill text-2xl text-red-600"></i>
                  </button>
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-[#029FAE] transition">
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1 mb-3 line-clamp-2">
                    {item.description}
                  </p>
                  <p className="text-lg font-bold text-gray-800">Price: ${item.price}</p>
                  <div className="flex gap-4 mt-4">
                    <button
                      onClick={() =>
                        addToCart({
                          id: item.id,
                          name: item.name,
                          price: item.price,
                          image: urlFor(item.image).url(),
                          description: item.description || "No description available",
                          quantity: 1,
                        })
                      }
                      className="flex-1 bg-[#029FAE] text-white hover:bg-black hover:text-[#029FAE] px-4 py-2 rounded-lg font-medium transition duration-300"
                    >
                      <i className="ri-shopping-cart-2-fill mr-2"></i>Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}






