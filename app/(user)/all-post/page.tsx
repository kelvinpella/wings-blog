import LatestPosts from "@/components/Posts/LatestPosts";
export const revalidate = 60; // revalidate this page every 60 seconds
export default async function AllPosts() {
  return (
    <div className="pt-24 w-full lg:max-w-screen-xl mx-auto">
      <LatestPosts />
    </div>
  );
}
