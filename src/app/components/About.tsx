export function About() {
  return (
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
            you're in expert hands with us, as we only consider our job complete
            when you are fully satisfied.
          </p>
          {/* <p className="text-lg text-slate-600 leading-relaxed">
            From historic brownstones in Back Bay to modern condos in the Seaport, 
            we manage a diverse portfolio of premium properties throughout the region.
          </p> */}
        </div>
      </div>
    </section>
  );
}
