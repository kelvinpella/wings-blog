"use client";
import { getPosts } from "@/sanity/sanity-utils";
import { BlogContextType } from "@/typings";
import { blogContext } from "../../common/context";

export default async function MainContent({
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
    <blogContext.Provider value={contextData}>
      <main className="w-full lg:max-w-screen-xl lg:mx-auto px-2 py-2 md:px-4">
        {children}
      </main>
    </blogContext.Provider>
  );
}
