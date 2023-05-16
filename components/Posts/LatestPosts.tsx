"use client";
import { useMemo } from "react";
import { usePathname } from "next/navigation";
import { Post } from "@/typings";
import PostCard from "./PostCard";
export default function LatestPosts({ posts }: { posts: Post[] }) {
  // renders all posts in /posts
  // renders only 9 posts in home route
  const pathname = usePathname();
  const isHomeRoute = pathname === "/";
  const latestPosts = isHomeRoute ? posts.slice(0, 10) : posts;
  const renderedPosts = useMemo(() => {
    return latestPosts.map((post) => <PostCard key={post._id} post={post} />);
  }, [isHomeRoute, posts]);
  return (
    <div>
      <h1>{isHomeRoute ? "Latest Posts" : "All Posts"}</h1>
      <div className="w-full grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3 md:gap-5">
        {renderedPosts}
      </div>
    </div>
  );
}
