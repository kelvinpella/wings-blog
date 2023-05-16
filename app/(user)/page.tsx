import Posts from "@/components/Posts/Posts";

export default async function Home() {
  return (
    <div>
      {/* @ts-expect-error Async Server Component */}
      <Posts />
    </div>
  );
}
