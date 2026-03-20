export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-spectrum-gray-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="bg-gradient-to-br from-spectrum-navy to-spectrum-teal rounded-3xl p-10 text-white">
              <h3 className="text-2xl font-bold mb-6">
                A Scalable, Feature-Rich Solution
              </h3>
              <p className="text-white/80 leading-relaxed mb-8">
                Spectrum is a scalable, feature-rich financial management
                solution built specifically for local governments. Designed for
                long-term partnership, it evolves with your needs through ongoing
                upgrades and reliable support, ensuring you always have access to
                the latest innovations and assistance when you need it.
              </p>
              <div className="space-y-4">
                {[
                  "Modular architecture — implement at your own pace",
                  "Integrates across departments for a cohesive system",
                  "Reduces disruption during adoption",
                  "Evolves with your growing needs",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-spectrum-accent flex-shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75"
                      />
                    </svg>
                    <span className="text-white/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <span className="text-spectrum-green font-semibold text-sm uppercase tracking-wider">
              About Harris Computer
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-spectrum-navy">
              Powered by a Global Leader in Public Sector Software
            </h2>
            <p className="mt-6 text-lg text-spectrum-gray leading-relaxed">
              As part of Harris Computer, a division of Constellation Software,
              Spectrum benefits from the experience and resources of a global
              software leader. Harris has focused on developing financial
              management software solutions solely for the public sector since
              1976.
            </p>
            <p className="mt-4 text-lg text-spectrum-gray leading-relaxed">
              With over 5,500 entities relying on Harris software solutions, we
              provide reliable, cost-effective services backed by local support
              teams who understand your unique challenges. Our software is built
              with the specific needs of local governments in mind, providing
              user-friendly interfaces and robust functionalities that ensure
              efficient operations.
            </p>

            <div className="mt-8 flex flex-wrap gap-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-spectrum-green-light rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-spectrum-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                  </svg>
                </div>
                <div>
                  <div className="font-bold text-spectrum-navy">100+ Countries</div>
                  <div className="text-sm text-spectrum-gray">Global Presence</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-spectrum-green-light rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-spectrum-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
                  </svg>
                </div>
                <div>
                  <div className="font-bold text-spectrum-navy">Constellation Software</div>
                  <div className="text-sm text-spectrum-gray">Parent Company</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
