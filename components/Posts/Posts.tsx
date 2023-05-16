import LatestPosts from "./LatestPosts";
import FeaturedPost from "./FeaturedPost";
import { getPosts } from "@/sanity/sanity-utils";
import { random } from "lodash";

export default async function Posts() {
  const posts = await getPosts();
  // random post as fearured
  const randomPostIndex = random(posts.length - 1);
  const featuredPost = posts[randomPostIndex];

  return (
    <div className="w-full pt-24">
      <FeaturedPost featured={featuredPost} />
      <LatestPosts posts={posts} />
    </div>
  );
}
