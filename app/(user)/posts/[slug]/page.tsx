import Author from "@/components/Posts/Author";
import { FormattedPost } from "@/components/Posts/FormattedPost";
import { getPost } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";

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
    <div className="pt-24 w-full lg:max-w-4xl mx-auto">
      <h1>{title}</h1>
      <Author name={name} src={profileImage} date={_createdAt} />
      <PortableText value={content} components={FormattedPost} />
    </div>
  );
}
