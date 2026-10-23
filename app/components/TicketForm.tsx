import { useState } from "react";
import { toast } from "../hooks/use-toast";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

const passes = [
  { id: "day", name: "Day Pass", price: 20 },
  { id: "weekend", name: "Weekend Pass", price: 45 },
  { id: "vip", name: "VIP Paddock", price: 120 },
] as const;

export function TicketForm() {
  const [pass, setPass] = useState<string>("day");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [qty, setQty] = useState(1);
  const selected = passes.find((p) => p.id === pass)!;

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !/^\S+@\S+\.\S+$/.test(email)) {
      toast({ title: "Check your details", description: "Enter a valid name and email.", variant: "destructive" });
      return;
    }
    console.log("Ticket order", { pass, name, email, qty });
    toast({ title: "Order confirmed", description: `${qty} x ${selected.name} for ${name}. Total $${qty * selected.price}.` });
    setName("");
    setEmail("");
    setQty(1);
  };

  return (
    <form onSubmit={submit} className="space-y-6 rounded-xl border border-border/50 bg-card p-6">
      <div className="grid gap-3 sm:grid-cols-3">
        {passes.map((p) => (
          <button
            key={p.id}
            type="button"
            onClick={() => setPass(p.id)}
            className={`rounded-lg border p-4 text-left transition-colors ${pass === p.id ? "border-primary bg-primary/10" : "border-border hover:border-primary/50"}`}
          >
            <p className="font-semibold">{p.name}</p>
            <p className="font-[Oswald] text-2xl font-bold text-primary">${p.price}</p>
          </button>
        ))}
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Full name</Label>
          <Input id="name" value={name} maxLength={80} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" value={email} maxLength={120} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="qty">Tickets</Label>
          <Input id="qty" type="number" min={1} max={10} value={qty} onChange={(e) => setQty(Math.min(10, Math.max(1, Number(e.target.value) || 1)))} />
        </div>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-lg">Total: <span className="font-bold text-primary">${qty * selected.price}</span></p>
        <Button type="submit" size="lg">Book now</Button>
      </div>
    </form>
  );
}