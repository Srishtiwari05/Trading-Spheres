import { client } from "@/lib/sanity";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/lib/sanity-image";
import { FALLBACK_BLOG_POSTS } from "@/lib/constants";

async function getPosts() {
  return await (client as any).fetch(`*[_type == "post"] | order(publishedAt desc)[0...3]{
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
  let posts = [];
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

  return (
    <section id="blog" className="py-20 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Trading <span className="gold-text">Insights & Tips</span>
        </h2>
        <p className="text-center text-gray-400 mb-12">Stay updated with the latest market trends</p>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post: any) => (
            <article key={post._id} className="bg-[#0d0d0d] rounded-xl overflow-hidden border border-gray-800">
              {post.mainImage && (
                <div className="relative h-48">
                  <Image
                    src={urlFor(post.mainImage).url()}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <div className="p-6">
                {post.categories?.[0] && (
                  <span className="text-xs font-semibold gold-text uppercase tracking-wider">
                    {post.categories[0].title}
                  </span>
                )}
                <h3 className="text-xl font-bold mt-2 mb-2 line-clamp-2">{post.title}</h3>
                <p className="text-gray-400 text-sm line-clamp-2 mb-4">{post.excerpt}</p>
                <Link href={`/blog/${post.slug.current}`} className="gold-text hover:underline">
                  Read More →
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/blog" className="inline-block px-6 py-3 border border-gold gold-text rounded-lg hover:bg-gold hover:text-navy transition-colors">
            View All Posts
          </Link>
        </div>
      </div>
    </section>
  );
}