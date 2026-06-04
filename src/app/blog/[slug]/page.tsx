import { getNotionPostBySlug } from "@/lib/notion";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export const dynamic = "force-dynamic";
export const revalidate = 60;

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const { slug } = await params;
    const post = await getNotionPostBySlug(slug);
    return { title: `${post.title} – MyTron Labs`, description: post.excerpt };
  } catch {
    return {};
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  let post;
  try {
    post = await getNotionPostBySlug(slug);
  } catch {
    notFound();
  }

  const paragraphs = post.content.split("\n\n").filter(Boolean);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        headline: post.title,
        description: post.excerpt,
        author: { "@type": "Person", name: post.author },
        publisher: { "@type": "Organization", name: "MyTron Labs", url: "https://www.mytronlabs.com" },
        datePublished: post.date,
        url: `https://www.mytronlabs.com/blog/${post.slug}`,
      })}} />

      <section className="relative pt-24 md:pt-32 pb-10 px-4 sm:px-6 bg-black grid-bg">
        <div className="max-w-3xl mx-auto">
          <Link href="/blog" className="inline-flex items-center gap-1.5 text-sm text-[#6E7180] hover:text-[#EDEFF7] transition-colors mb-8">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            All posts
          </Link>
          <div className="flex flex-wrap gap-2 mb-5">
            {post.tags.map((tag) => (
              <span key={tag} className="text-xs font-medium text-[#6E7180] bg-[#1E1E24] px-2.5 py-1 rounded">{tag}</span>
            ))}
          </div>
          <h1 className="text-display text-3xl sm:text-4xl md:text-5xl mb-5 leading-tight">{post.title}</h1>
          <div className="flex items-center gap-4 text-sm text-[#6E7180]">
            <span>{post.author}</span>
            <span>·</span>
            <span>{post.date ? new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }) : ""}</span>
          </div>
        </div>
      </section>

      <section className="bg-[#1E1E24] py-10 md:py-16 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto space-y-6">
          {paragraphs.map((block, i) => {
            if (block.startsWith("## ")) return <h2 key={i} className="text-2xl font-bold text-[#EDEFF7] mt-10 mb-2">{block.replace("## ", "")}</h2>;
            if (block.startsWith("# ")) return <h1 key={i} className="text-3xl font-bold text-[#EDEFF7] mt-10 mb-2">{block.replace("# ", "")}</h1>;
            if (block.startsWith("- ")) {
              const items = block.split("\n").filter(l => l.startsWith("- "));
              return <ul key={i} className="space-y-2 pl-4">{items.map((item, j) => <li key={j} className="text-[#9DA2B3] leading-relaxed flex gap-2"><span className="text-[#6E7180] flex-shrink-0">—</span>{item.replace("- ", "")}</li>)}</ul>;
            }
            return <p key={i} className="text-[#9DA2B3] leading-relaxed text-lg">{block.replace(/\*\*([^*]+)\*\*/g, "$1").replace(/\*([^*]+)\*/g, "$1")}</p>;
          })}
        </div>
      </section>

      <section className="bg-black py-10 md:py-16 px-4 sm:px-6 border-t border-[#40424D]">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-medium text-[#9DA2B3] hover:text-[#EDEFF7] transition-colors">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back to blog
          </Link>
          <Link href="/contact" className="btn-primary group text-sm">
            Get in touch
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
