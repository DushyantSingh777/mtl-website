// Server component — composes client homepage + server-rendered blog preview
import HomePageClient from "@/components/HomePageClient";
import BlogPreview from "@/components/BlogPreview";

export default function HomePage() {
  return (
    <>
      <HomePageClient />
      <BlogPreview />
    </>
  );
}
