import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export const dynamic = "force-static";
export const dynamicParams = false;

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const post = getPostBySlug(params.slug);
    return { title: `${post.title} – MyTron Labs`, description: post.excerpt };
  } catch {
    return {};
  }
}

export default function BlogPostPage({ params }: Props) {
  let post;
  try {
    post = getPostBySlug(params.slug);
  } catch {
    notFound();
  }

  return (
    <>
      {/* Hero */}
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
              <span key={tag} className="text-xs font-medium text-[#6E7180] bg-[#1E1E24] px-2.5 py-1 rounded">
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-display text-3xl sm:text-4xl md:text-5xl mb-5 leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center gap-4 text-sm text-[#6E7180]">
            <span>{post.author}</span>
            <span>·</span>
            <span>{new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-[#1E1E24] py-10 md:py-16 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto prose prose-invert prose-lg
          prose-headings:text-[#EDEFF7] prose-headings:font-bold
          prose-p:text-[#9DA2B3] prose-p:leading-relaxed
          prose-a:text-[#EDEFF7] prose-a:no-underline hover:prose-a:underline
          prose-strong:text-[#EDEFF7]
          prose-li:text-[#9DA2B3]
          prose-hr:border-[#40424D]
          max-w-none">
          <MDXRemote source={post.content} />
        </div>
      </section>

      {/* Back link */}
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
