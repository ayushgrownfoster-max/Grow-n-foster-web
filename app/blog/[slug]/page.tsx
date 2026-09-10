import { getPostBySlug, getAllPostSlugs, getAllPosts } from "@/lib/sanity/queries";
import { urlFor } from "@/lib/sanity/image";
import { PortableTextRenderer } from "./PortableTextRenderer";
import { BlogSocialShare } from "./BlogSocialShare";
import { BlogFaqAccordion } from "./BlogFaqAccordion";
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

  const canonicalUrl =
    post.canonicalUrl || `https://www.grownfoster.com/blog/${slug}`;

  return {
    metadataBase: new URL("https://www.grownfoster.com"),
    title: `${post.seoTitle ?? post.title} | Grow 'n' Foster`,
    description: post.seoDescription ?? post.excerpt,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: post.seoTitle ?? post.title,
      description: post.seoDescription ?? post.excerpt,
      url: canonicalUrl,
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

  const relatedArticles = otherPosts.slice(0, 3);

  const coverImageUrl = post.coverImage
    ? urlFor(post.coverImage).width(1600).height(900).fit("crop").url()
    : null;

  const pageCanonicalUrl =
    post.canonicalUrl || `https://www.grownfoster.com/blog/${slug}`;

  const faqJsonLd =
    post.faqItems && post.faqItems.length > 0
      ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: post.faqItems.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
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
    <div className="min-h-screen bg-white text-slate-900 font-hanken antialiased">

      {/* ── FAQ Schema ── */}
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}

      {/* ── Custom JSON-LD Schema (Rendered exclusively as requested) ── */}
      {cleanedCustomJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: cleanedCustomJsonLd }}
        />
      )}

      {/* ── Top Hero Header Section (Centered Title & Header) ── */}
      <section className="pt-8 pb-10 md:pt-14 md:pb-12 bg-gradient-to-b from-slate-50/80 via-slate-50/40 to-white border-b border-slate-100">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-5">
            {/* Breadcrumb & Post Meta */}
            <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-mono text-slate-500">
              <nav aria-label="Breadcrumb">
                <ol className="flex items-center gap-2">
                  <li>
                    <Link href="/" className="hover:text-[#4b5a20] transition-colors">
                      Home
                    </Link>
                  </li>
                  <li>
                    <span className="material-symbols-outlined text-xs text-slate-400">
                      chevron_right
                    </span>
                  </li>
                  <li>
                    <Link href="/blog" className="hover:text-[#4b5a20] transition-colors">
                      Blog
                    </Link>
                  </li>
                </ol>
              </nav>

              <span className="text-slate-300">·</span>

              {post.publishedAt && (
                <span className="font-semibold text-slate-600">
                  {formatDate(post.publishedAt)}
                </span>
              )}

              {post.category && (
                <>
                  <span className="text-slate-300">·</span>
                  <span className="bg-[#4b5a20]/10 text-[#4b5a20] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider text-[10px]">
                    {post.category}
                  </span>
                </>
              )}

              {post.readTime && (
                <>
                  <span className="text-slate-300">·</span>
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-xs">schedule</span>
                    {post.readTime} min read
                  </span>
                </>
              )}
            </div>

            {/* Main Post Title (Centered) */}
            <h1 className="font-hanken text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold text-slate-900 leading-[1.12] tracking-tight max-w-4xl mx-auto">
              {post.title}
            </h1>

            {/* Excerpt Lead (Centered) */}
            {post.excerpt && (
              <p className="text-slate-600 text-lg md:text-xl leading-relaxed font-normal max-w-3xl mx-auto">
                {post.excerpt}
              </p>
            )}

            {/* Post Social Share Bar (Centered under Header) */}
            <div className="flex justify-center w-full">
              <BlogSocialShare
                title={post.title}
                url={pageCanonicalUrl}
                className="justify-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Main Content Grid: Sticky Left Sidebar + Right Article ── */}
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <div className="grid lg:grid-cols-[330px_1fr] xl:grid-cols-[350px_1fr] gap-10 xl:gap-14 items-start">

          {/* ── LEFT SIDEBAR (Sticky Navigation & Articles, independently scrollable) ── */}
          <aside className="w-full order-2 lg:order-1 lg:sticky lg:top-28 lg:self-start lg:max-h-[calc(100vh-8.5rem)] lg:overflow-y-auto lg:overflow-x-hidden pr-2 space-y-6 [scrollbar-width:thin] [scrollbar-color:#cbd5e1_transparent] [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-slate-300 hover:[&::-webkit-scrollbar-thumb]:bg-slate-400 [&::-webkit-scrollbar-track]:bg-transparent">

            {/* 3. Previous / Next Quick Navigation Switcher */}
            {(prevPost || nextPost) && (
              <div className="bg-slate-50 rounded-3xl p-5 border border-slate-200 space-y-3 shadow-xs">
                <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                  <span className="material-symbols-outlined text-[#4b5a20] text-base">
                    swap_horiz
                  </span>
                  <h3 className="font-hanken font-bold text-slate-900 text-xs tracking-wider uppercase">
                    Blog Navigation
                  </h3>
                </div>

                {prevPost && (
                  <Link
                    href={`/blog/${prevPost.slug?.current ?? prevPost._id}`}
                    className="group block p-3 rounded-2xl bg-white border border-slate-200/80 hover:border-[#4b5a20]/40 hover:bg-[#4b5a20]/5 transition-all shadow-2xs"
                  >
                    <div className="text-[10px] font-mono text-[#4b5a20] font-bold uppercase tracking-wider flex items-center gap-1 mb-1">
                      <span className="material-symbols-outlined text-xs">arrow_back</span>
                      Previous Article
                    </div>
                    <p className="font-hanken font-semibold text-xs text-slate-800 group-hover:text-[#4b5a20] transition-colors line-clamp-2 leading-snug">
                      {prevPost.title}
                    </p>
                  </Link>
                )}

                {nextPost && (
                  <Link
                    href={`/blog/${nextPost.slug?.current ?? nextPost._id}`}
                    className="group block p-3 rounded-2xl bg-white border border-slate-200/80 hover:border-[#4b5a20]/40 hover:bg-[#4b5a20]/5 transition-all shadow-2xs"
                  >
                    <div className="text-[10px] font-mono text-[#4b5a20] font-bold uppercase tracking-wider flex items-center justify-between mb-1">
                      <span>Next Article</span>
                      <span className="material-symbols-outlined text-xs">arrow_forward</span>
                    </div>
                    <p className="font-hanken font-semibold text-xs text-slate-800 group-hover:text-[#4b5a20] transition-colors line-clamp-2 leading-snug">
                      {nextPost.title}
                    </p>
                  </Link>
                )}
              </div>
            )}

            {/* 4. Other Articles Feed */}
            {otherPosts.length > 0 && (
              <div className="bg-slate-50 rounded-3xl p-5 border border-slate-200 shadow-xs">
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-200">
                  <h3 className="font-hanken font-bold text-slate-900 text-xs tracking-wider uppercase flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[#4b5a20] text-base">
                      menu_book
                    </span>
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
                  {otherPosts.slice(0, 5).map((op) => {
                    const thumb = op.coverImage
                      ? urlFor(op.coverImage).width(100).height(100).fit("crop").url()
                      : null;
                    const opSlug = op.slug?.current ?? op._id;
                    return (
                      <Link
                        key={op._id}
                        href={`/blog/${opSlug}`}
                        className="flex gap-3 group p-2.5 rounded-2xl bg-white hover:bg-white border border-slate-200/70 hover:border-[#4b5a20]/40 hover:shadow-xs transition-all"
                      >
                        <div className="w-12 h-12 rounded-xl overflow-hidden bg-[#4b5a20]/10 shrink-0 relative">
                          {thumb ? (
                            <Image
                              src={thumb}
                              alt={op.title}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform"
                            />
                          ) : (
                            <div className="absolute inset-0 flex items-center justify-center">
                              <span className="material-symbols-outlined text-[#4b5a20]/40 text-base">
                                article
                              </span>
                            </div>
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-hanken font-semibold text-xs text-slate-900 leading-snug line-clamp-2 group-hover:text-[#4b5a20] transition-colors">
                            {op.title}
                          </p>
                          <div className="flex items-center gap-1.5 text-[10px] font-mono text-slate-400 mt-1">
                            <span className="text-[#4b5a20] font-semibold truncate">
                              {op.category}
                            </span>
                            {op.readTime && <span>· {op.readTime}m</span>}
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}

            {/* 5. Follow & Connect */}
            <div className="bg-slate-50 rounded-3xl p-5 border border-slate-200 space-y-3 shadow-xs">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                <span className="material-symbols-outlined text-[#4b5a20] text-base">share</span>
                <h3 className="font-hanken font-bold text-slate-900 text-xs tracking-wider uppercase">
                  Follow &amp; Connect
                </h3>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <a
                  href="https://www.linkedin.com/company/grownfoster/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-2 rounded-xl bg-white border border-slate-200 hover:border-[#0077b5] text-slate-700 hover:text-[#0077b5] transition-all text-xs font-mono font-medium"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://x.com/grownfoster"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-2 rounded-xl bg-white border border-slate-200 hover:border-black text-slate-700 hover:text-black transition-all text-xs font-mono font-medium"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                  <span>Twitter</span>
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61565508944312"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-2 rounded-xl bg-white border border-slate-200 hover:border-[#1877f2] text-slate-700 hover:text-[#1877f2] transition-all text-xs font-mono font-medium"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385h-3.047v-3.47h3.047v-2.642c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.514c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385c5.737-.9 10.125-5.864 10.125-11.854z" />
                  </svg>
                  <span>Facebook</span>
                </a>
                <a
                  href="mailto:info@grownfoster.com"
                  className="flex items-center gap-2 p-2 rounded-xl bg-white border border-slate-200 hover:border-[#4b5a20] text-slate-700 hover:text-[#4b5a20] transition-all text-xs font-mono font-medium"
                >
                  <span className="material-symbols-outlined text-sm text-[#4b5a20]">mail</span>
                  <span>Email</span>
                </a>
              </div>
            </div>
          </aside>

          {/* ── RIGHT MAIN ARTICLE (post-inner matching DesignInDC) ── */}
          <article className="min-w-0 max-w-4xl order-1 lg:order-2 w-full">
            {/* Featured Image (DesignInDC post-inner cover image) */}
            {coverImageUrl && (
              <div className="relative w-full aspect-[16/9] md:aspect-[21/10] rounded-[26px] overflow-hidden shadow-xl mb-10 border border-slate-200/60">
                <Image
                  src={coverImageUrl}
                  alt={post.coverImage?.alt ?? post.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            )}

            {/* Tags strip */}
            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-8">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-[#4b5a20]/8 text-[#4b5a20] text-xs font-mono px-3 py-1.5 rounded-lg border border-[#4b5a20]/15"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}

            {/* Main PortableText Content */}
            {post.body && (
              <div className="prose prose-slate prose-lg max-w-none">
                <PortableTextRenderer value={post.body as unknown[]} />
              </div>
            )}

            {/* FAQ Accordion (matches DesignInDC FAQ acc-def) */}
            {post.faqItems && post.faqItems.length > 0 && (
              <BlogFaqAccordion faqItems={post.faqItems} />
            )}

            {/* Author Profile Box */}
            <div className="mt-12 p-6 md:p-8 bg-slate-50 rounded-3xl border border-slate-200/80 flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <div className="w-14 h-14 rounded-full bg-[#4b5a20] text-white flex items-center justify-center font-bold text-xl shrink-0 shadow-md">
                {post.author?.charAt(0) ?? "G"}
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h4 className="font-hanken font-bold text-slate-900 text-base">
                    Written by {post.author || "Grow 'n' Foster Team"}
                  </h4>
                  {post.authorRole && (
                    <span className="text-[11px] font-mono text-[#4b5a20] bg-[#4b5a20]/10 px-2.5 py-0.5 rounded-full font-semibold">
                      {post.authorRole}
                    </span>
                  )}
                </div>
                <p className="text-slate-600 text-xs md:text-sm font-hanken leading-relaxed">
                  Grow &apos;n&apos; Foster is an elite digital marketing &amp; web consultancy helping brands scale revenue through conversion architecture, technical SEO, and performance campaigns.
                </p>
              </div>
            </div>

            {/* In-Article Prev / Next Post Navigation strip */}
            {(prevPost || nextPost) && (
              <div className="mt-10 grid sm:grid-cols-2 gap-4">
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
          </article>
        </div>
      </div>

      {/* ── Related Articles Section (Matching DesignInDC Related Articles section) ── */}
      {relatedArticles.length > 0 && (
        <section className="border-t border-slate-200 bg-slate-50/50 py-16 md:py-24">
          <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
              <span className="text-[11px] font-mono text-[#4b5a20] font-bold uppercase tracking-widest bg-[#4b5a20]/10 px-3 py-1 rounded-full">
                Keep Reading
              </span>
              <h2 className="font-hanken text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                Related Articles
              </h2>
              <p className="text-slate-600 text-sm">
                Explore more insights on growth strategy, SEO, and web engineering.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedArticles.map((ra) => {
                const raThumb = ra.coverImage
                  ? urlFor(ra.coverImage).width(800).height(500).fit("crop").url()
                  : null;
                const raSlug = ra.slug?.current ?? ra._id;

                return (
                  <article
                    key={ra._id}
                    className="group flex flex-col bg-white rounded-3xl border border-slate-200/80 overflow-hidden hover:shadow-xl hover:border-[#4b5a20]/40 transition-all duration-300"
                  >
                    {/* Thumbnail with bottom overlay info */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                      {raThumb ? (
                        <Image
                          src={raThumb}
                          alt={ra.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center bg-[#4b5a20]/10">
                          <span className="material-symbols-outlined text-[#4b5a20]/40 text-4xl">
                            article
                          </span>
                        </div>
                      )}

                      {/* Glassmorphic info bar over image bottom */}
                      <div className="absolute inset-x-0 bottom-0 px-4 py-2.5 backdrop-blur-md bg-black/45 border-t border-white/20 text-white flex items-center justify-between text-[11px] font-mono">
                        <span>{ra.publishedAt ? formatDate(ra.publishedAt) : "Grow 'n' Foster"}</span>
                        <span className="bg-[#4b5a20] text-white px-2 py-0.5 rounded-full font-bold uppercase text-[9px]">
                          {ra.category}
                        </span>
                      </div>
                    </div>

                    {/* Article Details */}
                    <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                      <div className="space-y-2">
                        <h3 className="font-hanken font-bold text-lg text-slate-900 group-hover:text-[#4b5a20] transition-colors line-clamp-2 leading-snug">
                          {ra.title}
                        </h3>
                        {ra.excerpt && (
                          <p className="text-slate-600 text-xs leading-relaxed line-clamp-2 font-hanken">
                            {ra.excerpt}
                          </p>
                        )}
                      </div>

                      <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-mono">
                        <span className="text-slate-400">{ra.readTime ? `${ra.readTime} min read` : "Insights"}</span>
                        <Link
                          href={`/blog/${raSlug}`}
                          className="text-[#4b5a20] font-bold flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                        >
                          <span>Read article</span>
                          <span className="material-symbols-outlined text-sm">arrow_forward</span>
                        </Link>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ── Bottom Full-Width CTA Banner (Matching DesignInDC "Elevate Your Brand" banner) ── */}
      <section className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <div className="relative rounded-[36px] bg-[#1a220c] text-white p-8 md:p-16 text-center overflow-hidden shadow-2xl">
          {/* Subtle background glow circle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#4b5a20]/30 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-5">
            <span className="text-[11px] font-mono text-[#d8eba1] font-bold uppercase tracking-widest bg-white/10 px-4 py-1.5 rounded-full border border-white/15">
              Let&apos;s Build Together
            </span>

            <h2 className="font-hanken text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
              Elevate Your Brand <span className="text-[#d8eba1] font-light">with Grow &apos;n&apos; Foster</span>
            </h2>

            <p className="text-slate-300 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              Get in touch with our team to discuss how our comprehensive digital marketing solutions, SEO engines, and conversion design can drive exponential results for your brand.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 bg-[#4b5a20] hover:bg-[#5a6d28] text-white px-8 py-4 rounded-full font-bold font-hanken text-sm transition-all duration-300 shadow-lg shadow-[#4b5a20]/40 hover:scale-105"
              >
                <span className="w-2 h-2 rounded-full bg-[#d8eba1] animate-pulse" />
                <span>Book a Strategy Call</span>
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-7 py-4 rounded-full font-bold font-hanken text-sm transition-all duration-300"
              >
                <span>View Our Work</span>
                <span className="material-symbols-outlined text-base">arrow_outward</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}