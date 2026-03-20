import Link from 'next/link'
import { ChevronRight, Building2, Landmark, Droplets, Cloud, Monitor, Shield, CheckCircle } from 'lucide-react'

export default function SolutionsPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0e3d26] to-[#1a7a4b] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
              Solutions for Every Local Government
            </h1>
            <p className="text-xl text-green-200 leading-relaxed max-w-2xl">
              From small towns to large counties, Spectrum scales to meet the specific needs of diverse municipal organizations and utility districts.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Types */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-16">
            {/* Municipalities */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center bg-[#e8f5ee] rounded-full px-4 py-2 mb-4">
                  <Landmark className="w-4 h-4 mr-2 text-[#E8913A]" />
                  <span className="text-sm font-semibold text-[#1a7a4b]">Towns & Cities</span>
                </div>
                <h2 className="text-3xl font-black text-[#1a7a4b] mb-4">For Municipalities</h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Spectrum was built from the ground up for local governments. Whether you&apos;re a small town or a large city, Spectrum scales to your needs with modular design and flexible configuration.
                </p>
                <ul className="space-y-3">
                  {['Financial Management & Fund Accounting', 'Procurement & Spending Controls', 'Human Resources & Payroll', 'Revenue & Tax Collection', 'Asset & Infrastructure Management'].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-[#22a366] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gradient-to-br from-[#1a7a4b] to-[#22a366] rounded-3xl p-10 text-white">
                <Building2 className="w-12 h-12 mb-4 text-[#22a366]" />
                <h3 className="text-2xl font-bold mb-3">5,500+ Government Clients</h3>
                <p className="text-green-100 leading-relaxed mb-6">
                  Municipalities, counties, and utility districts trust Harris software solutions to manage their operations every day.
                </p>
                <Link href="/contact" className="inline-flex items-center bg-white text-[#1a7a4b] px-6 py-3 rounded-lg font-bold hover:shadow-lg transition-all">
                  Learn More <ChevronRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>

            <hr className="border-gray-200" />

            {/* Counties & Utility Districts */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 bg-gradient-to-br from-[#0e3d26] to-[#1a7a4b] rounded-3xl p-10 text-white">
                <Droplets className="w-12 h-12 mb-4 text-[#22a366]" />
                <h3 className="text-2xl font-bold mb-3">Counties & Utility Districts</h3>
                <p className="text-green-100 leading-relaxed mb-6">
                  Purpose-built solutions for counties and utility districts with specialized billing, asset management, and financial reporting.
                </p>
                <Link href="/products/revenue-taxation" className="inline-flex items-center bg-white text-[#1a7a4b] px-6 py-3 rounded-lg font-bold hover:shadow-lg transition-all">
                  Explore Revenue & Taxation <ChevronRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center bg-[#e8f5ee] rounded-full px-4 py-2 mb-4">
                  <Droplets className="w-4 h-4 mr-2 text-[#E8913A]" />
                  <span className="text-sm font-semibold text-[#1a7a4b]">Counties & Districts</span>
                </div>
                <h2 className="text-3xl font-black text-[#1a7a4b] mb-4">For Counties & Utility Districts</h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Counties and utility districts need specialized tools for their unique operations. Spectrum provides utility billing, meter management, and district-specific financial reporting alongside the full ERP suite.
                </p>
                <ul className="space-y-3">
                  {['Utility Billing & Meter Management', 'Property Tax Administration', 'District Financial Reporting', 'Asset Lifecycle Management', 'Integrated Cash Receipts'].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-[#22a366] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <hr className="border-gray-200" />

            {/* Deployment Options */}
            <div className="text-center">
              <h2 className="text-3xl font-black text-[#1a7a4b] mb-4">Flexible Deployment</h2>
              <p className="text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
                Choose the deployment model that works best for your organization.
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="p-8 bg-white rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow">
                  <Cloud className="w-10 h-10 text-[#22a366] mb-4 mx-auto" />
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Cloud</h3>
                  <p className="text-gray-600 leading-relaxed">Fully hosted by Harris. Access from anywhere, no hardware to manage, automatic updates.</p>
                </div>
                <div className="p-8 bg-white rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow">
                  <Monitor className="w-10 h-10 text-[#22a366] mb-4 mx-auto" />
                  <h3 className="text-lg font-bold text-gray-900 mb-3">On-Premise</h3>
                  <p className="text-gray-600 leading-relaxed">Install on your own servers for full control over your data and infrastructure.</p>
                </div>
                <div className="p-8 bg-white rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow">
                  <Shield className="w-10 h-10 text-[#22a366] mb-4 mx-auto" />
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Hybrid</h3>
                  <p className="text-gray-600 leading-relaxed">Mix and match cloud and on-premise components to fit your unique requirements.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#e8f5ee]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-[#1a7a4b] mb-4">Find the Right Solution for Your Community</h2>
          <p className="text-gray-600 text-lg mb-8 max-w-xl mx-auto">
            Our team will help you identify the perfect combination of modules for your organization.
          </p>
          <Link href="/contact" className="bg-gradient-to-r from-[#1a7a4b] to-[#22a366] text-white px-8 py-4 rounded-lg font-bold hover:shadow-xl transition-all inline-flex items-center">
            Talk to Our Team <ChevronRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  )
}
