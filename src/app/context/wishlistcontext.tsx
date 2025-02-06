// "use client"; // Next.js ke liye taake yeh client-side component bane

// import { createContext, useContext, useState, useEffect } from "react";

// // Wishlist ke ek item ka structure define kar rahe hain (TypeScript interface)
// interface wishlistItem {
//   _id: string;
//   name: string;
//   price: number;
//   image: string;
//   title: string;
//   description: string;
// }

// // Wishlist context ka type define kar rahe hain jo functions aur state ko hold karega
// interface wishlistContextType {
//   wishlist: wishlistItem[]; // Wishlist items ka array
//   addToWishlist: (item: wishlistItem) => void; // Function to add an item
//   removeFromWishlist: (id: string) => void; // Function to remove an item
// }

// // Wishlist context create kar rahe hain (initially undefined rakha hai)
// const wishlistContext = createContext<wishlistContextType | undefined>(undefined);

// // WishlistProvider component jo children ko wishlist ka data provide karega
// export const WishlistProvider = ({ children }: { children: React.ReactNode }) => {
//   const [wishlist, setWishlist] = useState<wishlistItem[]>([]); // Wishlist ki state maintain karne ke liye useState

//   // 🟢 LocalStorage se wishlist load karein jab component mount ho
//   useEffect(() => {
//     const storedWishlist = localStorage.getItem("wishlist");
//     if (storedWishlist) {
//       setWishlist(JSON.parse(storedWishlist)); // JSON string ko object me convert karke state update karein
//     }
//   }, []); // Empty dependency array means yeh sirf ek baar run hoga

//   // 🔵 Jab bhi wishlist state update ho, tab usko localStorage me save karein
//   useEffect(() => {
//     localStorage.setItem("wishlist", JSON.stringify(wishlist)); // LocalStorage me wishlist save karein
//   }, [wishlist]); // Jab bhi wishlist change ho, yeh effect run hoga

//   // ✅ Item wishlist me add karne ka function
//   const addToWishlist = (item: wishlistItem) => {
//     setWishlist((prevWishlist) => {
//       // Pehle check karein ke yeh item wishlist me pehle se hai ya nahi
//       const isAlreadyInWishlist = prevWishlist.some((wishlistItem) => wishlistItem._id === item._id);

//       if (isAlreadyInWishlist) {
//         alert("Item is already in the wishlist!"); // Agar item already hai, alert show karein
//         return prevWishlist; // Pehle wali wishlist return kar dein (koi change nahi hoga)
//       } else {
//         alert("Added to wishlist successfully!"); // Success message show karein
//         return [...prevWishlist, item]; // Agar item nahi hai, to usko wishlist me add karein
//       }
//     });
//   };

//   // ✅ Wishlist se kisi item ko remove karne ka function
//   const removeFromWishlist = (id: string) => {
//     setWishlist((prevWishlist) => prevWishlist.filter((wishlistItem) => wishlistItem._id !== id)); // Sirf woh items rakhein jo remove nahi ho rahe
//     alert("Removed from wishlist successfully!"); // Success message show karein
//   };

//   return (
//     <wishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist }}>
//       {children} {/* Yeh provider wishlist ka data children components tak pohcha raha hai */}
//     </wishlistContext.Provider>
//   );
// };

// // ✅ Custom hook jo context ko easily access karne ke liye use hota hai
// export const useWishlist = () => {
//   const context = useContext(wishlistContext);

//   if (!context) {
//     throw new Error("useWishlist must be used within a WishlistProvider"); // Agar provider nahi mila to error throw karein
//   }

//   return context; // Wishlist context return karein
// };



"use client";

import { useContext, useEffect, useState, useCallback } from "react";
import { createContext } from "react";

interface WishlistItem {
  name: string;
  image: string;
  id: string;
  price: number;
  description: string;
}

interface WishlistContextType {
  wishlist: WishlistItem[];
  addToWishlist: (item: WishlistItem) => void;
  removeFromWishlist: (id: string) => void;
}

const WishlistContext = createContext<WishlistContextType | undefined>(
  undefined
);

export const WishlistProvider = ({children,}: {children: React.ReactNode;}) => {
  const [wishlist, setWishlist] = useState<WishlistItem[]>([]);

  // Load wishlist from localStorage on initial render
  useEffect(() => {
    try {
      const storedWishlist = localStorage.getItem("wishlist");
      if (storedWishlist) {
        setWishlist(JSON.parse(storedWishlist));
      }
    } catch (error) {
      console.error("Failed to load wishlist from localStorage:", error);
    }
  }, []);

  // Save wishlist to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
    } catch (error) {
      console.error("Failed to save wishlist to localStorage:", error);
    }
  }, [wishlist]);

  // ADD TO WISHLIST FUNCTION
  const addToWishlist = useCallback(
    (item: WishlistItem) => {
      const isDuplicate = wishlist.some((wishlistItem) => wishlistItem.id === item.id);

      if (isDuplicate) {
        alert("This item is already in your wishlist!");
        return;
      }

      setWishlist((prevWishlist) => [...prevWishlist, item]);
      alert("Added to wishlist successfully!");
    },
    [wishlist]
  );

  // REMOVE FROM WISHLIST FUNCTION
  const removeFromWishlist = useCallback(
    (id: string) => {
      setWishlist((prevWishlist) =>
        prevWishlist.filter((wishlistItem) => wishlistItem.id !== id)
      );
      alert("Removed from wishlist successfully!");
    },
    []
  );

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

// Custom hook to access the wishlist context
export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error("useWishlist must be used within a WishlistProvider");
  }
  return context;
};
