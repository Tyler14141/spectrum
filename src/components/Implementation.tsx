const steps = [
  {
    step: "01",
    title: "Discovery & Planning",
    description:
      "Our team works alongside you to understand your needs and build a customized plan to maximize the value of Spectrum.",
  },
  {
    step: "02",
    title: "Configuration & Setup",
    description:
      "We configure Spectrum to match your workflows, migrate your data, and ensure seamless integration with existing systems.",
  },
  {
    step: "03",
    title: "Training & Deployment",
    description:
      "We manage every step from installation to deployment and staff training, ensuring your team is confident and productive from day one.",
  },
  {
    step: "04",
    title: "Ongoing Support",
    description:
      "Exceptional customer service is our priority. Whether you call, submit a form, or open a support ticket, our team responds quickly and effectively.",
  },
];

export default function Implementation() {
  return (
    <section id="implementation" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-spectrum-green font-semibold text-sm uppercase tracking-wider">
            Implementation & Service
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-spectrum-navy">
            Your Partner Every Step of the Way
          </h2>
          <p className="mt-4 text-lg text-spectrum-gray leading-relaxed">
            We understand there isn&apos;t a one-size-fits-all solution. That&apos;s why we
            bring a unique approach to every implementation, connecting each
            decision directly to your mission-critical goals.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, index) => (
            <div key={item.step} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-full w-full h-px border-t-2 border-dashed border-spectrum-green/20 -translate-x-4" />
              )}
              <div className="text-5xl font-black text-spectrum-green/10 mb-3">
                {item.step}
              </div>
              <h3 className="text-lg font-bold text-spectrum-navy mb-3">
                {item.title}
              </h3>
              <p className="text-spectrum-gray leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-gradient-to-r from-spectrum-navy to-spectrum-teal rounded-3xl p-10 sm:p-14">
          <div className="grid sm:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Great software means nothing without great service.
              </h3>
              <p className="text-white/70 leading-relaxed">
                We continuously monitor response times and gather customer
                feedback to improve our support. Your success is our measure of
                success.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { value: "< 4hr", label: "Response Time" },
                { value: "98%", label: "Satisfaction Rate" },
                { value: "100%", label: "Data Migration" },
                { value: "Live", label: "24/7 Monitoring" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-spectrum-accent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/60 mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
