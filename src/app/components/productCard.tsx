"use client";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "../context/cartcontext";
import { useWishlist } from "../context/wishlistcontext";
import { urlFor } from "@/sanity/lib/image";

export default function ProductCard({ product }: { product: any }) {
  const { addToCart } = useCart(); // Access `addToCart` function from Cart Context
  const { addToWishlist } = useWishlist(); // Access `addToWishlist` function from Wishlist Context

  // Handle Add to Cart click
  const handleAddToCart = () => {
    addToCart({
      _id: product._id, // Product ID
      name: product.title, // Product title
      price: product.price, // Product price
      image: urlFor(product.image).url(), // Image URL from Sanity
      description: product.description || "No description available", // Optional description
      quantity: 1, // Default quantity is 1
    });
  };

  return (
    <div className="border p-4 rounded-xl bg-white shadow-lg h-[430px] w-[280px] hover:shadow-2xl transition-shadow duration-300">
      {/* Navigate to product detail page on click */}
      <Link href={`/Products/${product._id}`}>
        <Image
          src={urlFor(product.image).url()} // Generate product image URL using `urlFor`
          alt={product.title || "Product Image"} // Use product title or fallback text
          width={250}
          height={250}
          className="rounded-lg hover:scale-105 cursor-pointer transition-transform duration-300"
        />
      </Link>

      <div className="mt-4 space-y-2">
        {/* Product Title */}
        <h2 className="text-lg font-semibold text-gray-800 truncate">
          {product.title || "No Title"}
        </h2>
        {/* Product Price */}
        <p className="text-lg font-bold text-green-600">
          ${product.price?.toFixed(2) || "0.00"}
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center justify-between mt-4 space-x-2">
        {/* Add to Wishlist Button */}
        <button
          onClick={() =>
            addToWishlist({
              id: product._id, // Product ID
              name: product.title, // Product title
              price: product.price, // Product price
              image: urlFor(product.image).url(), // Image URL from Sanity
              description: product.description || "No description available", // Optional description
            })
          }
          className="flex items-center justify-center w-12 h-12 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
        >
          <i className="ri-heart-3-fill text-xl"></i>
        </button>

        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart} // Call the handleAddToCart function
          className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          <i className="ri-shopping-cart-2-line text-xl"></i>
        </button>
      </div>
    </div>
  );
}






