import Link from 'next/link'
import { ChevronRight, Shield, Cloud, Landmark, Building2, Users, Wallet, Receipt, Wrench, Award, Clock, HeartHandshake, Phone } from 'lucide-react'

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative hero-gradient text-white overflow-hidden">
        {/* Background hexagon texture */}
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />

        <div className="relative container mx-auto px-4 py-16 md:py-20">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8 border border-white/20">
              <Landmark className="w-4 h-4 mr-2 text-[#E8913A]" />
              <span className="text-sm font-medium">Serving local governments for 40+ years</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-[1.1] tracking-tight text-white/80">
              The ERP Platform
              <span className="block text-white text-5xl md:text-6xl lg:text-7xl mt-2">Built for Local Government</span>
            </h1>

            <p className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed max-w-2xl mx-auto">
              Spectrum is a scalable, feature-rich financial management solution built specifically for local governments. Designed for long-term partnership, it evolves with your needs.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-[#E8913A] text-white px-8 py-4 rounded-lg font-bold hover:bg-[#d07e2f] transition-all duration-300 inline-flex items-center shadow-xl hover:shadow-2xl hover:scale-[1.02] transform"
              >
                Schedule a Demo
                <ChevronRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/solutions"
                className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-bold hover:bg-white/20 transition-all duration-300 inline-flex items-center border border-white/30"
              >
                Explore Solutions
                <ChevronRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>

          {/* Stats bar */}
          <div className="mt-16 grid grid-cols-3 gap-4 max-w-3xl mx-auto">
            <div className="text-center py-4 px-2 border-r border-white/10 last:border-0">
              <div className="text-3xl md:text-4xl font-black mb-1">40+</div>
              <div className="text-white/60 text-sm">Years of Service</div>
            </div>
            <div className="text-center py-4 px-2 border-r border-white/10 last:border-0">
              <div className="text-3xl md:text-4xl font-black mb-1">5,500+</div>
              <div className="text-white/60 text-sm">Government Clients</div>
            </div>
            <div className="text-center py-4 px-2">
              <div className="text-3xl md:text-4xl font-black mb-1">24/7</div>
              <div className="text-white/60 text-sm">Support</div>
            </div>
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 60L60 50C120 40 240 20 360 15C480 10 600 20 720 25C840 30 960 30 1080 25C1200 20 1320 10 1380 5L1440 0V60H1380C1320 60 1200 60 1080 60C960 60 840 60 720 60C600 60 480 60 360 60C240 60 120 60 60 60H0Z" fill="#e8f5ee"/>
          </svg>
        </div>
      </section>

      {/* Trusted By Banner */}
      <section className="py-10 bg-[#e8f5ee]">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm text-[#1a7a4b]/50 uppercase tracking-wider font-semibold mb-6">
            Trusted by municipalities, counties, and utility districts nationwide
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 text-[#1a7a4b]/30">
            <div className="flex items-center gap-2">
              <Landmark className="w-6 h-6" />
              <span className="font-semibold text-[#1a7a4b]/50">Municipalities</span>
            </div>
            <div className="flex items-center gap-2">
              <Building2 className="w-6 h-6" />
              <span className="font-semibold text-[#1a7a4b]/50">Counties</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-6 h-6" />
              <span className="font-semibold text-[#1a7a4b]/50">Utility Districts</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-6 h-6" />
              <span className="font-semibold text-[#1a7a4b]/50">Special Districts</span>
            </div>
          </div>
        </div>
      </section>

      {/* Product Modules - Features from brochure */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#E8913A] font-semibold text-sm uppercase tracking-wider">Features</span>
            <h2 className="text-3xl md:text-4xl font-black text-[#1a7a4b] mt-3 mb-5">
              A Complete Suite for Local Government
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Spectrum offers a comprehensive platform designed to help municipalities, counties, and utility districts streamline their financial, operational, and human resource processes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Financial Management */}
            <Link href="/products/financial-management" className="module-card bg-white rounded-2xl p-8 border border-gray-200 hover:border-[#22a366]/40 group">
              <div className="w-14 h-14 bg-[#e8f5ee] rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#1a7a4b] transition-colors duration-300">
                <Wallet className="w-7 h-7 text-[#1a7a4b] group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#1a7a4b] transition-colors">
                Financial Management
              </h3>
              <p className="text-gray-500 text-sm font-medium mb-2">Budgeting, Accounting & Reporting</p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Complete municipal accounting with fund management, accounts payable, general ledger, budget preparation, and comprehensive financial reporting.
              </p>
              <span className="text-[#22a366] font-semibold inline-flex items-center text-sm">
                Learn more <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            {/* Procurement & Spending Control */}
            <Link href="/products/procurement" className="module-card bg-white rounded-2xl p-8 border border-gray-200 hover:border-[#22a366]/40 group">
              <div className="w-14 h-14 bg-[#e8f5ee] rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#1a7a4b] transition-colors duration-300">
                <Receipt className="w-7 h-7 text-[#1a7a4b] group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#1a7a4b] transition-colors">
                Procurement & Spending Control
              </h3>
              <p className="text-gray-500 text-sm font-medium mb-2">Purchase Orders, Vendor Management & Compliance</p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Streamlined procurement workflows with purchase order management, vendor tracking, spending controls, and full audit trail compliance.
              </p>
              <span className="text-[#22a366] font-semibold inline-flex items-center text-sm">
                Learn more <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            {/* Human Resources & Payroll */}
            <Link href="/products/hr-payroll" className="module-card bg-white rounded-2xl p-8 border border-gray-200 hover:border-[#22a366]/40 group">
              <div className="w-14 h-14 bg-[#e8f5ee] rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#1a7a4b] transition-colors duration-300">
                <Users className="w-7 h-7 text-[#1a7a4b] group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#1a7a4b] transition-colors">
                Human Resources & Payroll
              </h3>
              <p className="text-gray-500 text-sm font-medium mb-2">Employee Management, Benefits & Payroll Processing</p>
              <p className="text-gray-600 leading-relaxed mb-4">
                End-to-end HR and payroll management with direct deposit, leave tracking, benefits administration, position control, and compliance reporting.
              </p>
              <span className="text-[#22a366] font-semibold inline-flex items-center text-sm">
                Learn more <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            {/* Revenue & Taxation */}
            <Link href="/products/revenue-taxation" className="module-card bg-white rounded-2xl p-8 border border-gray-200 hover:border-[#22a366]/40 group">
              <div className="w-14 h-14 bg-[#e8f5ee] rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#1a7a4b] transition-colors duration-300">
                <Landmark className="w-7 h-7 text-[#1a7a4b] group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#1a7a4b] transition-colors">
                Revenue & Taxation
              </h3>
              <p className="text-gray-500 text-sm font-medium mb-2">Tax Billing, Collection & Revenue Management</p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Comprehensive revenue management including property tax billing, collection, utility billing, licensing, permitting, and integrated cash receipts.
              </p>
              <span className="text-[#22a366] font-semibold inline-flex items-center text-sm">
                Learn more <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            {/* Asset & Infrastructure Management - full width */}
            <Link href="/products/asset-management" className="module-card bg-white rounded-2xl p-8 border border-gray-200 hover:border-[#22a366]/40 group md:col-span-2">
              <div className="md:flex md:items-start md:gap-8">
                <div className="w-14 h-14 bg-[#e8f5ee] rounded-xl flex items-center justify-center mb-5 md:mb-0 group-hover:bg-[#1a7a4b] transition-colors duration-300 flex-shrink-0">
                  <Wrench className="w-7 h-7 text-[#1a7a4b] group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#1a7a4b] transition-colors">
                    Asset & Infrastructure Management
                  </h3>
                  <p className="text-gray-500 text-sm font-medium mb-2">Asset Tracking, Maintenance & Lifecycle Management</p>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Track and manage all government assets from vehicles and equipment to buildings and infrastructure. Includes depreciation scheduling, maintenance tracking, warranty management, and capital planning.
                  </p>
                  <span className="text-[#22a366] font-semibold inline-flex items-center text-sm">
                    Learn more <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Harris - from brochure */}
      <section className="py-20 bg-[#e8f5ee]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-[#E8913A] font-semibold text-sm uppercase tracking-wider">Why Choose Harris</span>
            <h2 className="text-3xl md:text-4xl font-black text-[#1a7a4b] mt-3 mb-5">
              Choice. Expertise. Relationship.
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
              Harris has provided software to governments for 40+ years. We support every product for as long as our clients rely on them.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            <div className="bg-white rounded-2xl p-8 text-center shadow-sm">
              <div className="w-14 h-14 bg-[#e8f5ee] rounded-xl flex items-center justify-center mx-auto mb-5">
                <Award className="w-7 h-7 text-[#22a366]" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Experience</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Harris has provided software to governments for 40+ years. We bring decades of domain expertise to every implementation.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 text-center shadow-sm">
              <div className="w-14 h-14 bg-[#e8f5ee] rounded-xl flex items-center justify-center mx-auto mb-5">
                <HeartHandshake className="w-7 h-7 text-[#22a366]" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Customer Care</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                One-on-one support. Small software service, big partner innovation. Your success is our priority.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 text-center shadow-sm">
              <div className="w-14 h-14 bg-[#e8f5ee] rounded-xl flex items-center justify-center mx-auto mb-5">
                <Shield className="w-7 h-7 text-[#22a366]" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Software for Life</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We support every product for as long as our clients rely on them. Ongoing upgrades, reliable support, always.
              </p>
            </div>
          </div>

          {/* Feature details */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="flex items-start gap-3 bg-white/60 rounded-xl p-5">
              <Cloud className="w-5 h-5 text-[#22a366] mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-900 text-sm mb-1">Cloud or On-Premise</h4>
                <p className="text-gray-500 text-xs leading-relaxed">Flexible deployment to fit your needs</p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-white/60 rounded-xl p-5">
              <Shield className="w-5 h-5 text-[#22a366] mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-900 text-sm mb-1">Enterprise Security</h4>
                <p className="text-gray-500 text-xs leading-relaxed">Role-based access and audit controls</p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-white/60 rounded-xl p-5">
              <Clock className="w-5 h-5 text-[#22a366] mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-900 text-sm mb-1">Ongoing Upgrades</h4>
                <p className="text-gray-500 text-xs leading-relaxed">Latest innovations when you need them</p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-white/60 rounded-xl p-5">
              <Phone className="w-5 h-5 text-[#22a366] mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-900 text-sm mb-1">Dedicated Training</h4>
                <p className="text-gray-500 text-xs leading-relaxed">On-site and remote training for your team</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation & Service - from brochure */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#E8913A] font-semibold text-sm uppercase tracking-wider">Implementation & Service</span>
            <h2 className="text-3xl md:text-4xl font-black text-[#1a7a4b] mt-3 mb-5">
              From Installation to Ongoing Support
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our team works alongside you to understand your needs and build a customized plan to maximize the value of Spectrum.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-[#1a7a4b] mb-4">Implementation</h3>
              <p className="text-gray-600 leading-relaxed">
                Our team works alongside you to understand your needs and build a customized plan to maximize the value of Spectrum. We manage every step of the process&mdash;from installation to deployment and staff training.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-[#1a7a4b] mb-4">Service</h3>
              <p className="text-gray-600 leading-relaxed">
                At Harris, exceptional customer service is our priority. Whether you call, submit a form, or open a support ticket, our team is equipped to respond quickly and effectively. Because great software means nothing without great service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-[#e8f5ee]">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#E8913A] font-semibold text-sm uppercase tracking-wider">Testimonials</span>
            <h2 className="text-3xl md:text-4xl font-black text-[#1a7a4b] mt-3 mb-5">
              Trusted by Local Governments Nationwide
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Hear from the municipalities and counties that rely on Spectrum every day.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="testimonial-card bg-white rounded-2xl p-8 border border-gray-100">
              <p className="text-gray-700 leading-relaxed mb-6 relative z-10">
                &ldquo;Spectrum transformed how we manage our municipal budget. The financial management module is intuitive and powerful&mdash;exactly what our team needed.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#1a7a4b] rounded-full flex items-center justify-center text-white font-bold text-sm">TM</div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">Teresa Mitchell</div>
                  <div className="text-gray-500 text-xs">Finance Director, County Government</div>
                </div>
              </div>
            </div>

            <div className="testimonial-card bg-white rounded-2xl p-8 border border-gray-100">
              <p className="text-gray-700 leading-relaxed mb-6 relative z-10">
                &ldquo;The procurement module eliminated manual processes and gave us real visibility into spending. Harris support has been exceptional from day one.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#22a366] rounded-full flex items-center justify-center text-white font-bold text-sm">RL</div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">Robert Landry</div>
                  <div className="text-gray-500 text-xs">City Manager, Municipal Government</div>
                </div>
              </div>
            </div>

            <div className="testimonial-card bg-white rounded-2xl p-8 border border-gray-100">
              <p className="text-gray-700 leading-relaxed mb-6 relative z-10">
                &ldquo;Moving to Spectrum was seamless. The implementation team understood our unique challenges and delivered a solution that fits perfectly.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#E8913A] rounded-full flex items-center justify-center text-white font-bold text-sm">SP</div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">Sarah Pelletier</div>
                  <div className="text-gray-500 text-xs">Town Clerk, Utility District</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#0e3d26] to-[#1a7a4b] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-black mb-5">
              Ready to Modernize Your Government Operations?
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
              Join the 5,500+ government entities that trust Harris software solutions. Our team is ready to help you get started with Spectrum.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-[#E8913A] text-white px-8 py-4 rounded-lg font-bold hover:bg-[#d07e2f] transition-all duration-300 inline-flex items-center shadow-xl hover:shadow-2xl"
              >
                Schedule a Demo
                <ChevronRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/about"
                className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-bold hover:bg-white/20 transition-all duration-300 inline-flex items-center border border-white/30"
              >
                Learn About Spectrum
                <ChevronRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
            <p className="text-sm text-white/40 mt-8">
              Alison Haenlin, Strategic Account Manager &bull; AHaenlin@harriscomputer.com &bull; 716-402-2812
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
