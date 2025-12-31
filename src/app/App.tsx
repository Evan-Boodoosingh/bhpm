import { useEffect } from "react";
import { Toaster } from "./components/ui/sonner";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { PropertyCard } from "./components/PropertyCard";
import { ContactForm } from "./components/ContactForm";
import { Footer } from "./components/Footer";
import { Services } from "./components/Services";
import { Contact } from "./components/Contact";
import { About } from "./components/About";
import { Building2, Shield, Star, Users } from "lucide-react";

const properties = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1755875341359-4b8ad4b1689b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCb3N0b24lMjBicm93bnN0b25lJTIwZXh0ZXJpb3J8ZW58MXx8fHwxNzY2NTE3NDA5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Historic Brownstone",
    location: "Back Bay, Boston",
    price: "$4,500/mo",
    beds: 3,
    baths: 2,
    sqft: "1,850",
    type: "For Rent" as const,
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1515263487990-61b07816b324?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcGFydG1lbnQlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjY0NDU5MTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Modern High-Rise",
    location: "Seaport District",
    price: "$875,000",
    beds: 2,
    baths: 2,
    sqft: "1,450",
    type: "For Sale" as const,
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1638454668466-e8dbd5462f20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjb25kbyUyMGludGVyaW9yfGVufDF8fHx8MTc2NjQ5MzgzNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Luxury Penthouse",
    location: "Financial District",
    price: "$1.2M",
    beds: 3,
    baths: 3,
    sqft: "2,200",
    type: "For Sale" as const,
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1760518982502-a4f8064bea1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaXN0b3JpYyUyMGJyaWNrJTIwdG93bmhvdXNlfGVufDF8fHx8MTc2NjUxNzQxMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Brick Townhouse",
    location: "Beacon Hill",
    price: "$3,800/mo",
    beds: 2,
    baths: 1,
    sqft: "1,200",
    type: "For Rent" as const,
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1686325504321-736f32991021?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBsb2Z0JTIwYXBhcnRtZW50fGVufDF8fHx8MTc2NjUxNzQxMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Contemporary Loft",
    location: "South End",
    price: "$5,200/mo",
    beds: 2,
    baths: 2,
    sqft: "1,600",
    type: "For Rent" as const,
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1515263487990-61b07816b324?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcGFydG1lbnQlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjY0NDU5MTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Waterfront Condo",
    location: "Cambridge",
    price: "$950,000",
    beds: 3,
    baths: 2,
    sqft: "1,750",
    type: "For Sale" as const,
  },
];

const services = [
  {
    icon: Building2,
    title: "Property Management",
    description:
      "Comprehensive management services for residential and commercial properties throughout Greater Boston.",
  },
  {
    icon: Shield,
    title: "Tenant Screening",
    description:
      "Thorough background checks and verification to ensure reliable, quality tenants for your property.",
  },
  {
    icon: Star,
    title: "Maintenance",
    description:
      "24/7 maintenance support with a network of trusted contractors to keep properties in pristine condition.",
  },
  {
    icon: Users,
    title: "Dedicated Support",
    description:
      "Personal account managers available to assist with any questions or concerns you may have.",
  },
];

export default function App() {
  const scrollToProperties = () => {
    const element = document.getElementById("properties");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            entry.target.classList.remove("opacity-0");
          } else {
            // Reset animation when element leaves viewport
            entry.target.classList.remove("animate-fade-in");
            entry.target.classList.add("opacity-0");
          }
        });
      },
      {
        threshold: 0.05,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    // Observe all elements with the scroll-animate class
    const elements = document.querySelectorAll(".scroll-animate");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />

      {/* Hero Section */}
      <Hero onExploreClick={scrollToProperties} />

      <About />
      <Services />

      {/* Properties Section */}
      {/* <section id="properties" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-1.5 bg-amber-50 rounded-full border border-amber-100">
              <span className="text-sm text-amber-600 font-medium">Available Now</span>
            </div>
            <h2 className="text-5xl font-semibold text-slate-900 mb-4">
              Featured Properties
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Browse our selection of premium properties available for rent and purchase 
              throughout Greater Boston
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property) => (
              <PropertyCard key={property.id} {...property} />
            ))}
          </div>
        </div>
      </section> */}

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />

      {/* Toast Notifications */}
      <Toaster position="top-center" />
    </div>
  );
}
