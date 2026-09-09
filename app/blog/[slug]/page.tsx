import { getPostBySlug, getAllPostSlugs, getAllPosts, type PostSummary } from "@/lib/sanity/queries";
import { urlFor } from "@/lib/sanity/image";
import { PortableTextRenderer } from "./PortableTextRenderer";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";
export const revalidate = 0;

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
  const post = await getPostBySlug(slug);

  if (!post) notFound();

  const allPosts = await getAllPosts();

  const currentSlug = post.slug?.current ?? slug;
  const currentIndex = allPosts.findIndex(
    (p) => (p.slug?.current ?? p._id) === currentSlug || p._id === post._id
  );

  const prevPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;
  const nextPost =
    currentIndex >= 0 && currentIndex < allPosts.length - 1
      ? allPosts[currentIndex + 1]
      : null;

  const otherPosts = allPosts.filter(
    (p) => (p.slug?.current ?? p._id) !== currentSlug && p._id !== post._id
  );

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

            {/* ── Previous & Next Blog Strip ── */}
            {(prevPost || nextPost) && (
              <div className="mt-12 grid sm:grid-cols-2 gap-4">
                {prevPost ? (
                  <Link
                    href={`/blog/${prevPost.slug?.current ?? prevPost._id}`}
                    className="group flex flex-col p-5 bg-slate-50 hover:bg-[#4b5a20]/5 rounded-2xl border border-slate-200 hover:border-[#4b5a20]/40 transition-all text-left"
                  >
                    <span className="text-[11px] font-mono text-[#4b5a20] font-semibold uppercase tracking-wider flex items-center gap-1 mb-1">
                      <span className="material-symbols-outlined text-sm">arrow_back</span>
                      Previous Article
                    </span>
                    <span className="font-hanken font-bold text-sm text-slate-900 group-hover:text-[#4b5a20] transition-colors line-clamp-2">
                      {prevPost.title}
                    </span>
                  </Link>
                ) : (
                  <div className="hidden sm:block" />
                )}

                {nextPost && (
                  <Link
                    href={`/blog/${nextPost.slug?.current ?? nextPost._id}`}
                    className="group flex flex-col p-5 bg-slate-50 hover:bg-[#4b5a20]/5 rounded-2xl border border-slate-200 hover:border-[#4b5a20]/40 transition-all text-right sm:col-start-2"
                  >
                    <span className="text-[11px] font-mono text-[#4b5a20] font-semibold uppercase tracking-wider flex items-center justify-end gap-1 mb-1">
                      Next Article
                      <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </span>
                    <span className="font-hanken font-bold text-sm text-slate-900 group-hover:text-[#4b5a20] transition-colors line-clamp-2">
                      {nextPost.title}
                    </span>
                  </Link>
                )}
              </div>
            )}

            {/* Share / CTA strip */}
            <div className="mt-12 p-8 bg-slate-50 rounded-3xl border border-slate-200 space-y-4">
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
                Back to All Articles
              </Link>
            </div>
          </article>

          {/* ── Sticky Right Sidebar ───────────────────────────── */}
          <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start lg:max-h-[calc(100vh-8rem)] lg:overflow-y-auto lg:pr-1">

            {/* 1. Previous / Next Blog Navigation Buttons */}
            {(prevPost || nextPost) && (
              <div className="bg-slate-50 rounded-3xl p-5 border border-slate-200 space-y-3">
                <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                  <span className="material-symbols-outlined text-[#4b5a20] text-lg">swap_horiz</span>
                  <h3 className="font-hanken font-bold text-slate-900 text-sm tracking-wide uppercase">
                    Blog Navigation
                  </h3>
                </div>

                {prevPost && (
                  <Link
                    href={`/blog/${prevPost.slug?.current ?? prevPost._id}`}
                    className="group block p-3 rounded-2xl bg-white border border-slate-200/80 hover:border-[#4b5a20]/40 hover:bg-[#4b5a20]/5 transition-all shadow-xs"
                  >
                    <div className="text-[10px] font-mono text-[#4b5a20] font-bold uppercase tracking-wider flex items-center gap-1 mb-1">
                      <span className="material-symbols-outlined text-xs">arrow_back</span>
                      Previous Blog
                    </div>
                    <p className="font-hanken font-semibold text-xs text-slate-800 group-hover:text-[#4b5a20] transition-colors line-clamp-2">
                      {prevPost.title}
                    </p>
                  </Link>
                )}

                {nextPost && (
                  <Link
                    href={`/blog/${nextPost.slug?.current ?? nextPost._id}`}
                    className="group block p-3 rounded-2xl bg-white border border-slate-200/80 hover:border-[#4b5a20]/40 hover:bg-[#4b5a20]/5 transition-all shadow-xs"
                  >
                    <div className="text-[10px] font-mono text-[#4b5a20] font-bold uppercase tracking-wider flex items-center justify-between mb-1">
                      <span>Next Blog</span>
                      <span className="material-symbols-outlined text-xs">arrow_forward</span>
                    </div>
                    <p className="font-hanken font-semibold text-xs text-slate-800 group-hover:text-[#4b5a20] transition-colors line-clamp-2">
                      {nextPost.title}
                    </p>
                  </Link>
                )}
              </div>
            )}

            {/* 2. Navigate to Other Blogs List */}
            {otherPosts.length > 0 && (
              <div className="bg-slate-50 rounded-3xl p-5 border border-slate-200">
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-200">
                  <h3 className="font-hanken font-bold text-slate-900 text-sm tracking-wide uppercase flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[#4b5a20] text-lg">menu_book</span>
                    Other Blogs
                  </h3>
                  <Link
                    href="/blog"
                    className="text-[11px] font-mono text-[#4b5a20] hover:underline font-semibold"
                  >
                    All ({allPosts.length})
                  </Link>
                </div>

                <div className="space-y-3">
                  {otherPosts.map((op, idx) => {
                    const thumb = op.coverImage
                      ? urlFor(op.coverImage).width(90).height(90).fit("crop").url()
                      : null;
                    const opSlug = op.slug?.current ?? op._id;
                    return (
                      <Link
                        key={op._id}
                        href={`/blog/${opSlug}`}
                        className="flex gap-3 group p-2.5 rounded-2xl bg-white/70 hover:bg-white border border-slate-200/60 hover:border-[#4b5a20]/40 hover:shadow-sm transition-all"
                      >
                        <div className="w-14 h-14 rounded-xl overflow-hidden bg-[#4b5a20]/10 shrink-0 relative">
                          {thumb ? (
                            <Image src={thumb} alt={op.title} fill className="object-cover group-hover:scale-105 transition-transform" />
                          ) : (
                            <div className="absolute inset-0 flex items-center justify-center">
                              <span className="material-symbols-outlined text-[#4b5a20]/40 text-lg">article</span>
                            </div>
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-hanken font-semibold text-xs text-slate-900 leading-snug line-clamp-2 group-hover:text-[#4b5a20] transition-colors">
                            {op.title}
                          </p>
                          <div className="flex items-center gap-2 text-[10px] font-mono text-slate-400 mt-1">
                            <span className="text-[#4b5a20] font-semibold">{op.category}</span>
                            {op.readTime && <span>· {op.readTime} min</span>}
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}

            {/* 3. Official Website Social Links */}
            <div className="bg-slate-50 rounded-3xl p-5 border border-slate-200 space-y-3.5">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                <span className="material-symbols-outlined text-[#4b5a20] text-lg">share</span>
                <h3 className="font-hanken font-bold text-slate-900 text-sm tracking-wide uppercase">
                  Follow &amp; Connect
                </h3>
              </div>
              <p className="text-xs text-slate-500 font-hanken">
                Stay updated with Grow &apos;n&apos; Foster on our official social channels:
              </p>
              <div className="grid grid-cols-2 gap-2.5">
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/company/grownfoster/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-slate-200 hover:border-[#0077b5] hover:bg-[#0077b5]/5 text-slate-700 hover:text-[#0077b5] transition-all text-xs font-mono font-semibold shadow-2xs"
                >
                  <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                  <span>LinkedIn</span>
                </a>

                {/* X / Twitter */}
                <a
                  href="https://x.com/grownfoster"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-slate-200 hover:border-black hover:bg-black/5 text-slate-700 hover:text-black transition-all text-xs font-mono font-semibold shadow-2xs"
                >
                  <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                  <span>Twitter (X)</span>
                </a>

                {/* Facebook */}
                <a
                  href="https://www.facebook.com/profile.php?id=61565508944312"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-slate-200 hover:border-[#1877f2] hover:bg-[#1877f2]/5 text-slate-700 hover:text-[#1877f2] transition-all text-xs font-mono font-semibold shadow-2xs"
                >
                  <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385h-3.047v-3.47h3.047v-2.642c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.514c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385c5.737-.9 10.125-5.864 10.125-11.854z" />
                  </svg>
                  <span>Facebook</span>
                </a>

                {/* Email */}
                <a
                  href="mailto:info@grownfoster.com"
                  className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-slate-200 hover:border-[#4b5a20] hover:bg-[#4b5a20]/5 text-slate-700 hover:text-[#4b5a20] transition-all text-xs font-mono font-semibold shadow-2xs"
                >
                  <span className="material-symbols-outlined text-base text-[#4b5a20]">mail</span>
                  <span>Email</span>
                </a>
              </div>
            </div>

            {/* 4. Consultation CTA */}
            <div className="bg-[#4b5a20] rounded-3xl p-5 text-white space-y-3 relative overflow-hidden shadow-lg shadow-[#4b5a20]/15">
              <div className="absolute top-0 right-0 w-28 h-28 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <h3 className="font-hanken font-extrabold text-base relative z-10">
                Need Marketing Growth?
              </h3>
              <p className="text-[#d8eba1] text-xs leading-relaxed relative z-10">
                Get a free consultation roadmap tailored to your industry and goals.
              </p>
              <Link
                href="/contact"
                className="relative z-10 inline-flex items-center gap-1.5 bg-white text-[#4b5a20] px-4 py-2 rounded-full font-bold font-hanken text-xs hover:bg-[#d8eba1] transition-all"
              >
                <span>Get Started</span>
                <span className="material-symbols-outlined text-xs">arrow_forward</span>
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
