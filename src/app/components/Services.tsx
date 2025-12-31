import { Home, Building, HardHat } from "lucide-react";

export function Services() {
  return (
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
                  garden design. In addition we also offer a hand in looking for
                  that rental or investment property. We are your one-stop
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
                  solutions for commercial spaces, offering expert appliance and
                  general repairs, innovative renovations, and efficient
                  property management. By integrating these services, we ensure
                  that commercial properties are not only well-maintained and
                  updated but also managed with exceptional attention to detail,
                  enhancing both functionality and value.
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
                  <span className="text-slate-700">Mixed-use developments</span>
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
  );
}
