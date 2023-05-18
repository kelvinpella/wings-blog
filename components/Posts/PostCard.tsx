import { Post } from "@/typings";
import Image from "next/image";
import Author from "../Author/Author";
import Link from "next/link";

export default function PostCard({ post }: { post: Post }) {
  const {
    coverImage: { url, alt },
    title,
    author: { name, profileImage },
    _createdAt,
    slug,
  } = post;
  return (
    <Link
      href={`/post/${slug}`}
      className="card md:p-4 cursor-pointer hover:bg-slate-100"
    >
      <div className="relative w-full rounded-md h-52 mb-2 md:mb-4">
        <Image src={url} alt={alt} fill />
      </div>
      <h1 className="md:my-4">{title}</h1>
      <Author src={profileImage} name={name} date={_createdAt} />
    </Link>
  );
}
