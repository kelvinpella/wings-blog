import { PortableTextBlock } from "sanity";

export type Post = {
  _id: string;
  _createdAt: Date;
  title: string;
  headline: string;
  content: PortableTextBlock;
  slug: string;
  coverImage: { alt: string; url: string };
  author: { name: string; profileImage: string };
};

export type BlogContextType = {
  posts: Post[];
};
