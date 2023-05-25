"use client";
import CustomButton from "../Buttons/CustomButton";
import Author from "../Author/Author";
import Link from "next/link";
import { blogContext } from "@/common/context";
import { useContext } from "react";

export default function FeaturedPost() {
  const { posts } = useContext(blogContext);
  const featured = posts[0];
  const {
    title,
    headline,
    author: { name, profileImage },
    _createdAt,
    slug,
    coverImage: { url: bgImage },
  } = featured;
  return (
    <div
      className="w-full h-featuredHeight relative mb-32 md:mb-36 rounded-md bg-cover bg-no-repeat bg-center "
      style={{
        backgroundImage: `linear-gradient(0deg, rgba(20, 22, 36, 0.4), rgba(20, 22, 36, 0.4)), url(${bgImage})`,
      }}
    >
      <div className="card w-11/12 mx-auto absolute inset-x-0 -bottom-24  py-6 md:px-6 lg:px-8 md:py-7">
        <CustomButton name="featured" type="button" />
        <h1>{title}</h1>
        <Author name={name} src={profileImage} date={_createdAt} />
        <p className="my-2 line-clamp-3">{headline}</p>
        <Link
          href={`/post/${slug}`}
          className="my-4 font-semibold text-royal-blue md:my-0 hover:text-cyan-500"
        >
          Read More
        </Link>
      </div>
    </div>
  );
}
