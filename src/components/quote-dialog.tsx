import { useState, type ReactNode } from "react";
import { toast } from "sonner";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/site-data";

export function QuoteDialog({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-h-[90vh] overflow-y-auto rounded-none sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-center text-3xl font-bold md:text-4xl">Get Offer</DialogTitle>
        </DialogHeader>
        <form
          className="mt-4 space-y-5"
          onSubmit={(e) => {
            e.preventDefault();
            setOpen(false);
            toast.success("Thanks! Your request has been noted.");
          }}
        >
          <div>
            <label className="field-label" htmlFor="q-name">Name</label>
            <input id="q-name" required className="form-control" placeholder="Your Name" />
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className="field-label" htmlFor="q-phone">Phone</label>
              <input id="q-phone" className="form-control" placeholder="Phone Number" />
            </div>
            <div>
              <label className="field-label" htmlFor="q-email">Email</label>
              <input id="q-email" type="email" required className="form-control" placeholder="Your Email" />
            </div>
          </div>
          <div>
            <label className="field-label" htmlFor="q-service">Service</label>
            <select id="q-service" className="form-control" defaultValue={services[0].title}>
              {services.map((s) => (
                <option key={s.slug}>{s.title}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="field-label" htmlFor="q-details">Details</label>
            <textarea id="q-details" className="form-control min-h-28" placeholder="Type your message here..." />
          </div>
          <Button type="submit" className="h-12 rounded-none px-8 text-base">Send Message</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
