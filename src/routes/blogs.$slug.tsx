import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { CalendarDays, Search } from "lucide-react";
import { toast } from "sonner";
import { posts } from "@/lib/blog-data";
import { blogThumb } from "@/lib/blog-thumbs";
import { services } from "@/lib/site-data";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/blogs/$slug")({
  loader: ({ params }) => {
    const index = posts.findIndex((p) => p.slug === params.slug);
    if (index === -1) throw notFound();
    return { post: posts[index], index };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.post.title ?? "Article"} | ARN Innovation Technology` },
      { name: "description", content: loaderData?.post.excerpt ?? "Digital and IT insights from ARN Dubai." },
      { property: "og:title", content: loaderData?.post.title ?? "ARN article" },
      { property: "og:description", content: loaderData?.post.excerpt ?? "Digital and IT insights from ARN Dubai." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BlogDetail,
});

function BlogDetail() {
  const { post, index } = Route.useLoaderData();
  const recent = posts.filter((p) => p.slug !== post.slug).slice(0, 4);
  return (
    <main className="py-12">
      <div className="site-container">
        <nav className="text-sm text-muted-foreground">
          <Link to="/" className="hover:text-primary">Home</Link> » <Link to="/blogs" className="hover:text-primary">Blogs</Link> » <span>{post.title}</span>
        </nav>
        <div className="mt-8 grid gap-12 lg:grid-cols-[1.6fr_.7fr]">
          <article>
            <img src={blogThumb(index)} alt={post.title} width={1000} height={560} className="w-full object-cover" />
            <p className="mt-6 inline-flex items-center gap-2 text-sm text-muted-foreground">
              <CalendarDays className="size-4 text-primary" />
              {post.date}
            </p>
            <h1 className="mt-3 text-3xl font-bold leading-tight md:text-4xl">{post.title}</h1>
            <p className="body-copy mt-6">{post.excerpt}</p>
            {post.sections.map((section) => (
              <section key={section.heading} className="mt-10">
                <h2 className="text-2xl font-semibold">{section.heading}</h2>
                {section.body.map((paragraph) => (
                  <p className="body-copy mt-4" key={paragraph}>{paragraph}</p>
                ))}
              </section>
            ))}
          </article>

          <aside className="space-y-8">
            <form className="flex" onSubmit={(e) => e.preventDefault()}>
              <input className="form-control" placeholder="Search..." aria-label="Search articles" />
              <button className="grid w-14 shrink-0 place-items-center bg-primary text-primary-foreground" aria-label="Search">
                <Search />
              </button>
            </form>

            <div className="border border-border p-5">
              <h2 className="text-lg font-semibold">Get Offer Now</h2>
              <form
                className="mt-4 grid gap-3"
                onSubmit={(e) => {
                  e.preventDefault();
                  toast.success("Thanks! We'll be in touch shortly.");
                }}
              >
                <div className="grid gap-3 sm:grid-cols-2">
                  <input className="form-control" placeholder="Your Name" aria-label="Your name" required />
                  <input className="form-control" type="email" placeholder="Your Email" aria-label="Your email" required />
                </div>
                <input className="form-control" placeholder="Your Phone Number" aria-label="Your phone number" />
                <select className="form-control" defaultValue="" aria-label="Choose a service">
                  <option value="" disabled>--Please Choose An Option--</option>
                  {services.map((s) => <option key={s.slug}>{s.title}</option>)}
                </select>
                <Button type="submit" className="rounded-none">Send Message</Button>
              </form>
            </div>

            <div className="border border-border p-5">
              <h2 className="text-lg font-semibold">Recent Posts</h2>
              <div className="mt-4 space-y-4">
                {recent.map((p) => (
                  <Link to="/blogs/$slug" params={{ slug: p.slug }} key={p.slug} className="flex gap-3">
                    <img src={blogThumb(posts.indexOf(p))} alt="" loading="lazy" className="size-14 shrink-0 object-cover" />
                    <span className="min-w-0">
                      <span className="block text-sm font-semibold leading-5">{p.title}</span>
                      <span className="mt-1 block text-xs text-muted-foreground">{p.date}</span>
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="border border-border p-5">
              <h2 className="text-lg font-semibold">Categories</h2>
              <Link to="/blogs" className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary">
                Blogs <span className="rounded-full bg-primary px-2 text-xs text-primary-foreground">{posts.length}</span>
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
