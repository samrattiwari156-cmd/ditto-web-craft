import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { services } from "@/lib/site-data";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/services/$slug")({
  loader: ({params}) => { const service = services.find(s=>s.slug===params.slug); if(!service) throw notFound(); return service; },
  head: ({loaderData}) => ({meta:[
    {title:`${loaderData?.title ?? "Service"} Dubai | ARN Innovation Technology`},
    {name:"description",content:loaderData?.short ?? "Digital marketing and IT services in Dubai."},
    {property:"og:title",content:`${loaderData?.title ?? "Service"} | ARN`},
    {property:"og:description",content:loaderData?.short ?? "Digital marketing and IT services in Dubai."},
    {property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"},
  ]}),
  component: ServiceDetail,
});

function ServiceDetail(){const service=Route.useLoaderData(); const Icon=service.icon; return <main>
  <section className="detail-hero"><div className="site-container relative z-10 py-20 md:py-28"><span className="eyebrow-light">{service.group}</span><h1 className="mt-5 max-w-4xl text-4xl font-semibold text-primary-foreground md:text-6xl">{service.title}</h1><p className="mt-5 max-w-2xl text-lg leading-8 text-hero-muted">{service.short} Built by an experienced Dubai team that keeps business outcomes at the center of every decision.</p></div></section>
  <section className="site-container grid gap-12 py-20 lg:grid-cols-[1.4fr_.8fr]"><div><Icon className="size-14 text-primary"/><h2 className="section-title mt-6">A practical path to better digital performance</h2><p className="body-copy mt-5">ARN Innovation Technology combines strategic thinking, careful execution, and transparent communication. Every engagement starts with your goals and ends with a solution your team can confidently use and grow.</p><div className="mt-8 grid gap-4 sm:grid-cols-2">{["Tailored to your business goals","Delivered by experienced specialists","Clear timelines and reporting","Built for secure, lasting growth"].map(x=><div className="flex gap-3 font-medium" key={x}><CheckCircle2 className="shrink-0 text-primary"/>{x}</div>)}</div></div><aside className="bg-primary p-8 text-primary-foreground"><h3 className="text-2xl font-semibold">Start your project</h3><p className="mt-3 text-hero-muted">Tell us what you need. We’ll recommend a clear, focused next step.</p><Button asChild variant="secondary" className="mt-7 rounded-none"><Link to="/contact">Request a free quote <ArrowRight/></Link></Button></aside></section>
  <section className="bg-muted py-20"><div className="site-container"><h2 className="section-title text-center">How we deliver</h2><div className="mt-10 grid gap-5 md:grid-cols-4">{["Discover","Plan","Execute","Improve"].map((x,i)=><div className="border-t-4 border-primary bg-background p-6 shadow-sm" key={x}><span className="text-sm font-semibold text-primary">0{i+1}</span><h3 className="mt-3 text-xl font-semibold">{x}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">A focused stage with clear communication, ownership, and measurable output.</p></div>)}</div></div></section>
 </main>}