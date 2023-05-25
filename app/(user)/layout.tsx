"use client";
import NavBar from "@/components/NavBar/NavBar";
import "@/public/globals.css";
import Footer from "@/components/Footer/Footer";
import { getPosts } from "@/sanity/sanity-utils";
import { blogContext } from "../../common/context";
import { BlogContextType } from "@/typings";
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // get all posts and store them in context
  const posts = await getPosts();
  // create contextData object
  const contextData: BlogContextType = {
    posts,
  };
  return (
    <html lang="en">
      <head>
        <title>Wings - Your Aviation Blog</title>
      </head>
      <body className="text-sm md:text-base lg:text-lg bg-ghost-white font-work-sans min-h-screen flex flex-col justify-between">
        <blogContext.Provider value={contextData}>
          <NavBar />
          <main className="w-full lg:max-w-screen-xl lg:mx-auto px-2 py-2 md:px-4">
            {children}
          </main>
          <Footer />
        </blogContext.Provider>
      </body>
    </html>
  );
}
