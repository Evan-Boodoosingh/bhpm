import { useState } from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { toast } from "sonner";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! We'll be in touch soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="bg-white rounded-3xl p-4 md:p-8 border border-slate-200/60 shadow-xl shadow-slate-200/50 w-full overflow-hidden">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Label htmlFor="name" className="text-slate-700 block mb-2">
            Name
          </Label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your full name"
            required
            className="rounded-xl border-slate-200 focus:border-amber-500 focus:ring-amber-500/20 w-full"
          />
        </div>

        <div>
          <Label htmlFor="email" className="text-slate-700 block mb-2">
            Email
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your.email@example.com"
            required
            className="rounded-xl border-slate-200 focus:border-amber-500 focus:ring-amber-500/20 w-full"
          />
        </div>

        <div>
          <Label htmlFor="phone" className="text-slate-700 block mb-2">
            Phone
          </Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="(987) 654-3210"
            className="rounded-xl border-slate-200 focus:border-amber-500 focus:ring-amber-500/20 w-full"
          />
        </div>

        <div>
          <Label htmlFor="message" className="text-slate-700 block mb-2">
            Message
          </Label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your property needs..."
            required
            rows={2}
            className="resize-none overflow-y-auto rounded-xl border-slate-200 focus:border-amber-500 focus:ring-amber-500/20 max-h-[3rem] w-full"
          />
        </div>

        <button
          type="submit"
          style={{
            background:
              "linear-gradient(to bottom right, rgb(245 158 11), rgb(217 119 6))",
          }}
          className="w-full hover:brightness-110 text-white rounded-xl shadow-lg shadow-amber-500/30 border-0 py-6 font-medium transition-all inline-flex items-center justify-center"
          onMouseEnter={(e) => {
            e.currentTarget.style.background =
              "linear-gradient(to bottom right, rgb(217 119 6), rgb(180 83 9))";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background =
              "linear-gradient(to bottom right, rgb(245 158 11), rgb(217 119 6))";
          }}
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
