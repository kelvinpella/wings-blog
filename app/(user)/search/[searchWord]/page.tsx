"use client";
import { blogContext } from "@/common/context";
import LatestPosts from "@/components/Posts/LatestPosts";
import { filter } from "lodash";
import Image from "next/image";
import Link from "next/link";
import { useContext, useMemo } from "react";

export default function SearchWord({
  params: { searchWord },
}: {
  params: { searchWord: string };
}) {
  const { posts } = useContext(blogContext);
  const decodedText = decodeURIComponent(searchWord);
  const filteredPosts = useMemo(
    () =>
      filter(posts, (post) =>
        post.title.toLowerCase().includes(decodedText.toLowerCase())
      ).map(({ coverImage: { url, alt }, title, headline, slug }) => (
        <Link key={slug} href={`/post/${slug}`}>
          <div className="card grid grid-cols-resultCols grid-rows-1 gap-x-2 md:gap-x-4 my-4 hover:bg-slate-100">
            <div className="w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 relative ">
              <Image src={url} alt={alt} fill className="object-contain" />
            </div>
            <div>
              <h1 className="mt-0 mb-2 text-lg md:text-xl">{title}</h1>
              <p className="line-clamp-2">{headline}</p>
            </div>
          </div>
        </Link>
      )),
    [searchWord]
  );

  return (
    <div className="pt-24 w-full lg:max-w-screen-xl mx-auto ">
      <h1>Search Results:</h1>
      <div className="mb-20">
        {filteredPosts.length ? (
          filteredPosts
        ) : (
          <h1 className="text-center text-lg md:text-xl my-14 text-slate-500">
            No results found!
          </h1>
        )}
      </div>
      <LatestPosts pageCalling="all-post" />
    </div>
  );
}
