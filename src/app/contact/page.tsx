import Link from 'next/link'
import { Phone, Mail, User, Clock, ChevronRight, MessageSquare } from 'lucide-react'

export default function ContactPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0e3d26] to-[#1a7a4b] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
              Contact Us
            </h1>
            <p className="text-xl text-green-200 leading-relaxed max-w-2xl">
              Ready to modernize your local government operations? Our team is here to help you get started with Spectrum.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div>
                <h2 className="text-2xl font-black text-[#1a7a4b] mb-8">Get in Touch</h2>

                <div className="space-y-6 mb-10">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-[#e8f5ee] rounded-xl flex items-center justify-center flex-shrink-0">
                      <User className="w-6 h-6 text-[#22a366]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Alison Haenlin</h3>
                      <p className="text-gray-600">Strategic Account Manager</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-[#e8f5ee] rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-[#22a366]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Phone</h3>
                      <p className="text-gray-600">716-402-2812</p>
                      <p className="text-sm text-gray-500">Monday - Friday, 8:00 AM - 5:00 PM EST</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-[#e8f5ee] rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-[#22a366]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Email</h3>
                      <p className="text-gray-600">AHaenlin@harriscomputer.com</p>
                      <p className="text-sm text-gray-500">We respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-[#e8f5ee] rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-[#22a366]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Business Hours</h3>
                      <p className="text-gray-600">Monday - Friday: 8:00 AM - 5:00 PM EST</p>
                      <p className="text-gray-600">Saturday - Sunday: Closed</p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#e8f5ee] rounded-2xl p-6 border border-[#22a366]/20">
                  <div className="flex items-center gap-3 mb-3">
                    <MessageSquare className="w-6 h-6 text-[#22a366]" />
                    <h3 className="font-bold text-gray-900">Existing Customer?</h3>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">
                    For technical support, please contact our support team directly or reach out to your account manager.
                  </p>
                  <Link href="mailto:AHaenlin@harriscomputer.com" className="text-[#1a7a4b] font-semibold text-sm hover:text-[#22a366] transition-colors inline-flex items-center">
                    Email Support <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>

              {/* Demo Request Form */}
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <h2 className="text-2xl font-black text-[#1a7a4b] mb-2">Request a Demo</h2>
                <p className="text-gray-500 text-sm mb-8">Fill out the form below and a member of our team will be in touch shortly.</p>

                <form className="space-y-5">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">First Name</label>
                      <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#22a366] focus:ring-2 focus:ring-[#22a366]/20 outline-none transition-all text-sm" placeholder="Jane" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">Last Name</label>
                      <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#22a366] focus:ring-2 focus:ring-[#22a366]/20 outline-none transition-all text-sm" placeholder="Smith" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email</label>
                    <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#22a366] focus:ring-2 focus:ring-[#22a366]/20 outline-none transition-all text-sm" placeholder="jane@townhall.gov" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Municipality / Organization</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#22a366] focus:ring-2 focus:ring-[#22a366]/20 outline-none transition-all text-sm" placeholder="Town of Example" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Role / Title</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#22a366] focus:ring-2 focus:ring-[#22a366]/20 outline-none transition-all text-sm" placeholder="Finance Director" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Modules of Interest</label>
                    <select className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#22a366] focus:ring-2 focus:ring-[#22a366]/20 outline-none transition-all text-sm text-gray-700">
                      <option>Select a module...</option>
                      <option>Financial Management</option>
                      <option>Procurement &amp; Spending Control</option>
                      <option>Human Resources &amp; Payroll</option>
                      <option>Revenue &amp; Taxation</option>
                      <option>Asset &amp; Infrastructure Management</option>
                      <option>Full Suite</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Message</label>
                    <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#22a366] focus:ring-2 focus:ring-[#22a366]/20 outline-none transition-all text-sm resize-none" placeholder="Tell us about your organization and what you're looking for..." />
                  </div>
                  <button type="submit" className="w-full bg-gradient-to-r from-[#1a7a4b] to-[#22a366] text-white py-3.5 rounded-lg font-bold hover:shadow-lg hover:shadow-[#1a7a4b]/25 transition-all">
                    Submit Request
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
