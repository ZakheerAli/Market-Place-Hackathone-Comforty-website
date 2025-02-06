import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";

export async function middleware(req: NextRequest) {
  const authData = await auth(); // auth() ko await karein
  const userId = authData?.userId; // userId extract karein

  // Agar user logged in nahi hai aur checkout page visit kar raha hai to redirect karein
  if (!userId && req.nextUrl.pathname.startsWith("/checkout")) {
    return NextResponse.redirect(new URL("/sign-in", req.url));
  }

  return NextResponse.next();
}

// Matcher to apply middleware only on pages
export const config = {
  matcher: "/((?!_next|.*\\..*).*)",
};


// import { NextRequest, NextResponse } from "next/server";
// // import { auth } from "@clerk/nextjs";
// import { auth } from "@clerk/nextjs/server";

// export function middleware(req: NextRequest) {
//   const { userId } = auth();
  
//   // Agar user logged in nahi hai aur checkout page visit kar raha hai to redirect karein
//   if (!userId && req.nextUrl.pathname.startsWith("/checkout")) {
//     return NextResponse.redirect(new URL("/sign-in", req.url));
//   }

//   return NextResponse.next();
// }

// // Ye ensure karega ke middleware sirf pages ke liye apply ho
// export const config = {
//   matcher: "/((?!_next|.*\\..*).*)",
// };



// import { createMiddleware } from "@clerk/nextjs/server";

// export default createMiddleware({
//   publicRoutes: ["/", "/products", "/about", "/contact","/about","/wishlist","/cart","/faqs","product","/shop"], // Yahan public pages ka path add karein
//   ignoredRoutes: ["/checkout"], // Agar koi route ignore karna chahein
// });

// export const config = {
//   matcher: "/((?!_next|.*\\..*).*)",
// };


// import { authMiddleware } from "@clerk/nextjs";


// // Middleware setup
// export default authMiddleware({
//   // ✅ Public routes (Authentication required only for checkout)
//   publicRoutes: ["/"],

//   // ✅ Checkout route ko protected banayein
//   ignoredRoutes: ["/checkout"],
// });

// // ✅ Next.js ke internal files aur static assets ignore karne ke liye matcher
// export const config = {
//   matcher: [
//     "/((?!_next|[^?]*\\.(?:html?|css|js|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
//   ],
// };


// import { clerkMiddleware, getAuth } from "@clerk/nextjs/server";

// // Define routes that require authentication
// export default clerkMiddleware(async (auth, request) => {
//   console.log("Middleware triggered for:", request.nextUrl.pathname);

//   // Check if user is authenticated (use await to resolve the auth promise)
//   const { userId } = await getAuth(request);

//   if (!userId) {
//     console.log("User not authenticated. Redirecting to sign-in...");

//     // Redirect unauthenticated user to sign-in page
//     return new Response(null, {
//       status: 302,
//       headers: {
//         Location: `/sign-in?returnBackUrl=${encodeURIComponent(request.url)}`,
//       },
//     });
//   }
// });

// // Next.js ke internals aur static files ko ignore karne ke liye matcher
// export const config = {
//   matcher: [
//     "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
//     "/(api|trpc)(.*)",
//   ],
// };



