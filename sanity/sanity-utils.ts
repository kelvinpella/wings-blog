import { groq } from "next-sanity";
import { client } from "./lib/client";
import { Post } from "@/typings";

/**
 * Get blog posts from sanity.io
 * @returns Promise<array>
 */
export async function getPosts(): Promise<Post[]> {
  return client.fetch(
    groq`*[_type=='post']{
        _id,
        _createdAt, 
        title,
        headline,
        "content":body,
        "slug":slug.current,
        "coverImage":{"alt":mainImage.alt,"url":mainImage.asset->url},
         "author":author->{name,"profileImage":image.asset->url}
          }`
  );
}

export async function getPost(slug: string): Promise<Post> {
  return client.fetch(
    groq`*[_type=='post' && slug.current == $slug][0]{
       _id,
        _createdAt, 
        title,
        headline,
        "content":body,
        "slug":slug.current,
        "coverImage":{"alt":mainImage.alt,"url":mainImage.asset->url},
         "author":author->{name,"profileImage":image.asset->url}
    }`,
    { slug }
  );
}

export async function getAllSlugs(): Promise<{ slug: string }[]> {
  return client.fetch(groq`
*[_type=='post']{"slug":slug.current}`);
}
