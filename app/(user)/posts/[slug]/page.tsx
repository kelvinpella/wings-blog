'use client'
import Author from "@/components/Author/Author";
import { FormattedPost } from "@/components/Posts/FormattedPost";
import LatestPosts from "@/components/Posts/LatestPosts";
import { getPost } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import { useMemo } from "react";

export default async function Post({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const renderedContent = useMemo(async () => {
    if (slug === "all-posts") {
      // renders all posts
      return <div className="lg:max-w-screen-xl mx-auto"> <LatestPosts /></div>;
    } else {
      // renders post based on it's slug
      const post = await getPost(slug);
      const {
        content,
        title,
        author: { name, profileImage },
        _createdAt,
      } = post;
      return (
        <div className="lg:max-w-4xl mx-auto">
          <h1>{title}</h1>
          <Author name={name} src={profileImage} date={_createdAt} />
          <PortableText value={content} components={FormattedPost} />
        </div>
      );
    }
  }, [slug]);
  return (
    <div className="pt-24 w-full ">{renderedContent}</div>
  );
}
