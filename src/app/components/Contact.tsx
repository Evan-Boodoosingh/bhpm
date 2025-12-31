import { ContactForm } from "./ContactForm";
import { Mail, Phone, MapPin } from "lucide-react";

export function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center py-16 bg-slate-50"
    >
      <div className="max-w-7xl mx-auto px-2.5 sm:px-6 lg:px-8 w-full opacity-0 scroll-animate">
        {/* Mobile: Title at top, hidden on desktop */}
        <div className="mb-8 md:hidden">
          <h2 className="text-3xl font-semibold text-slate-900 mb-6">
            Get in Touch
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            Have questions about our properties? Our team is here to help you
            find your perfect home in the Beacon Hill area.
          </p>
        </div>

        {/* Desktop: 2-column grid, Mobile: stacked */}
        <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-12 w-full">
          {/* Left column - Contact Information (order-3 on mobile, order-1 on desktop) */}
          <div className="w-full overflow-hidden order-3 md:order-1">
            {/* Desktop: Title and description here */}
            <div className="hidden md:block mb-10">
              <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-6">
                Get in Touch
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                Have questions about our properties? Our team is here to help
                you find your perfect home in the Beacon Hill area.
              </p>
            </div>

            {/* Contact Information Bubbles */}
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

          {/* Right column - Contact Form (order-2 on mobile and desktop) */}
          <div className="order-2">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
