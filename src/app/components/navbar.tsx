"use client";
import "remixicon/fonts/remixicon.css";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { useAuth } from "@clerk/nextjs";
import { UserButton } from "@clerk/nextjs";

function Navbar() {
  const { isSignedIn } = useAuth();
  const shortNav = useRef<HTMLDivElement>(null);

  function handleMenuButton() {
    console.log("clicked");
    if (shortNav.current) {
      shortNav.current.style.display = "flex";
    }
    document.body.addEventListener("click", () => {
      if (shortNav.current) {
        shortNav.current.style.display = "none";
      }
    });
  }

  return (
    <div className="font-inter">
      <div
        id="top-nav"
        className="px-[5vw] lg:px-[10vw] w-full h-[45px] bg-[#272343] text-white flex items-center justify-between"
      >
        <h1 className="hidden lg:block">
          <i className="ri-check-fill"></i>
          Free shipping on all orders over $50
        </h1>
        <div className="flex gap-[3vw] md:gap-[5vw]">
          <select className="bg-[#272343] text-white border-none">
            <option>English</option>
            <option>Urdu</option>
            <option>Arabic</option>
          </select>
          <Link href="/faqs">
            <h3>Faqs</h3>
          </Link>
          <h3>
            <i className="ri-question-line"></i> Need Help
          </h3>
        </div>
      </div>

      <div
        id="middle-nav"
        className="px-[3vw] md:px-[5vw] lg:px-[7vw] h-[88px] bg-[#F0F2F3] flex items-center justify-between"
      >
        <div className="flex items-center gap-[1vw]">
          <Image
            src="/Logo Icon.png"
            alt="Logo"
            width={50}
            height={20}
            className="h-[40px] md:h-[50px] lg:h-[50px] object-cover object-center"
          />
          <h1 className="text-[18px] md:text-[4vw] lg:text-[2vw] font-medium">
            Comforty
          </h1>
        </div>

        <div className="items-center gap-4 hidden sm:flex">
          <Link
            href="/wishlist"
            className="flex items-center bg-gradient-to-r from-red-500 to-red-700 text-white px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 gap-2 sm:gap-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            <i className="ri-heart-3-fill text-xl sm:text-2xl md:text-3xl"></i>
            <h3 className="text-sm sm:text-base md:text-lg font-medium sm:font-semibold">
              Wishlist
            </h3>
          </Link>

          <Link
            href="/cart"
            className="flex items-center bg-gradient-to-r from-[#029FAE] to-[#026F80] text-white px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 gap-2 sm:gap-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            <i className="ri-shopping-cart-2-line text-xl sm:text-2xl md:text-3xl"></i>
            <h3 className="text-sm sm:text-base md:text-lg font-medium sm:font-semibold">
              Cart
            </h3>
          </Link>

          <div>
            {isSignedIn ? (
              <UserButton afterSignOutUrl="/" />
            ) : (
              <Link
                href="/sign-in"
                className="bg-zinc-950 text-white px-6 py-4 font-bold text-lg rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300"
              >
                Sign In
              </Link>
            )}
          </div>
        </div>

        <div className="flex sm:hidden items-center gap-4">
          <Link href={"/wishlist"}>
            <i className="ri-heart-3-fill text-3xl cursor-pointer text-red-600 transition-all duration-300 hover:bg-red-600 hover:text-white hover:scale-110"></i>
          </Link>
          <Link href={"/cart"}>
            <i className="ri-shopping-cart-2-line text-3xl cursor-pointer text-[#029FAE] transition-all duration-300 hover:bg-[#029FAE] hover:text-white hover:scale-110"></i>
          </Link>
          {/* <div>
            {isSignedIn ? (
              <UserButton afterSignOutUrl="/" />
            ) : (
              <Link
                href="/sign-in"
                className="bg-zinc-800 text-white px-3 py-2 font-medium text-[5vw] rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300"
              >
                Sign In
              </Link>
            )}
          </div> */}
        </div>
      </div>

      <nav className="flex justify-between text-black px-[5vw] h-[70px] items-center font-medium">
        <button className="md:hidden" onClick={handleMenuButton}>
          <i className="ri-menu-line text-[26px]"></i>
        </button>
        <div id="nav-list" className="hidden md:flex gap-[4vw]">
          <Link href="/" className="hover:text-gray-600">
            Home
          </Link>
          <Link href="/shop" className="hover:text-gray-600">
            Shop
          </Link>
          <Link href="/product" className="hover:text-gray-600">
            Product
          </Link>
          <Link href="/about" className="hover:text-gray-600">
            About
          </Link>
        </div>
        <Link href="/contact">
          <h3 className="hover:text-gray-600">Contact: (808-555-011)</h3>
        </Link>
      </nav>

      <div
        ref={shortNav}
        className="fixed  md:hidden h-[350px] w-[50%] rounded-lg  left-0 flex flex-col py-[20px] justify-between px-[5vw] text-black font-semibold text-xl bg-[#89adbe]"
      >
        <div className="flex flex-col gap-[4vw]">
          <Link href="/">Home</Link>
          <Link href="/shop">Shop</Link>
          <Link href="/product">Product</Link>
          <Link href="/about">About</Link>
          <div className="mt-7">
            {isSignedIn ? (
              <UserButton afterSignOutUrl="/" />
            ) : (
              <Link
                href="/sign-in"
                className="bg-zinc-800 text-white px-5 py-4 font-medium text-[5vw] rounded-md shadow-md hover:bg-blue-700 transition-all duration-300"
              >
                Sign In
              </Link>
            )}
          </div>
        </div>

        <button
          onClick={() => {
            if (shortNav.current) {
              shortNav.current.style.display = "none";
            }
          }}
          className="flex justify-center items-center"
        >
          <i className="ri-close-large-line text-2xl"></i>
        </button>
      </div>
    </div>
  );
}

export default Navbar;


