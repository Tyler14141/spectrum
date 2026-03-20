const features = [
  {
    title: "Financial Management",
    description:
      "Manage financial data and encumbrance accounting with powerful budgetary and planning tools. Accurate revenue and expenditure projections increase efficiency and accountability.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Procurement & Spending Control",
    description:
      "Streamline purchasing workflows, manage vendor relationships, and maintain complete spending visibility across all departments with integrated procurement tools.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15a2.25 2.25 0 012.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
      </svg>
    ),
  },
  {
    title: "Human Resources & Payroll",
    description:
      "Manage the full employee life cycle from recruitment to retirement. Handle benefits administration, time tracking, and payroll processing in one integrated system.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
  },
  {
    title: "Revenue & Taxation",
    description:
      "Automate property tax processes with integrated document management. Handle billing, collections, and comprehensive reporting for all revenue streams.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 0h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
      </svg>
    ),
  },
  {
    title: "Utility Billing",
    description:
      "Simplify water, sewer, and electric utility billing with powerful data reporting. Generate accurate bills, track consumption, and manage customer accounts effortlessly.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    title: "Asset & Infrastructure Management",
    description:
      "Track and manage physical assets, schedule maintenance, and plan capital improvements. Make data-driven decisions about your community's infrastructure investments.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1 3.04a1 1 0 01-1.45-1.05l.97-5.68a1 1 0 00-.29-.89L1.24 6.52a1 1 0 01.56-1.71l5.7-.83a1 1 0 00.75-.54L10.5 0a1 1 0 011.8 0l2.26 3.44a1 1 0 00.75.54l5.7.83a1 1 0 01.56 1.71l-4.31 4.07a1 1 0 00-.29.89l.97 5.68a1 1 0 01-1.45 1.05l-5.1-3.04a1 1 0 00-.94 0z" />
      </svg>
    ),
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-spectrum-green font-semibold text-sm uppercase tracking-wider">
            Comprehensive Suite
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-spectrum-navy">
            Everything Your Government Needs
          </h2>
          <p className="mt-4 text-lg text-spectrum-gray leading-relaxed">
            Spectrum&apos;s modular design lets you implement department by department,
            reducing disruption while building toward a fully integrated system.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group p-8 rounded-2xl border border-gray-100 hover:border-spectrum-green/20 hover:shadow-xl hover:shadow-spectrum-green/5 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-spectrum-green-light rounded-xl flex items-center justify-center text-spectrum-green mb-5 group-hover:bg-spectrum-green group-hover:text-white transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-spectrum-navy mb-3">
                {feature.title}
              </h3>
              <p className="text-spectrum-gray leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
