import Posts from "@/components/Posts/Posts";
export const revalidate = 60; // revalidate this page every 60 seconds
export default function Home() {
  return (
    <div>
      <Posts />
    </div>
  );
}
