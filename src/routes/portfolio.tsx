import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import natcoShot from "@/assets/work-natco.jpg";
import namShot from "@/assets/work-nam.jpg";
import bagtasShot from "@/assets/work-bagtas.jpg";
import yallaShot from "@/assets/work-yalla.jpg";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio | Web Design & Development Work by ARN Dubai" },
      { name: "description", content: "See websites and digital projects ARN Innovation Technology delivered for businesses across Dubai and the UAE." },
      { property: "og:title", content: "Showcase of Excellence | ARN Portfolio" },
      { property: "og:description", content: "Selected web design, development and marketing work from ARN Dubai." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PortfolioPage,
});

const projects = [
  { name: "Natco Contracting", image: natcoShot, url: "https://natco.ae", text: "ARN designed a modern, well-structured website that clearly presents NATCO's services, expertise, and projects while ensuring smooth user experience and brand clarity." },
  { name: "NAM Technical Services", image: namShot, url: "https://arnit.ae", text: "ARN developed a professional services website highlighting technical expertise, service clarity, and strong visual structure to help NAM attract residential and commercial clients across the UAE." },
  { name: "Bagtas Travel & Tours", image: bagtasShot, url: "https://arnit.ae", text: "ARN designed a user-friendly travel website showcasing packages, bookings, and services with smooth navigation, clear content flow, and a conversion-focused layout for better customer engagement." },
  { name: "Yalla Battery", image: yallaShot, url: "https://yallabattery.com", text: "ARN created a high-converting landing page focused on 24/7 car battery replacement, fast response, and location-based service to help Yalla Battery generate instant calls and WhatsApp leads across Dubai and Sharjah." },
];

function PortfolioPage() {
  return (
    <main className="py-16">
      <div className="site-container">
        <div className="text-center">
          <span className="eyebrow">Portfolio</span>
          <h1 className="section-title mt-5">Showcase of Excellence</h1>
        </div>
        <div className="mt-14 space-y-8">
          {projects.map((project, i) => (
            <article key={project.name} className="grid items-center gap-8 border border-border p-6 md:p-10 lg:grid-cols-2">
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <h2 className="text-3xl font-bold text-primary">{project.name}</h2>
                <p className="body-copy mt-4">{project.text}</p>
                <Button asChild variant="quote" className="mt-6 rounded-none border border-border">
                  <a href={project.url} target="_blank" rel="noreferrer">Visit Website</a>
                </Button>
              </div>
              <img
                src={project.image}
                alt={`${project.name} website designed by ARN`}
                loading="lazy"
                width={1200}
                height={760}
                className={`w-full object-cover ${i % 2 === 1 ? "lg:order-1" : ""}`}
              />
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
