import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CalendarDays } from "lucide-react";
import { posts } from "@/lib/blog-data";
import { blogThumb } from "@/lib/blog-thumbs";

export const Route = createFileRoute("/blogs")({
  head: () => ({
    meta: [
      { title: "Our Latest Blog | ARN Innovation Technology Dubai" },
      { name: "description", content: "Digital marketing, SEO, web development and IT insights for businesses in Dubai and across the UAE." },
      { property: "og:title", content: "Our Latest Blog | ARN Innovation Technology" },
      { property: "og:description", content: "Practical digital marketing and IT insights from ARN's Dubai team." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BlogsPage,
});

function BlogsPage() {
  return (
    <main className="py-16">
      <div className="site-container">
        <div className="text-center">
          <span className="eyebrow">Blog</span>
          <h1 className="section-title mt-5">
            Our Latest <span className="text-primary">Blog</span>
          </h1>
        </div>
        <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <article key={post.slug} className="flex flex-col bg-background shadow-md">
              <img src={blogThumb(i)} alt={post.title} loading="lazy" width={800} height={500} className="h-52 w-full object-cover" />
              <div className="flex flex-1 flex-col p-6">
                <p className="inline-flex items-center gap-2 text-xs text-muted-foreground">
                  <CalendarDays className="size-4 text-primary" />
                  {post.date}
                </p>
                <h2 className="mt-3 text-base font-semibold leading-6">{post.title}</h2>
                <Link
                  to="/blogs/$slug"
                  params={{ slug: post.slug }}
                  className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-primary"
                >
                  More Details <ArrowRight className="size-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
