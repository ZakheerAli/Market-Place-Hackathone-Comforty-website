"use client"; // Next.js ke liye, taake yeh client-side component bane

import { createContext, useContext, useState, useEffect } from "react";

// Cart ka ek item ka structure define kar rahe hain (TypeScript interface)
interface cartItem {
  name: string;
  _id: string;
  price: number;
  image: string;
  title: string;
  quantity: number;
  description: string;
  selectedColor?: string; // Optional property for color selection
  selectedSize?: string;  // Optional property for size selection
}

// Cart context ka type define kar rahe hain jo functions aur state ko hold karega
interface cartContextType {
  cart: cartItem[]; // Cart ke items ka array
  addToCart: (item: cartItem) => void; // Function to add an item
  updateQuantity: (id: string, quantity: number) => void; // Function to update quantity
  removeFromCart: (id: string) => void; // Function to remove an item
}

// Cart context create kar rahe hain (initially undefined rakha hai)
const cartContext = createContext<cartContextType | undefined>(undefined);

// CartProvider component jo children ko cart ka data provide karega
export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<cartItem[]>([]); // Cart ki state maintain karne ke liye useState

  // 🟢 LocalStorage se cart load karein jab component mount ho
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart)); // JSON string ko object me convert karke state update karein
    }
  }, []); // Empty dependency array means yeh sirf ek baar run hoga

  // 🔵 Jab bhi cart state update ho, tab usko localStorage me save karein
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart)); // LocalStorage me cart save karein
  }, [cart]); // Jab bhi cart change ho, yeh effect run hoga

  // ✅ Item cart me add karne ka function
  const addToCart = (item: cartItem) => {
    // Agar koi bhi important property missing ho, alert show karein
    if (!item.name || !item.price || !item.image || !item.description) {
      alert("Failed to add item to cart. Please check the product details.");
      return;
    }

    setCart((prevCart) => {
      // Pehle check karein ke yeh item cart me pehle se hai ya nahi
      const existingItemIndex = prevCart.findIndex((cartItem) => cartItem._id === item._id);

      if (existingItemIndex !== -1) {
        // Agar item pehle se cart me hai, to sirf uski quantity increase karein
        const updatedCart = [...prevCart];
        updatedCart[existingItemIndex].quantity += 1;
        return updatedCart;
      } else {
        // Agar item pehle nahi hai, to ek naya item add karein
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });

    alert("Added to cart successfully!"); // Success message show karein
  };

  // ✅ Cart me kisi item ki quantity update karne ka function
  const updateQuantity = (id: string, quantity: number) => {
    if (quantity < 1) {
      removeFromCart(id); // Agar quantity 1 se kam ho jaye to item remove kar dein
      return;
    }

    setCart((prevCart) =>
      prevCart.map((cartItem) =>
        cartItem._id === id ? { ...cartItem, quantity } : cartItem // Sirf us item ki quantity update karein jiska ID match kare
      )
    );
  };

  // ✅ Cart se kisi item ko remove karne ka function
  const removeFromCart = (id: string) => {
    setCart((prevCart) => prevCart.filter((cartItem) => cartItem._id !== id)); // Sirf woh items rakhein jo remove nahi ho rahe
    alert("Removed from cart successfully!"); // Success message show karein
  };

  return (
    <cartContext.Provider value={{ cart, addToCart, updateQuantity, removeFromCart }}>
      {children} {/* Yeh provider cart ke data ko children components tak pohcha raha hai */}
    </cartContext.Provider>
  );
};

// ✅ Custom hook jo context ko easily access karne ke liye use hota hai
export const useCart = () => {
  const context = useContext(cartContext);

  if (!context) {
    throw new Error("useCart must be used within a CartProvider"); // Agar provider nahi mila to error throw karein
  }

  return context; // Cart context return karein
};


