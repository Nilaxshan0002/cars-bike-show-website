import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { PageHeader } from "../components/PageHeader";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";
import { toast } from "../hooks/use-toast";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact - Apex Motor Show" },
      { name: "description", content: "Questions, vehicle registration or partnerships. Get in touch." },
      { property: "og:title", content: "Contact - Apex Motor Show" },
    ],
  }),
  component: Contact,
});

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(1000),
});

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      toast({ title: "Check your details", description: result.error.issues[0].message, variant: "destructive" });
      return;
    }
    // TODO: send the message by email once Resend is connected in Settings -> Integrations.
    console.log("Contact form submitted", result.data);
    toast({ title: "Message received", description: "Thanks, we will reply soon." });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <>
      <PageHeader title="Get in" highlight="touch" subtitle="Questions, vehicle registration or partnerships. We read every message." />
      <section className="mx-auto max-w-xl px-4 py-16 sm:px-6">
        <form onSubmit={onSubmit} className="space-y-5 rounded-xl border border-border/50 bg-card p-6">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
          </div>
          <Button type="submit" size="lg" className="w-full">Send message</Button>
        </form>
      </section>
    </>
  );
}