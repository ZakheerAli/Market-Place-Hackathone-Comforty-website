"use client"; 
import Image from "next/image"; 
import { useCart } from "../context/cartcontext"; 
import { urlFor } from "@/sanity/lib/image"; 
import { useWishlist } from "../context/wishlistcontext"; 
import { useRouter } from "next/navigation"; 


export default function Cart() {
  const { cart, updateQuantity, removeFromCart } = useCart(); 
  const { addToWishlist } = useWishlist(); 
  const router = useRouter(); 

  const calculateTotal = () => cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const calculateTotalQuantity = () => cart.reduce((total, item) => total + item.quantity, 0);

  const handleCheckout = () => {
    router.push("/checkout");
  };

  return (
    <div className="px-6 md:px-16 py-10 md:py-20 bg-gray-50 min-h-screen">

      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-2/3">
          <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">Your Cart</h1>
          {cart.length === 0 ? (
            <p className="text-xl font-medium text-center text-gray-500">Your cart is empty</p>
          ) : (
            cart.map((item,index) => (
              <div
                key={item._id || index}
                className="bg-white shadow-md rounded-lg p-4 md:flex items-center gap-6 mb-6"
              >
                <div className="flex justify-center items-center">
                  <Image
                    src={urlFor(item.image).url()}
                    alt={item.name}
                    width={150}
                    height={150}
                    className="rounded-lg"
                  />
                </div>

                <div className="flex-1">
                  <h2 className="text-lg font-semibold text-gray-700">{item.name}</h2>
                  <p className="text-sm text-gray-500 mt-1">{item.description || "No description available"}</p>

                  <div className="mt-4 flex justify-between items-center">
                    <p className="text-gray-600">Price: <span className="font-semibold text-gray-800">${item.price}</span></p>
                    <p className="text-gray-600">Quantity: <span className="font-semibold text-gray-800">{item.quantity}</span></p>
                  </div>

                  <div className="flex items-center mt-4 gap-3">
                    <button
                      onClick={() => updateQuantity(item._id, item.quantity - 1)}
                      className="px-3 py-1 text-sm font-medium bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200"
                    >
                      -
                    </button>
                    <span className="font-medium">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item._id, item.quantity + 1)}
                      className="px-3 py-1 text-sm font-medium bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200"
                    >
                      +
                    </button>
                  </div>

                  <div className="flex justify-between items-center mt-6">
                    <div className="flex gap-4 text-lg text-gray-900">
                      <button
                        onClick={() => addToWishlist({
                          id: item._id,
                          name: item.name,
                          price: item.price,
                          image: urlFor(item.image).url(),
                          description: item.description || "No description available"
                        })}
                        className="text-gray-500 hover:text-red-500"
                      >
                        <i className="ri-heart-3-line"></i> Wishlist
                      </button>
                      <button
                        onClick={() => removeFromCart(item._id)}
                        className="text-gray-500 hover:text-red-500"
                      >
                        <i className="ri-delete-bin-line"></i> Remove
                      </button>
                    </div>
                    <p className="text-gray-600 font-medium">
                      Total: <span className="font-semibold text-gray-800">${item.quantity * item.price}</span>
                    </p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="w-full md:w-1/3 bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Order Summary</h2>
            <div className="flex justify-between text-lg text-gray-600 mb-4">
              <p>Subtotal:</p>
              <p>${calculateTotal()}</p>
            </div>
            <div className="flex justify-between text-lg text-gray-600 mb-4">
              <p>Total Quantity:</p>
              <p>{calculateTotalQuantity()}</p>
            </div>
            <div className="flex justify-between text-lg text-gray-600 mb-4">
              <p>Delivery:</p>
              <p>Free</p>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between text-xl font-semibold text-gray-800 mb-6">
              <p>Total:</p>
              <p>${calculateTotal()}</p>
            </div>
            <button
              onClick={handleCheckout}
              className="w-full py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
            >
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}






   
