import { getPostBySlug, getRecentPosts, getAllPostSlugs } from "@/lib/sanity/queries";
import { urlFor } from "@/lib/sanity/image";
import { PortableTextRenderer } from "./PortableTextRenderer";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return { title: "Post Not Found" };

  const ogImage = post.coverImage
    ? urlFor(post.coverImage).width(1200).height(630).fit("crop").url()
    : undefined;

  return {
    title: `${post.seoTitle ?? post.title} | Grow 'n' Foster Blog`,
    description: post.seoDescription ?? post.excerpt,
    openGraph: {
      title: post.seoTitle ?? post.title,
      description: post.seoDescription ?? post.excerpt,
      images: ogImage ? [{ url: ogImage, width: 1200, height: 630 }] : [],
      type: "article",
      publishedTime: post.publishedAt,
    },
    twitter: {
      card: "summary_large_image",
      title: post.seoTitle ?? post.title,
      description: post.seoDescription ?? post.excerpt,
      images: ogImage ? [ogImage] : [],
    },
  };
}

export async function generateStaticParams() {
  const slugs = await getAllPostSlugs();
  return slugs.map((s) => ({ slug: s.slug.current }));
}

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const [post, recentPosts] = await Promise.all([
    getPostBySlug(slug),
    getRecentPosts(4, slug),
  ]);

  if (!post) notFound();

  const coverImageUrl = post.coverImage
    ? urlFor(post.coverImage).width(1200).height(600).fit("crop").url()
    : null;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": post.schemaType || "BlogPosting",
    "headline": post.seoTitle || post.title,
    "description": post.seoDescription || post.excerpt,
    "image": coverImageUrl ? [coverImageUrl] : [],
    "datePublished": post.publishedAt,
    "dateModified": post.publishedAt,
    "author": [
      {
        "@type": "Person",
        "name": post.author || "Grow 'n' Foster Team",
        "jobTitle": post.authorRole || "Digital Marketing Expert",
      },
    ],
    "publisher": {
      "@type": "Organization",
      "name": "Grow 'n' Foster",
      "logo": {
        "@type": "ImageObject",
        "url": "https://grownfoster.com/gnf-logo-web.png",
      },
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://grownfoster.com/blog/${slug}`,
    },
  };

  const faqJsonLd =
    post.faqItems && post.faqItems.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": post.faqItems.map((item) => ({
            "@type": "Question",
            "name": item.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": item.answer,
            },
          })),
        }
      : null;

  const cleanedCustomJsonLd = post.customJsonLd
    ? post.customJsonLd
        .replace(/<script[^>]*>/gi, "")
        .replace(/<\/script>/gi, "")
        .trim()
    : null;

  return (
    <div className="min-h-screen bg-white text-black font-hanken antialiased">
      {/* Blog Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* FAQ Schema */}
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}

      {/* Custom JSON-LD Schema */}
      {cleanedCustomJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: cleanedCustomJsonLd }}
        />
      )}

      {/* ── Hero / Cover ───────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-slate-50 border-b border-slate-100">
        {coverImageUrl && (
          <div className="absolute inset-0">
            <Image
              src={coverImageUrl}
              alt={post.coverImage?.alt ?? post.title}
              fill
              className="object-cover opacity-15"
              priority
            />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/90 to-white" />

        <div className="max-w-4xl mx-auto px-6 md:px-12 py-16 md:py-24 relative z-10 space-y-6">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs font-mono text-slate-500">
              <li>
                <Link href="/" className="hover:text-[#4b5a20] transition-colors">Home</Link>
              </li>
              <li>
                <span className="material-symbols-outlined text-xs">chevron_right</span>
              </li>
              <li>
                <Link href="/blog" className="hover:text-[#4b5a20] transition-colors">Blog</Link>
              </li>
              <li>
                <span className="material-symbols-outlined text-xs">chevron_right</span>
              </li>
              <li className="text-slate-400 truncate max-w-[200px]">{post.title}</li>
            </ol>
          </nav>

          {/* Category + Featured */}
          <div className="flex items-center gap-3 flex-wrap">
            <span className="bg-[#4b5a20] text-white text-[10px] font-mono tracking-widest uppercase px-4 py-1.5 rounded-full font-semibold">
              {post.category}
            </span>
            {post.featured && (
              <span className="bg-amber-500 text-white text-[10px] font-mono tracking-widest uppercase px-3 py-1.5 rounded-full font-semibold flex items-center gap-1">
                <span className="material-symbols-outlined text-xs">star</span>
                Featured
              </span>
            )}
          </div>

          {/* Title */}
          <h1 className="font-hanken text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1] tracking-tight">
            {post.title}
          </h1>

          {/* Excerpt */}
          <p className="text-slate-600 text-xl leading-relaxed max-w-2xl">
            {post.excerpt}
          </p>

          {/* Meta row */}
          <div className="flex flex-wrap items-center gap-6 pt-2 border-t border-slate-200">
            {/* Author */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#4b5a20] flex items-center justify-center text-white font-bold font-hanken text-sm shrink-0">
                {post.author?.charAt(0) ?? "G"}
              </div>
              <div>
                <p className="font-semibold text-slate-900 text-sm font-hanken">{post.author}</p>
                <p className="text-slate-500 text-xs font-hanken">{post.authorRole}</p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs font-mono text-slate-500 flex-wrap">
              {post.publishedAt && (
                <span className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-sm">calendar_today</span>
                  {formatDate(post.publishedAt)}
                </span>
              )}
              {post.readTime && (
                <span className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-sm">schedule</span>
                  {post.readTime} min read
                </span>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── Cover Image ───────────────────────────────────────────── */}
      {coverImageUrl && (
        <div className="max-w-5xl mx-auto px-6 md:px-12 -mt-8 relative z-10">
          <div className="relative w-full h-64 md:h-96 rounded-3xl overflow-hidden shadow-2xl shadow-slate-200">
            <Image
              src={coverImageUrl}
              alt={post.coverImage?.alt ?? post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      )}

      {/* ── Main Content ──────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid lg:grid-cols-[1fr_320px] gap-12 lg:gap-16">

          {/* Article */}
          <article className="min-w-0">
            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-8">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-[#4b5a20]/8 text-[#4b5a20] text-xs font-mono px-3 py-1.5 rounded-lg border border-[#4b5a20]/15"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Body */}
            {post.body && <PortableTextRenderer value={post.body as unknown[]} />}

            {/* Share / CTA strip */}
            <div className="mt-16 p-8 bg-slate-50 rounded-3xl border border-slate-200 space-y-4">
              <p className="font-hanken font-bold text-slate-900 text-lg">
                Found this useful? Let&apos;s grow your business too.
              </p>
              <p className="text-slate-600 text-sm">
                Book a free strategy session with our team and get a personalized roadmap.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#4b5a20] text-white px-7 py-3.5 rounded-full font-bold font-hanken text-sm hover:bg-[#3d4a1a] transition-all duration-300 shadow-lg shadow-[#4b5a20]/20 group"
              >
                Book a Free Consultation
                <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </Link>
            </div>

            {/* Back to blog */}
            <div className="mt-8">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-slate-500 hover:text-[#4b5a20] font-mono text-sm font-semibold transition-colors"
              >
                <span className="material-symbols-outlined text-base">arrow_back</span>
                Back to Blog
              </Link>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="space-y-8">
            {/* Recent Posts */}
            {recentPosts.length > 0 && (
              <div className="bg-slate-50 rounded-3xl p-6 border border-slate-200">
                <h3 className="font-hanken font-extrabold text-slate-900 text-lg mb-5 flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#4b5a20] text-xl">rss_feed</span>
                  Recent Articles
                </h3>
                <div className="space-y-5">
                  {recentPosts.map((rp) => {
                    const thumb = rp.coverImage
                      ? urlFor(rp.coverImage).width(80).height(80).fit("crop").url()
                      : null;
                    return (
                      <Link
                        key={rp._id}
                        href={`/blog/${rp.slug.current}`}
                        className="flex gap-3 group"
                      >
                        <div className="w-16 h-16 rounded-xl overflow-hidden bg-[#4b5a20]/10 shrink-0 relative">
                          {thumb ? (
                            <Image src={thumb} alt={rp.title} fill className="object-cover" />
                          ) : (
                            <div className="absolute inset-0 flex items-center justify-center">
                              <span className="material-symbols-outlined text-[#4b5a20]/40 text-xl">article</span>
                            </div>
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-hanken font-semibold text-sm text-slate-900 leading-snug line-clamp-2 group-hover:text-[#4b5a20] transition-colors">
                            {rp.title}
                          </p>
                          <p className="text-[10px] font-mono text-slate-400 mt-1">
                            {rp.category}
                          </p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
                <Link
                  href="/blog"
                  className="mt-5 flex items-center gap-1 text-[#4b5a20] text-xs font-mono font-semibold hover:underline"
                >
                  View all articles
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
            )}

            {/* Contact CTA */}
            <div className="bg-[#4b5a20] rounded-3xl p-6 text-white space-y-4 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <h3 className="font-hanken font-extrabold text-xl relative z-10">
                Ready to grow?
              </h3>
              <p className="text-[#d8eba1] text-sm leading-relaxed relative z-10">
                Get a free strategy session tailored to your business goals.
              </p>
              <Link
                href="/contact"
                className="relative z-10 inline-flex items-center gap-2 bg-white text-[#4b5a20] px-5 py-2.5 rounded-full font-bold font-hanken text-sm hover:bg-[#d8eba1] transition-all"
              >
                Get Started
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
