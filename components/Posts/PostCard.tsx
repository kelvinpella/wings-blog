import { Post } from "@/typings";
import Image from "next/image";
import Author from "./Author";

export default function PostCard({ post }: { post: Post }) {
  const {
    coverImage: { url, alt },
    title,
    author: { name, profileImage },
    _createdAt,
  } = post;
  return (
    <div className="card md:p-4">
      <div className="relative w-full rounded-md h-52 overflow-hidden mb-2 md:mb-4">
        <Image src={url} alt={alt} fill />
      </div>
      <h1 className="md:my-4">{title}</h1>
      <Author src={profileImage} name={name} date={_createdAt} />
    </div>
  );
}
