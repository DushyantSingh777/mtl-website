// /main — splash-free entry point for SEO/GEO crawlers and direct deep links.
// ClientLayout skips the splash screen for this route (same as /portal).
import HomePageClient from "@/components/HomePageClient";
import BlogPreview from "@/components/BlogPreview";

export default function MainPage() {
  return (
    <>
      <HomePageClient />
      <BlogPreview />
    </>
  );
}
