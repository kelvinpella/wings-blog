"use client";
import Author from "@/components/Author/Author";
import { FormattedPost } from "@/components/Posts/FormattedPost";
import { getAllSlugs, getPost } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";

export const revalidate = 60; // revalidate this page every 60 seconds

// generates our page statically instead of dynamically, every 60 seconds
export async function generateStaticParams() {
  const posts = await getAllSlugs();
  return posts.map(({ slug }) => ({
    slug,
  }));
}
export default async function Post({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const post = await getPost(slug);
  const {
    content,
    title,
    author: { name, profileImage },
    _createdAt,
  } = post;
  return (
    <div className="pt-24 w-full ">
      {" "}
      <article className="lg:max-w-4xl mx-auto">
        <h1>{title}</h1>
        <Author name={name} src={profileImage} date={_createdAt} />
        <PortableText value={content} components={FormattedPost} />
      </article>
    </div>
  );
}
