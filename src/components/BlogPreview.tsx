import Link from "next/link";
import { getAllNotionPosts } from "@/lib/notion";

export const revalidate = 60;

export default async function BlogPreview() {
  let posts: Awaited<ReturnType<typeof getAllNotionPosts>> = [];
  try {
    posts = (await getAllNotionPosts()).slice(0, 3);
  } catch {
    return null;
  }

  if (posts.length === 0) return null;

  return (
    <section className="bg-black py-10 md:py-28 px-4 sm:px-6 border-t border-[#40424D]">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-8 md:mb-12">
          <div>
            <p className="eyebrow mb-3">From the Blog</p>
            <h2 className="text-display text-3xl md:text-4xl">Latest <span className="text-display-secondary">insights.</span></h2>
          </div>
          <Link href="/blog" className="hidden md:flex items-center gap-2 text-sm font-medium text-[#9DA2B3] hover:text-[#EDEFF7] transition-colors">
            All posts
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px rounded-xl overflow-hidden">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group block bg-[#1E1E24] hover:bg-[#252530] transition-colors duration-200 p-6 md:p-8 border border-[#40424D]/30">
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.slice(0, 2).map((tag) => (
                  <span key={tag} className="text-xs font-medium text-[#6E7180] bg-black/40 px-2.5 py-1 rounded">{tag}</span>
                ))}
              </div>
              <h3 className="text-base font-bold text-[#EDEFF7] mb-3 leading-snug group-hover:text-white transition-colors">{post.title}</h3>
              <p className="text-sm text-[#9DA2B3] leading-relaxed line-clamp-2 mb-5">{post.excerpt}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-[#6E7180]">
                  {post.date ? new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }) : ""}
                </span>
                <span className="text-xs font-medium text-[#9DA2B3] group-hover:text-[#EDEFF7] transition-colors flex items-center gap-1">
                  Read
                  <svg className="w-3 h-3 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
