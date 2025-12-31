import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "./ui/button";
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
    <div className="grid md:grid-cols-2 gap-6 md:gap-12 w-full">
      {/* Contact Information */}
      <div className="w-full overflow-hidden">
        <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-6">
          Get in Touch
        </h2>
        <p className="text-slate-600 mb-10 text-lg leading-relaxed">
          Have questions about our properties? Our team is here to help you find
          your perfect home in the Beacon Hill area.
        </p>
        <div className="space-y-5">
          <div className="flex items-center gap-4 p-3 md:p-5 bg-white rounded-2xl border border-slate-100 hover:border-slate-200 transition-all w-full">
            <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center shadow-lg shadow-amber-500/30 flex-shrink-0">
              <Phone className="w-5 h-5 text-white" />
            </div>
            <div className="min-w-0 flex-1">
              <h4 className="font-semibold text-slate-900 mb-1">Phone</h4>
              <p className="text-slate-600 text-sm md:text-base">
                (857) 832-8480
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-3 md:p-5 bg-white rounded-2xl border border-slate-100 hover:border-slate-200 transition-all w-full">
            <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center shadow-lg shadow-amber-500/30 flex-shrink-0">
              <Mail className="w-5 h-5 text-white" />
            </div>
            <div className="min-w-0 flex-1">
              <h4 className="font-semibold text-slate-900 mb-1">Email</h4>
              <p className="text-slate-600 break-words text-sm md:text-base">
                mick@beaconhillpropertymanagement.com
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-3 md:p-5 bg-white rounded-2xl border border-slate-100 hover:border-slate-200 transition-all w-full">
            <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center shadow-lg shadow-amber-500/30 flex-shrink-0">
              <MapPin className="w-5 h-5 text-white" />
            </div>
            <div className="min-w-0 flex-1">
              <h4 className="font-semibold text-slate-900 mb-1">Office</h4>
              <p className="text-slate-600 text-sm md:text-base">
                100 Cambridge St Floor 14,
                <br />
                Boston, MA 02116
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Contact Form */}
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
    </div>
  );
}
