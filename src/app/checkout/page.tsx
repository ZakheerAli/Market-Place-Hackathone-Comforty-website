"use client";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { product } from "../types/product";
import { useCart } from "../context/cartcontext";
import Link from "next/link";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { useAuth, RedirectToSignIn, useClerk } from "@clerk/nextjs"; // ✅ Clerk authentication import
import { useRouter } from "next/navigation"; // For redirection

export default function Checkout() {
  const { isSignedIn } = useAuth(); // ✅ Always call hooks at top-level
  const { cart } = useCart();
  const [cartItem, setCartItem] = useState<product[]>([]);
  const router = useRouter();

  // State for form inputs
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zipCode: "",
  });

  // State for form validation errors
  const [formError, setFormError] = useState({
    firstName: false,
    lastName: false,
    email: false,
    phone: false,
    address: false,
    city: false,
    zipCode: false,
  });

  // Redirect to sign-in if not signed in
  useEffect(() => {
    if (!isSignedIn) {
      router.push("/sign-in");
    }
  }, [isSignedIn, router]);

  // Set cart items from context when cart changes
  useEffect(() => {
    setCartItem(cart);
  }, [cart]);

  // Calculate subtotal price
  const subTotal = cartItem.reduce(
    (total, item) => total + item.price * (item.quantity ?? 1),
    0
  );

  // Handle input change for form fields
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [e.target.id]: e.target.value,
    });
  };

  // Validate form fields
  const validateForm = () => {
    const error = {
      firstName: !formValues.firstName,
      lastName: !formValues.lastName,
      email: !formValues.email,
      phone: !formValues.phone,
      address: !formValues.address,
      city: !formValues.city,
      zipCode: !formValues.zipCode,
    };
    setFormError(error);
    return !Object.values(error).includes(true);
  };

  // Handle order submission
  const handlePlaceOrder = async () => {
    if (!validateForm()) {
      Swal.fire({
        title: "Error!",
        text: "Please fill in all the fields.",
        icon: "error",
        confirmButtonText: "OK",
      });
      return;
    }

    // Prepare order data
    const orderData = {
      _type: "order",
      firstName: formValues.firstName,
      lastName: formValues.lastName,
      address: formValues.address,
      city: formValues.city,
      zipCode: formValues.zipCode,
      phone: formValues.phone,
      email: formValues.email,
      cartItem: cartItem.map((item) => ({
        _type: "reference",
        _ref: item._id, // Ensure item._id is valid from Sanity
      })),
      total: subTotal,
      orderDate: new Date().toISOString(),
    };

    console.log(
      "Order Data before submission:",
      JSON.stringify(orderData, null, 2)
    );

    try {
      // Send order data to Sanity CMS
      await client.create(orderData);
      console.log("Order created successfully", orderData);

      // Clear cart and reset form fields
      setCartItem([]);
      setFormValues({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        zipCode: "",
      });

      // Show success alert
      Swal.fire({
        title: "Order Placed Successfully!",
        text: "Your order has been placed. We will contact you soon.",
        icon: "success",
        confirmButtonText: "OK",
      });
    } catch (error) {
      console.error("Error creating order:", error.message || error);
    }

    console.log("Cart Items:", cartItem);
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-8 bg-white rounded-lg shadow-lg border border-gray-200">
      {/* Breadcrumb Navigation */}
      <nav className="mb-4 text-gray-600 text-sm">
        <Link href="/cart" className="hover:underline text-blue-600">
          Cart
        </Link>
        <span className="mx-2">/</span>
        <span className="font-semibold">Checkout</span>
      </nav>

      <h1 className="text-4xl font-extrabold text-gray-800 mb-6 text-center">
        Checkout
      </h1>

      {/* Cart Items Section */}
      {cartItem.length > 0 ? (
        <div className="space-y-6">
          {cartItem.map((item, index) => (
            <div
              key={item._id || index}
              className="flex items-center justify-between bg-gray-100 p-6 rounded-lg shadow-md"
            >
              <div className="flex items-center gap-6">
                {item.image && (
                  <Image
                    src={item.image}
                    width={80}
                    height={80}
                    alt={item.name}
                    className="rounded-lg"
                  />
                )}
                <div>
                  <h3 className="font-semibold text-gray-700">{item.name}</h3>
                  <p className="text-sm text-gray-500">
                    Qty: {item.quantity ?? 1}
                  </p>
                </div>
              </div>
              <p className="font-semibold text-xl text-gray-800">
                ${(item.price * (item.quantity ?? 1)).toFixed(2)}
              </p>
              
            </div>
                
               
            
          ))}
          {/* //ORDER SUMMARY */}
            <div className="mt-8 p-6 bg-gradient-to-l from-green-50 to-blue-50 rounded-lg shadow-lg">
                  <h2 className="text-xl font-semibold mb-3 text-gray-800">Order Summary</h2>
                  <div className="flex justify-between text-sm">
                    <p className="text-gray-600">Subtotal:</p>
                    <p className="font-semibold text-gray-800">${subTotal.toFixed(2)}</p>
                  </div>
                  <div className="flex justify-between text-lg font-bold mt-2 text-gray-900">
                    <p>Total:</p>
                    <p>${subTotal.toFixed(2)}</p>
                  </div>
                </div>
                      {/* Billing Information */}
      <div className="mt-8 p-6 bg-gradient-to-l from-yellow-50 to-green-50 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Billing Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.keys(formValues).map((key) => (
            <div key={key} >
              <label className="block text-sm font-medium text-gray-700 capitalize">{key.replace(/([A-Z])/g, ' $1')}</label>
              <input
                type="text"
                id={key}
                placeholder={`Enter your ${key}`}
                value={formValues[key as keyof typeof formValues]}
                onChange={handleInputChange}
                className="mt-1 p-3 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none shadow-sm"
              />
              {formError[key as keyof typeof formError] && (
                <p className="text-red-500 text-sm mt-1">{key} is required</p>
              )}
            </div>
          ))}
        </div>
        <button
          onClick={handlePlaceOrder}
          className="mt-6 w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold py-3 rounded-lg hover:bg-gradient-to-l hover:from-indigo-500 hover:to-blue-500 transition-all shadow-xl"
        >
          Place Order
        </button>
      </div>
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-4">No items in Cart</p>
      )}
    </div>
  );
}





