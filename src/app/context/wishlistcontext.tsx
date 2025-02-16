"use client"; // Yeh line batati hai ke yeh ek client-side component hai

import { useContext, useEffect, useState, useCallback } from "react";
import { createContext } from "react";

// Wishlist ke ek item ka structure define kar raha hai (name, image, id, price, description)
interface WishlistItem {
  name: string;
  image: string;
  id: string;
  price: number;
  description: string;
}

// Wishlist Context ka type define kar raha hai, jo wishlist, add aur remove functions ko store karega
interface WishlistContextType {
  wishlist: WishlistItem[];
  addToWishlist: (item: WishlistItem) => void;
  removeFromWishlist: (id: string) => void;
}

// Wishlist Context banaya gaya jo initially `undefined` hoga
const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

// WishlistProvider component jo children components ko wishlist ka data provide karega
export const WishlistProvider = ({ children }: { children: React.ReactNode }) => {
  // Wishlist state banai jo ek empty array se start hogi
  const [wishlist, setWishlist] = useState<WishlistItem[]>([]);

  // useEffect hook: Jab component load hota hai toh wishlist localStorage se load hoti hai
  useEffect(() => {
    try {
      const storedWishlist = localStorage.getItem("wishlist"); // localStorage se wishlist le raha hai
      if (storedWishlist) {
        setWishlist(JSON.parse(storedWishlist)); // Agar data mil gaya toh use state me set kar diya
      }
    } catch (error) {
      console.error("Failed to load wishlist from localStorage:", error);
    }
  }, []);

  // useEffect hook: Jab bhi wishlist change hoti hai, usse localStorage me save kar diya jata hai
  useEffect(() => {
    try {
      localStorage.setItem("wishlist", JSON.stringify(wishlist)); // Updated wishlist ko localStorage me save kiya
    } catch (error) {
      console.error("Failed to save wishlist to localStorage:", error);
    }
  }, [wishlist]); // Jab bhi wishlist change hogi tab yeh effect chalega

  // Wishlist me naya item add karne ka function
  const addToWishlist = useCallback(
    (item: WishlistItem) => {
      const isDuplicate = wishlist.some((wishlistItem) => wishlistItem.id === item.id); // Check kar raha hai ke item pehle se exist toh nahi karta
      
      if (isDuplicate) {
        alert("This item is already in your wishlist!"); // Agar item pehle se hai toh alert show karega
        return;
      }

      setWishlist((prevWishlist) => [...prevWishlist, item]); // Naya item wishlist me add kar raha hai
      alert("Added to wishlist successfully!"); // Success message show karega
    },
    [wishlist] // Dependency array: Jab wishlist update hogi tab yeh function bhi update hoga
  );

  // Wishlist se item remove karne ka function
  const removeFromWishlist = useCallback(
    (id: string) => {
      setWishlist((prevWishlist) =>
        prevWishlist.filter((wishlistItem) => wishlistItem.id !== id) // Wishlist me se wo item hata raha hai jiska ID match kare
      );
      alert("Removed from wishlist successfully!"); // Success message show karega
    },
    []
  );

  return (
    // Wishlist Context ka Provider, jo wishlist aur functions ko children components tak pahunchayega
    <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

// Custom hook jo Wishlist Context ko access karne ke liye use hoga
export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error("useWishlist must be used within a WishlistProvider"); // Agar context available nahi hai toh error dega
  }
  return context;
};


// "use client";

// import { useContext, useEffect, useState, useCallback } from "react";
// import { createContext } from "react";

// interface WishlistItem {
//   name: string;
//   image: string;
//   id: string;
//   price: number;
//   description: string;
// }

// interface WishlistContextType {
//   wishlist: WishlistItem[];
//   addToWishlist: (item: WishlistItem) => void;
//   removeFromWishlist: (id: string) => void;
// }

// const WishlistContext = createContext<WishlistContextType | undefined>(
//   undefined
// );

// export const WishlistProvider = ({children,}: {children: React.ReactNode;}) => {
//   const [wishlist, setWishlist] = useState<WishlistItem[]>([]);

//   // Load wishlist from localStorage on initial render
//   useEffect(() => {
//     try {
//       const storedWishlist = localStorage.getItem("wishlist");
//       if (storedWishlist) {
//         setWishlist(JSON.parse(storedWishlist));
//       }
//     } catch (error) {
//       console.error("Failed to load wishlist from localStorage:", error);
//     }
//   }, []);

//   // Save wishlist to localStorage whenever it changes
//   useEffect(() => {
//     try {
//       localStorage.setItem("wishlist", JSON.stringify(wishlist));
//     } catch (error) {
//       console.error("Failed to save wishlist to localStorage:", error);
//     }
//   }, [wishlist]);

//   // ADD TO WISHLIST FUNCTION
//   const addToWishlist = useCallback(
//     (item: WishlistItem) => {
//       const isDuplicate = wishlist.some((wishlistItem) => wishlistItem.id === item.id);

//       if (isDuplicate) {
//         alert("This item is already in your wishlist!");
//         return;
//       }

//       setWishlist((prevWishlist) => [...prevWishlist, item]);
//       alert("Added to wishlist successfully!");
//     },
//     [wishlist]
//   );

//   // REMOVE FROM WISHLIST FUNCTION
//   const removeFromWishlist = useCallback(
//     (id: string) => {
//       setWishlist((prevWishlist) =>
//         prevWishlist.filter((wishlistItem) => wishlistItem.id !== id)
//       );
//       alert("Removed from wishlist successfully!");
//     },
//     []
//   );

//   return (
//     <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist }}>
//       {children}
//     </WishlistContext.Provider>
//   );
// };

// // Custom hook to access the wishlist context
// export const useWishlist = () => {
//   const context = useContext(WishlistContext);
//   if (!context) {
//     throw new Error("useWishlist must be used within a WishlistProvider");
//   }
//   return context;
// };
