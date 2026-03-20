export default function Hero() {
  return (
    <section className="relative pt-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-spectrum-navy via-spectrum-navy-light to-spectrum-teal" />
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6">
            <div className="w-2 h-2 bg-spectrum-accent rounded-full animate-pulse" />
            <span className="text-white/90 text-sm font-medium">
              Trusted by 5,500+ government entities
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            The ERP Platform Built for{" "}
            <span className="text-spectrum-accent">Local Government</span>
          </h1>

          <p className="text-lg sm:text-xl text-white/80 mb-10 max-w-2xl leading-relaxed">
            Spectrum is a comprehensive, scalable financial management solution
            designed specifically for municipalities, counties, and utility
            districts. Streamline your financial, operational, and human resource
            processes with software that understands your unique challenges.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-spectrum-green text-white px-8 py-3.5 rounded-lg font-semibold text-lg hover:bg-spectrum-green-dark transition-colors shadow-lg shadow-spectrum-green/25"
            >
              Schedule a Demo
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center bg-white/10 backdrop-blur-sm text-white px-8 py-3.5 rounded-lg font-semibold text-lg hover:bg-white/20 transition-colors border border-white/20"
            >
              Explore Features
            </a>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-8 border-t border-white/10 pt-10">
          {[
            { value: "40+", label: "Years of Experience" },
            { value: "5,500+", label: "Government Clients" },
            { value: "350+", label: "Installations" },
            { value: "24/7", label: "Dedicated Support" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-white mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-white/60">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
