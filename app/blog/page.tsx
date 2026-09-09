import { getAllPosts, type PostSummary } from "@/lib/sanity/queries";
import { urlFor } from "@/lib/sanity/image";
import Link from "next/link";
import type { Metadata } from "next";
import Image from "next/image";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export const metadata: Metadata = {
  title: "Blog | Grow 'n' Foster — Digital Marketing Insights",
  description:
    "Expert insights on SEO, social media marketing, B2B lead generation, content strategy, and more from the Grow 'n' Foster team.",
};

const CATEGORIES = [
  "All",
  "SEO",
  "Social Media Marketing",
  "Content Marketing",
  "Paid Advertising",
  "B2B Lead Generation",
  "Email Marketing",
  "Web Design & Development",
  "LinkedIn Outreach",
  "Digital Strategy",
];

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function PostCard({ post }: { post: PostSummary }) {
  const imageUrl = post.coverImage
    ? urlFor(post.coverImage).width(600).height(340).fit("crop").url()
    : null;

  const slug = post.slug?.current ?? post._id;

  return (
    <Link
      href={`/blog/${slug}`}
      className="group flex flex-col bg-white border border-slate-200 rounded-3xl overflow-hidden hover:border-[#4b5a20]/40 hover:shadow-xl hover:shadow-[#4b5a20]/10 transition-all duration-300"
    >
      {/* Cover Image */}
      <div className="relative h-52 bg-gradient-to-br from-[#4b5a20]/10 to-[#4b5a20]/5 overflow-hidden shrink-0">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={post.coverImage?.alt ?? post.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="material-symbols-outlined text-5xl text-[#4b5a20]/30">
              article
            </span>
          </div>
        )}

        {/* Category badge */}
        <div className="absolute top-4 left-4">
          <span className="bg-[#4b5a20] text-white text-[10px] font-mono tracking-widest uppercase px-3 py-1.5 rounded-full font-semibold">
            {post.category}
          </span>
        </div>

        {/* Featured badge */}
        {post.featured && (
          <div className="absolute top-4 right-4">
            <span className="bg-amber-500 text-white text-[10px] font-mono tracking-widest uppercase px-3 py-1.5 rounded-full font-semibold flex items-center gap-1">
              <span className="material-symbols-outlined text-xs">star</span>
              Featured
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6 space-y-4">
        {/* Meta */}
        <div className="flex items-center gap-3 text-xs text-slate-500 font-mono">
          {post.publishedAt && (
            <span>{formatDate(post.publishedAt)}</span>
          )}
          {post.readTime && (
            <>
              <span className="w-1 h-1 rounded-full bg-slate-300" />
              <span>{post.readTime} min read</span>
            </>
          )}
        </div>

        {/* Title */}
        <h2 className="font-hanken font-bold text-lg text-slate-900 leading-snug group-hover:text-[#4b5a20] transition-colors line-clamp-2">
          {post.title}
        </h2>

        {/* Excerpt */}
        <p className="text-slate-600 text-sm leading-relaxed line-clamp-3 flex-1">
          {post.excerpt}
        </p>

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {post.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="bg-[#4b5a20]/8 text-[#4b5a20] text-[10px] font-mono px-2.5 py-1 rounded-lg border border-[#4b5a20]/15"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Author + CTA */}
        <div className="flex items-center justify-between pt-3 border-t border-slate-100">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-full bg-[#4b5a20] flex items-center justify-center text-white text-xs font-bold font-hanken shrink-0">
              {post.author?.charAt(0) ?? "G"}
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-800 font-hanken leading-tight">
                {post.author ?? "Grow 'n' Foster"}
              </p>
              <p className="text-[10px] text-slate-500 font-hanken">
                {post.authorRole ?? "Digital Marketing Expert"}
              </p>
            </div>
          </div>
          <span className="text-[#4b5a20] flex items-center gap-1 text-xs font-semibold font-mono group-hover:gap-2 transition-all">
            Read
            <span className="material-symbols-outlined text-sm">
              arrow_forward
            </span>
          </span>
        </div>
      </div>
    </Link>
  );
}

export default async function BlogPage() {
  const posts = await getAllPosts();
  const featured = posts.filter((p) => p.featured);
  const regular = posts.filter((p) => !p.featured);

  return (
    <div className="min-h-screen bg-white text-black font-hanken antialiased">

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="relative py-20 md:py-28 overflow-hidden bg-slate-50 border-b border-slate-100">
        {/* Blur blob */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#4b5a20]/8 blur-[130px] pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-[#4b5a20]/10 text-[#4b5a20] text-xs font-mono border border-[#4b5a20]/25 tracking-widest uppercase">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4b5a20] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4b5a20]" />
              </span>
              Insights & Strategy
            </div>

            <h1 className="font-hanken text-5xl sm:text-6xl font-extrabold leading-tight tracking-tight text-slate-900">
              The Grow{" "}
              <span className="text-[#4b5a20]">&apos;n&apos; Foster</span>{" "}
              Blog
            </h1>

            <p className="text-slate-600 text-lg leading-relaxed">
              Expert insights on digital marketing, SEO, lead generation, and
              growth strategy — straight from our team.
            </p>

            <div className="flex items-center justify-center gap-4 pt-2">
              <div className="text-center">
                <p className="font-black text-2xl text-slate-900">{posts.length}</p>
                <p className="text-xs text-slate-500 font-mono uppercase tracking-wider">Articles</p>
              </div>
              <div className="h-10 w-px bg-slate-200" />
              <div className="text-center">
                <p className="font-black text-2xl text-slate-900">{CATEGORIES.length - 1}</p>
                <p className="text-xs text-slate-500 font-mono uppercase tracking-wider">Topics</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 space-y-20">

        {/* ── Featured Posts ───────────────────────────────────────── */}
        {featured.length > 0 && (
          <section>
            <div className="flex items-center gap-3 mb-8">
              <span className="material-symbols-outlined text-amber-500">star</span>
              <h2 className="font-hanken text-2xl font-extrabold text-slate-900">Featured</h2>
              <div className="flex-1 h-px bg-slate-200" />
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featured.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
          </section>
        )}

        {/* ── All Posts ────────────────────────────────────────────── */}
        <section>
          {featured.length > 0 && (
            <div className="flex items-center gap-3 mb-8">
              <span className="material-symbols-outlined text-[#4b5a20]">article</span>
              <h2 className="font-hanken text-2xl font-extrabold text-slate-900">All Articles</h2>
              <div className="flex-1 h-px bg-slate-200" />
            </div>
          )}

          {posts.length === 0 ? (
            /* Empty state */
            <div className="text-center py-24 space-y-6">
              <div className="w-20 h-20 rounded-full bg-[#4b5a20]/10 flex items-center justify-center mx-auto">
                <span className="material-symbols-outlined text-4xl text-[#4b5a20]">edit_note</span>
              </div>
              <div>
                <h3 className="font-hanken text-2xl font-bold text-slate-900 mb-2">
                  No posts yet
                </h3>
                <p className="text-slate-500 text-base">
                  We&apos;re working on some great content. Check back soon!
                </p>
              </div>
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-[#4b5a20] font-semibold hover:underline"
              >
                <span className="material-symbols-outlined text-base">arrow_back</span>
                Back to Home
              </Link>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {(featured.length > 0 ? regular : posts).map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
          )}
        </section>

        {/* ── Newsletter CTA ───────────────────────────────────────── */}
        <section className="bg-slate-900 rounded-[40px] p-12 md:p-16 text-center space-y-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-[#4b5a20]/20 rounded-[40px]" />
          <div className="absolute top-0 right-0 w-72 h-72 bg-[#4b5a20]/30 blur-[80px] rounded-full" />
          <div className="relative z-10 space-y-6">
            <span className="inline-flex items-center gap-2 text-[#d8eba1] text-xs font-mono tracking-widest uppercase border border-[#4b5a20]/50 px-4 py-2 rounded-full">
              <span className="material-symbols-outlined text-sm">campaign</span>
              Stay Updated
            </span>
            <h2 className="font-hanken text-3xl md:text-4xl font-extrabold text-white">
              Get expert marketing tips in your inbox
            </h2>
            <p className="text-slate-300 max-w-lg mx-auto">
              Join 1,000+ business owners who receive actionable digital marketing
              insights every week.
            </p>
            <div className="flex justify-center">
              <Link
                href="/contact"
                className="bg-[#4b5a20] text-white px-8 py-4 rounded-full font-bold font-hanken hover:bg-[#3d4a1a] transition-all duration-300 shadow-xl shadow-[#4b5a20]/30 flex items-center gap-3 group"
              >
                Get in Touch
                <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
