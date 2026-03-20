export default function Footer() {
  return (
    <footer className="bg-spectrum-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-spectrum-green rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-bold text-lg tracking-tight">
                  Spectrum
                </span>
                <span className="text-[10px] text-white/50 uppercase tracking-widest -mt-1">
                  Software Solutions
                </span>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed">
              A comprehensive ERP platform designed to help municipalities,
              counties, and utility districts streamline operations.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white/90">Solutions</h4>
            <ul className="space-y-2.5">
              {[
                "Financial Management",
                "Procurement",
                "HR & Payroll",
                "Revenue & Taxation",
                "Utility Billing",
                "Asset Management",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#features"
                    className="text-sm text-white/50 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white/90">Company</h4>
            <ul className="space-y-2.5">
              {[
                { label: "About Harris", href: "#about" },
                { label: "Why Harris", href: "#why-harris" },
                { label: "Implementation", href: "#implementation" },
                { label: "Contact", href: "#contact" },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm text-white/50 hover:text-white transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white/90">Contact</h4>
            <ul className="space-y-2.5 text-sm text-white/50">
              <li>Alison Haenlin</li>
              <li>Strategic Account Manager</li>
              <li>
                <a
                  href="mailto:AHaenlin@harriscomputer.com"
                  className="hover:text-white transition-colors"
                >
                  AHaenlin@harriscomputer.com
                </a>
              </li>
              <li>
                <a
                  href="tel:716-402-2812"
                  className="hover:text-white transition-colors"
                >
                  716-402-2812
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/40">
            &copy; {new Date().getFullYear()} Spectrum Software Solutions. A
            division of Harris Computer Corporation.
          </p>
          <div className="flex items-center gap-2">
            <span className="text-sm text-white/40">Powered by</span>
            <span className="text-sm font-semibold text-white/60">
              Harris Computer
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
