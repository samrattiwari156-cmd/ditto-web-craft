import { Link } from "@tanstack/react-router";
import { ArrowRight, ChevronDown, Facebook, Instagram, Linkedin, Mail, MapPin, Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/site-data";
import headerLogo from "@/assets/arn-header-logo.webp.asset.json";
import footerLogo from "@/assets/arn-footer-logo.webp.asset.json";

const nav = [["Home", "/"], ["About", "/about"], ["Blogs", "/blogs"], ["Portfolio", "/portfolio"], ["Contact", "/contact"]] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const groups = ["IT Solutions", "Digital Marketing"] as const;
  return <>
    <div className="hidden border-b border-border bg-background lg:block">
      <div className="site-container flex h-14 items-center gap-8 text-sm text-muted-foreground">
        <a href="tel:+971048341191" className="inline-flex items-center gap-2"><Phone className="text-primary" /> +971 04 834 1191</a>
        <span className="h-6 w-px bg-border" />
        <span className="inline-flex items-center gap-2"><MapPin className="text-primary" />2908, Silver Tower, Business Bay Dubai, UAE</span>
        <span className="h-6 w-px bg-border" />
        <a href="mailto:hello@arnit.ae" className="inline-flex items-center gap-2"><Mail className="text-primary" />hello@arnit.ae</a>
        <div className="ml-auto flex items-center gap-4 text-muted-foreground"><Facebook /><Instagram /><X /><Linkedin /></div>
      </div>
    </div>
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <div className="site-container grid h-20 grid-cols-[minmax(0,1fr)_auto] items-center gap-4 lg:flex lg:h-24">
        <Link to="/" className="min-w-0"><img src={headerLogo.url} alt="ARN Innovations Technology" className="h-14 w-auto object-contain" /></Link>
        <nav className="mx-auto hidden items-center gap-8 lg:flex">
          {nav.slice(0,2).map(([label,to]) => <Link key={to} to={to} className="nav-link" activeProps={{ className: "text-primary" }}>{label}</Link>)}
          <div className="group relative py-8">
            <Link to="/services" className="nav-link inline-flex items-center gap-1">Services <ChevronDown className="size-4" /></Link>
            <div className="invisible absolute left-1/2 top-[85px] w-[700px] -translate-x-1/2 border-t-2 border-primary bg-background p-6 opacity-0 shadow-2xl transition-all group-hover:visible group-hover:opacity-100">
              <div className="grid grid-cols-2 gap-10">{groups.map(group => <div key={group}><h3 className="bg-primary px-4 py-3 text-base font-semibold text-primary-foreground">{group}</h3><div className="mt-4">{services.filter(s=>s.group===group && !["managed-it-services","advertising-ppc-solutions"].includes(s.slug)).map(s=><Link key={s.slug} to="/services/$slug" params={{slug:s.slug}} className="block border-b border-border py-2 text-sm font-medium hover:text-primary">{s.title}</Link>)}</div></div>)}</div>
            </div>
          </div>
          {nav.slice(2).map(([label,to]) => <Link key={to} to={to} className="nav-link" activeProps={{ className: "text-primary" }}>{label}</Link>)}
        </nav>
        <Button asChild size="lg" className="hidden h-14 rounded-none px-7 font-semibold lg:inline-flex"><Link to="/contact">Get A Quote Now <ArrowRight /></Link></Button>
        <Button variant="ghost" size="icon" aria-label="Open menu" className="lg:hidden" onClick={()=>setOpen(!open)}>{open ? <X /> : <Menu />}</Button>
      </div>
      {open && <div className="border-t border-border bg-background px-5 pb-5 lg:hidden">
        {nav.slice(0,2).map(([label,to])=><Link key={to} to={to} onClick={()=>setOpen(false)} className="block border-b border-border py-3 font-semibold">{label}</Link>)}
        <button className="flex w-full items-center justify-between border-b border-border py-3 font-semibold" onClick={()=>setServicesOpen(!servicesOpen)}>Services <ChevronDown /></button>
        {servicesOpen && <div className="max-h-64 overflow-y-auto bg-muted px-4">{services.map(s=><Link key={s.slug} to="/services/$slug" params={{slug:s.slug}} onClick={()=>setOpen(false)} className="block py-2 text-sm">{s.title}</Link>)}</div>}
        {nav.slice(2).map(([label,to])=><Link key={to} to={to} onClick={()=>setOpen(false)} className="block border-b border-border py-3 font-semibold">{label}</Link>)}
      </div>}
    </header>
  </>;
}

export function SiteFooter() {
  return <footer className="bg-footer text-primary-foreground"><div className="site-container grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
    <div><img src={footerLogo.url} alt="ARN Innovations Technology" className="h-14 w-auto brightness-0 invert" /><p className="mt-4 max-w-xs text-sm leading-6 text-footer-muted">We work with a passion for taking challenges and creating new ones in Digital Marketing and IT Sector.</p></div>
    <div><h3 className="footer-title">Quick Links</h3>{nav.map(([l,to])=><Link key={to} to={to} className="footer-link">{l}</Link>)}</div>
    <div><h3 className="footer-title">Official info:</h3><p className="footer-line"><MapPin />2908, Silver Tower, Business Bay Dubai, UAE</p><a className="footer-line" href="tel:+971048341191"><Phone />+971 04 834 1191</a><a className="footer-line" href="mailto:hello@arnit.ae"><Mail />hello@arnit.ae</a></div>
    <div><h3 className="footer-title">Business Bay, Dubai</h3><div className="grid h-40 place-items-center bg-map text-center text-sm text-foreground"><MapPin className="size-8 text-destructive" />2908, Silver Tower<br/>Dubai, UAE</div></div>
  </div><div className="border-t border-footer-border py-5 text-center text-xs text-footer-muted">© 2026 ARN Innovation Technology. All Rights Reserved.</div></footer>;
}

export function WhatsAppButton(){return <a className="fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-whatsapp p-4 text-whatsapp-foreground shadow-xl" href="https://wa.me/971552161978" target="_blank" rel="noreferrer" aria-label="Chat with us on WhatsApp"><Phone /></a>}