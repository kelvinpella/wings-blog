import LatestPosts from "./LatestPosts";
import FeaturedPost from "./FeaturedPost";

export default function Posts() {
  return (
    <div className="w-full pt-24">
      <FeaturedPost />
      <LatestPosts />
    </div>
  );
}
