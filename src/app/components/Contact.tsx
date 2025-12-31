import { ContactForm } from "./ContactForm";

export function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center py-16 bg-slate-50"
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 w-full opacity-0 scroll-animate">
        <ContactForm />
      </div>
    </section>
  );
}
