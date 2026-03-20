const reasons = [
  {
    title: "Experience",
    description:
      "Harris has provided software to governments for over 40 years. Since 1976, we've focused exclusively on the public sector, understanding the unique requirements of fund accounting, regulatory compliance, and citizen services.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
  },
  {
    title: "Customer Care",
    description:
      "One-on-one support with the personal touch of a small software company, backed by the resources of a big partner. We continuously monitor response times and gather feedback to improve our service.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
  {
    title: "Software for Life",
    description:
      "We support every product for as long as our clients rely on them. Your investment is protected with ongoing upgrades, reliable support, and access to the latest innovations.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
];

export default function WhyHarris() {
  return (
    <section id="why-harris" className="py-20 sm:py-28 bg-spectrum-gray-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-spectrum-green font-semibold text-sm uppercase tracking-wider">
              Why Choose Harris
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-spectrum-navy">
              Choice. Expertise.
              <br />
              Relationship.
            </h2>
            <p className="mt-6 text-lg text-spectrum-gray leading-relaxed">
              As part of Harris Computer, a division of Constellation Software,
              Spectrum benefits from the experience and resources of a global
              software leader. With over 5,500 entities relying on Harris
              software solutions, we provide reliable, cost-effective services
              backed by local support teams who understand your unique
              challenges.
            </p>

            <div className="mt-10 flex items-center gap-6">
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-spectrum-green">
                  30+
                </span>
                <span className="text-sm text-spectrum-gray">
                  Years Serving Government
                </span>
              </div>
              <div className="w-px h-12 bg-gray-200" />
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-spectrum-green">
                  125,000+
                </span>
                <span className="text-sm text-spectrum-gray">
                  Customers Worldwide
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {reasons.map((reason, index) => (
              <div
                key={reason.title}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex gap-5">
                  <div className="flex-shrink-0 w-14 h-14 bg-spectrum-green-light rounded-xl flex items-center justify-center text-spectrum-green">
                    {reason.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-spectrum-navy mb-2">
                      {reason.title}
                    </h3>
                    <p className="text-spectrum-gray leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
