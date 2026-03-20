"use client";

import { useState, type FormEvent } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <span className="text-spectrum-green font-semibold text-sm uppercase tracking-wider">
              Get in Touch
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-spectrum-navy">
              Ready to Transform Your Operations?
            </h2>
            <p className="mt-6 text-lg text-spectrum-gray leading-relaxed">
              Schedule a personalized demo to see how Spectrum can streamline
              your municipality&apos;s financial management, HR, utility billing, and
              more.
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-spectrum-green-light rounded-xl flex items-center justify-center text-spectrum-green">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-spectrum-navy">
                    Harris Local Government
                  </div>
                  <div className="text-spectrum-gray">
                    A Division of Harris Computer Corporation
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-spectrum-green-light rounded-xl flex items-center justify-center text-spectrum-green">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-spectrum-navy">Email</div>
                  <a
                    href="mailto:AHaenlin@harriscomputer.com"
                    className="text-spectrum-green hover:underline"
                  >
                    AHaenlin@harriscomputer.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-spectrum-green-light rounded-xl flex items-center justify-center text-spectrum-green">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-spectrum-navy">Phone</div>
                  <a
                    href="tel:716-402-2812"
                    className="text-spectrum-green hover:underline"
                  >
                    716-402-2812
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-spectrum-green-light rounded-xl flex items-center justify-center text-spectrum-green">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-spectrum-navy">
                    Alison Haenlin
                  </div>
                  <div className="text-spectrum-gray">
                    Strategic Account Manager
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-spectrum-gray-light rounded-3xl p-8 sm:p-10">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-10">
                <div className="w-16 h-16 bg-spectrum-green rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-spectrum-navy mb-3">
                  Thank You!
                </h3>
                <p className="text-spectrum-gray">
                  We&apos;ve received your request and will be in touch shortly to
                  schedule your personalized demo.
                </p>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-bold text-spectrum-navy mb-6">
                  Request a Demo
                </h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-spectrum-navy mb-1.5">
                        First Name
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-spectrum-green focus:ring-2 focus:ring-spectrum-green/20 outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-spectrum-navy mb-1.5">
                        Last Name
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-spectrum-green focus:ring-2 focus:ring-spectrum-green/20 outline-none transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-spectrum-navy mb-1.5">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-spectrum-green focus:ring-2 focus:ring-spectrum-green/20 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-spectrum-navy mb-1.5">
                      Organization
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-spectrum-green focus:ring-2 focus:ring-spectrum-green/20 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-spectrum-navy mb-1.5">
                      Role / Title
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-spectrum-green focus:ring-2 focus:ring-spectrum-green/20 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-spectrum-navy mb-1.5">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-spectrum-green focus:ring-2 focus:ring-spectrum-green/20 outline-none transition-all resize-none"
                      placeholder="Tell us about your organization's needs..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-spectrum-green text-white py-3.5 rounded-lg font-semibold text-lg hover:bg-spectrum-green-dark transition-colors shadow-lg shadow-spectrum-green/25"
                  >
                    Request Demo
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
