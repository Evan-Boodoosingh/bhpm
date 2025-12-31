import { useEffect } from "react";
import { Toaster } from "./components/ui/sonner";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { PropertyCard } from "./components/PropertyCard";
import { ContactForm } from "./components/ContactForm";
import { Footer } from "./components/Footer";
import {
  Building2,
  Shield,
  Star,
  Users,
  Home,
  Building,
  HardHat,
} from "lucide-react";

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

      {/* About Section */}
      <section
        id="about"
        className="min-h-screen flex items-center py-16 bg-white"
      >
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 w-full">
          <div className="max-w-5xl mx-auto text-center opacity-0 scroll-animate">
            <div className="inline-block mb-10 px-5 py-2 bg-amber-50 rounded-full border border-amber-100">
              <span className="text-base text-amber-600 font-medium">
                About Us
              </span>
            </div>
            <h2 className="text-6xl md:text-7xl font-semibold text-slate-900 mb-12">
              Your Trusted Property Management Partner
            </h2>
            <p className="text-xl md:text-2xl text-slate-600 mb-8 leading-relaxed">
              We are a small boutique business specializing in providing our
              clients customized solutions. Since 2004, BHPM has excelled at
              delivering a comprehensive range of property maintenance,
              renovation, and management services for both residential and
              commercial spaces. From routine repairs and major renovations to
              meticulous property management; we handle every aspect of property
              care with exceptional quality and efficiency. You can trust that
              you’re in expert hands with us, as we only consider our job
              complete when you are fully satisfied.
            </p>
            {/* <p className="text-lg text-slate-600 leading-relaxed">
              From historic brownstones in Back Bay to modern condos in the Seaport, 
              we manage a diverse portfolio of premium properties throughout the region.
            </p> */}
          </div>
        </div>
      </section>

      {/* Residential & Commercial Section */}
      <section
        id="services"
        className="min-h-screen flex items-center py-4 pb-8 bg-slate-50"
      >
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 w-full pt-15">
          <div className="text-center mb-3 opacity-0 scroll-animate">
            <div className="inline-block mb-2 px-5 py-1.5 bg-amber-50 rounded-full border border-amber-100">
              <span className="text-sm text-amber-600 font-medium">
                Our Services
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-2">
              Residential, Commercial & Construction
            </h2>
            <p className="text-sm md:text-base text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive property management and construction services across
              all sectors
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 opacity-0 scroll-animate">
            {/* Residential */}
            <div className="group relative overflow-hidden rounded-3xl bg-white border border-slate-200/60 hover:shadow-2xl hover:shadow-slate-900/10 transition-all duration-500 flex flex-col">
              <div className="relative h-72 overflow-hidden flex-shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1741764014072-68953e93cd48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBhcGFydG1lbnQlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjcwNjkyNDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Residential Properties"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute top-4 left-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center shadow-xl shadow-amber-500/40">
                    <Home className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
              <div className="p-7 flex flex-col flex-1">
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-slate-900 mb-3">
                    Residential
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    We offer a complete range of residential services, from
                    kitchen renovations and appliance repairs to lawn care and
                    garden design. In addition we also offer a hand in looking
                    for that rental or investment property. We are your one-stop
                    solution for all your real estate needs. Contact us today to
                    schedule a consultation..
                  </p>
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-amber-600" />
                    </div>
                    <span className="text-slate-700">
                      Single-family homes & condos
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-amber-600" />
                    </div>
                    <span className="text-slate-700">
                      Multi-unit apartment buildings
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-amber-600" />
                    </div>
                    <span className="text-slate-700">
                      Luxury penthouses & estates
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Commercial */}
            <div className="group relative overflow-hidden rounded-3xl bg-white border border-slate-200/60 hover:shadow-2xl hover:shadow-slate-900/10 transition-all duration-500 flex flex-col">
              <div className="relative h-72 overflow-hidden flex-shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1694702740570-0a31ee1525c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjcwOTI2OTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Commercial Properties"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute top-4 left-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center shadow-xl shadow-amber-500/40">
                    <Building className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
              <div className="p-7 flex flex-col flex-1">
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-slate-900 mb-3">
                    Commercial
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    Becon Hill Property Management specializes in comprehensive
                    solutions for commercial spaces, offering expert appliance
                    and general repairs, innovative renovations, and efficient
                    property management. By integrating these services, we
                    ensure that commercial properties are not only
                    well-maintained and updated but also managed with
                    exceptional attention to detail, enhancing both
                    functionality and value.
                  </p>
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-amber-600" />
                    </div>
                    <span className="text-slate-700">
                      Office buildings & business parks
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-amber-600" />
                    </div>
                    <span className="text-slate-700">
                      Retail & restaurant spaces
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-amber-600" />
                    </div>
                    <span className="text-slate-700">
                      Mixed-use developments
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Construction */}
            <div className="group relative overflow-hidden rounded-3xl bg-white border border-slate-200/60 hover:shadow-2xl hover:shadow-slate-900/10 transition-all duration-500 flex flex-col">
              <div className="relative h-72 overflow-hidden flex-shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1647025980693-04e6b24a6d78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjb25zdHJ1Y3Rpb24lMjBidWlsZGluZ3xlbnwxfHx8fDE3NjcxNDQ3NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Construction Services"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute top-4 left-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center shadow-xl shadow-amber-500/40">
                    <HardHat className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
              <div className="p-7 flex flex-col flex-1">
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-slate-900 mb-3">
                    Construction
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    Full-service construction and renovation solutions, from new
                    builds to complete property transformations, delivered with
                    precision and quality craftsmanship.
                  </p>
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-amber-600" />
                    </div>
                    <span className="text-slate-700">
                      New construction & ground-up builds
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-amber-600" />
                    </div>
                    <span className="text-slate-700">
                      Property renovations & upgrades
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-amber-600" />
                    </div>
                    <span className="text-slate-700">
                      Historic restoration projects
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

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
      <section
        id="contact"
        className="min-h-screen flex items-center py-16 bg-slate-50"
      >
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 w-full opacity-0 scroll-animate">
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Toast Notifications */}
      <Toaster position="top-center" />
    </div>
  );
}
