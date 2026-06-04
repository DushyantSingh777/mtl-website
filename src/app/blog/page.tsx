import Link from "next/link";
import { getAllNotionPosts } from "@/lib/notion";
import type { Metadata } from "next";

export const dynamic = "force-dynamic";
export const revalidate = 60;

export const metadata: Metadata = {
  title: "Blog – MyTron Labs",
  description: "Insights on Physical AI, robotics data, and egocentric datasets from the MyTron Labs team.",
};

export default async function BlogPage() {
  const posts = await getAllNotionPosts();

  return (
    <>
      <section className="relative pt-24 md:pt-32 pb-10 md:pb-20 px-4 sm:px-6 bg-black grid-bg md:min-h-[50vh] flex items-center">
        <div className="max-w-6xl mx-auto w-full">
          <p className="eyebrow mb-4">Blog</p>
          <h1 className="text-display text-3xl sm:text-5xl md:text-6xl max-w-3xl">
            Insights on{" "}
            <span className="text-display-secondary">Physical AI.</span>
          </h1>
          <p className="text-[#9DA2B3] text-lg max-w-xl mt-6 leading-relaxed">
            Perspectives from our team on robotics data, embodied intelligence, and the infrastructure powering the next wave of AI.
          </p>
        </div>
      </section>

      <section className="bg-[#1E1E24] py-10 md:py-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {posts.length === 0 ? (
            <p className="text-[#9DA2B3]">No posts yet. Check back soon.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px rounded-xl overflow-hidden">
              {posts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="group block bg-[#1E1E24] hover:bg-[#252530] transition-colors duration-200 p-6 md:p-8 border border-[#40424D]/30">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <span key={tag} className="text-xs font-medium text-[#6E7180] bg-black/40 px-2.5 py-1 rounded">{tag}</span>
                    ))}
                  </div>
                  <h2 className="text-lg font-bold text-[#EDEFF7] mb-3 leading-snug group-hover:text-white transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-sm text-[#9DA2B3] leading-relaxed mb-6 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-xs text-[#6E7180]">
                      {post.date ? new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }) : ""}
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
          )}
        </div>
      </section>
    </>
  );
}
