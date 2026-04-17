import { client } from "@/lib/sanity";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/lib/sanity-image";
import { FALLBACK_BLOG_POSTS } from "@/lib/constants";
import { ArrowUpRight, BookOpen } from "lucide-react";

async function getPosts() {
  return await client.fetch(`*[_type == "post"] | order(publishedAt desc)[0...3]{
    _id,
    title,
    slug,
    mainImage,
    publishedAt,
    excerpt,
    categories[]->{title}
  }`);
}

export default async function BlogSection() {
  let posts: any[] = [];
  try {
    posts = await getPosts();
    if (!Array.isArray(posts) || posts.length === 0) {
      throw new Error("No posts returned from Sanity");
    }
  } catch (_) {
    posts = FALLBACK_BLOG_POSTS.map((post) => ({
      _id: post._id,
      title: post.title,
      slug: post.slug,
      mainImage: null,
      publishedAt: post.publishedAt,
      excerpt: post.excerpt,
      categories: [{ title: post.category }],
    }));
  }

  if (posts.length === 0) return null;

  const featuredPost = posts[0];
  const sidePosts = posts.slice(1, 3);

  return (
    <section id="blog" className="py-32 px-4 bg-transparent relative">
      <div className="absolute left-1/4 top-1/2 w-[500px] h-[500px] bg-gold/5 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />
      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold/20 bg-gold/5 text-xs font-bold uppercase tracking-widest mb-6 text-gold">
              <BookOpen size={14} /> Intelligence
            </div>
            <h2 className="text-4xl md:text-6xl font-black font-outfit leading-tight">
              Market <span className="gold-text">Insights</span>
            </h2>
          </div>
          <Link href="/blog" className="group flex items-center gap-2 text-gray-300 hover:text-gold transition-colors font-semibold uppercase tracking-wider text-sm border-b border-transparent hover:border-gold pb-1">
            View All Intel <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Featured Post */}
          <div className="lg:col-span-7">
            <Link href={`/blog/${featuredPost.slug.current}`} className="group block relative h-full min-h-[500px] rounded-[2rem] overflow-hidden glass-card border border-white/10 futuristic-border" style={{ backgroundColor: 'var(--dark-surface)' }}>
              {featuredPost.mainImage && (
                <div className="absolute inset-0">
                  <Image
                    src={urlFor(featuredPost.mainImage).url()}
                    alt={featuredPost.title}
                    fill
                    className="object-cover opacity-60 group-hover:scale-105 group-hover:opacity-80 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                </div>
              )}
              <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
                {featuredPost.categories?.[0] && (
                  <span className="inline-block px-4 py-1.5 rounded-full bg-[#00f5ff]/20 text-[#00f5ff] text-xs font-bold uppercase tracking-widest backdrop-blur-md border border-[#00f5ff]/30 mb-6 drop-shadow-lg w-fit">
                    {featuredPost.categories[0].title}
                  </span>
                )}
                <h3 className="text-3xl md:text-5xl font-bold font-outfit text-white mb-4 leading-tight group-hover:text-[#00f5ff] transition-colors drop-shadow-md">
                  {featuredPost.title}
                </h3>
                <p className="text-gray-300 text-lg line-clamp-2 md:line-clamp-3 mb-6 max-w-2xl drop-shadow-sm">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center gap-2 text-white font-bold text-sm uppercase tracking-wider">
                  Read Article <ArrowUpRight className="w-4 h-4 text-[#00f5ff]" />
                </div>
              </div>
            </Link>
          </div>

          {/* Side Posts */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            {sidePosts.map((post: any) => (
              <Link key={post._id} href={`/blog/${post.slug.current}`} className="group flex-1 rounded-[2rem] p-6 md:p-8 glass-card border border-white/10 futuristic-border hover:border-gold/30 transition-all duration-300 flex flex-col justify-center relative overflow-hidden" style={{ backgroundColor: 'var(--dark-surface)' }}>
                {post.mainImage && (
                  <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                    <Image src={urlFor(post.mainImage).url()} alt={post.title} fill className="object-cover blur-sm" />
                  </div>
                )}
                <div className="relative z-10">
                  {post.categories?.[0] && (
                    <span className="text-xs font-semibold text-gold uppercase tracking-wider mb-4 block">
                      {post.categories[0].title}
                    </span>
                  )}
                  <h3 className="text-xl md:text-2xl font-bold font-outfit text-white mb-3 line-clamp-2 group-hover:text-gold transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 text-sm line-clamp-2 mb-6">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-gray-300 group-hover:text-white font-bold text-xs uppercase tracking-wider transition-colors">
                    Read Article <ArrowUpRight className="w-3 h-3 text-gold" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}