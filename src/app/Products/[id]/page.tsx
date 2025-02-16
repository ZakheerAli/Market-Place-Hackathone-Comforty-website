// Enable client-side rendering
"use client";

// Import the Sanity client for fetching data
import { client } from "@/sanity/lib/client";

// Import the Next.js Image component for optimized image rendering
import Image from "next/image";

// Utility function from Sanity to generate image URLs
import { urlFor } from "@/sanity/lib/image";

// Import custom hooks for accessing cart and wishlist functionality
import { useCart } from "@/app/context/cartcontext";
import { useEffect, useState } from "react";
import { useWishlist } from "@/app/context/wishlistcontext";

// Define the ProductDetail component that accepts 'params' as a prop
export default function ProductDetail({ params }: { params: Promise<{ id: string }> }) {
  // Destructure the 'addToCart' function from the cart context
  const { addToCart } = useCart();

  // Destructure the 'addToWishlist' function from the wishlist context
  const { addToWishlist } = useWishlist();

  // State to hold the product data fetched from the database
  const [product, setProduct] = useState<any>(null);

  // State to handle the loading state while fetching data
  const [loading, setLoading] = useState(true);

  // UseEffect hook to fetch product data when the component mounts
  useEffect(() => {
    // Define an async function to fetch product details
    async function fetchProduct() {
      // Resolve the 'params' promise to get the product ID
      const unwrappedParams = await params;

      // Fetch the product data using the Sanity client and the resolved ID
      const data = await client.fetch(
        `*[_type == "products" && _id == $id][0]`, // Sanity query to fetch product by ID
        {
          id: unwrappedParams.id, // Pass the product ID as a parameter to the query
        }
      );

      // Update the 'product' state with the fetched data
      setProduct(data);

      // Set the loading state to false once data is fetched
      setLoading(false);
    }

    // Call the fetchProduct function
    fetchProduct();
  }, [params]); // Dependency array ensures the effect runs when 'params' changes

  // If the data is still loading, show a loading message
  if (loading) {
    return <div className="text-center text-lg font-semibold">Loading...</div>;
  }

  // If the product data is not found, show an error message
  if (!product) {
    return <div className="text-center text-red-500 text-xl">PRODUCT NOT FOUND</div>;
  }

  // Render the product details
  return (
    <div className="w-full px-6 md:px-[5vw] py-16 space-y-16">
      {/* Container for product details */}
      <div className="w-full flex flex-col md:flex-row gap-10">
        {/* Left side: Product image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200 p-4">
            <Image
              src={urlFor(product.image).url()} // Generate the image URL using Sanity
              alt={product.title} // Alternative text for the image
              width={500} // Image width
              height={500} // Image height
              className="object-cover object-center rounded-lg" // Styling for the image
            />
          </div>
        </div>

        {/* Right side: Product details */}
        <div className="w-full md:w-1/2 flex flex-col justify-center space-y-6">
          {/* Product title */}
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">{product.title}</h1>

          {/* Product price */}
          <p className="text-2xl font-semibold text-gray-800">${product.price}.00 USD</p>

          {/* Product description */}
          <p className="text-lg text-gray-600">{product.description}</p>

          {/* Buttons container */}
          <div className="flex gap-4 mt-4">
            {/* Add to Cart Button */}
            <button
              onClick={() =>
                addToCart({
                  title:product.title,
                  _id: product._id, // Product ID
                  name: product.title, // Product name
                  price: product.price, // Product price
                  image: urlFor(product.image).url(), // Product image URL
                  description: product.description || "No description available", // Product description
                  quantity: 1, // Default quantity
                })
              }
              className="px-6 py-3 bg-[#029FAE] text-white text-lg font-semibold rounded-lg shadow-md hover:bg-black hover:text-[#029FAE] transition-all"
            >
              <i className="ri-shopping-cart-2-line text-lg"></i> Add To Cart
            </button>

            {/* Add to Wishlist Button */}
            <button
              onClick={() =>
                addToWishlist({
                  id: product._id, // Product ID
                  name: product.title, // Product name
                  price: product.price, // Product price
                  image: urlFor(product.image).url(), // Product image URL
                  description: product.description || "No description available", // Product description
                })
              }
              className="px-6 py-3 bg-red-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-black hover:text-red-600 transition-all"
            >
              <i className="ri-heart-3-fill text-2xl"></i> Add to Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}











