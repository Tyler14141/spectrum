import Link from 'next/link'
import { ChevronRight, Users, Award, Clock, Globe, Building2, Shield, HeartHandshake } from 'lucide-react'

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0e3d26] to-[#1a7a4b] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
              About Spectrum
            </h1>
            <p className="text-xl text-green-200 leading-relaxed max-w-2xl">
              As part of Harris Computer, a division of Constellation Software, Spectrum benefits from the experience and resources of a global software leader while delivering personalized local government solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
              <div>
                <span className="text-[#E8913A] font-semibold text-sm uppercase tracking-wider">About Harris Computer</span>
                <h2 className="text-3xl font-black text-[#1a7a4b] mt-3 mb-6">
                  A Global Software Leader, Locally Focused
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  As part of Harris Computer, a division of Constellation Software, Spectrum benefits from the experience and resources of a global software leader. With over 5,500 entities relying on Harris software solutions, we provide reliable, cost-effective services backed by local support teams who understand your unique challenges.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Spectrum is a scalable, feature-rich financial management solution built specifically for local governments. Designed for long-term partnership, it evolves with your needs through ongoing upgrades and reliable support.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Our software is built with the specific needs of local governments in mind, providing user-friendly interfaces and robust functionalities that ensure efficient operations for municipalities, counties, and utility districts.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-[#e8f5ee] rounded-2xl p-6 text-center">
                  <Clock className="w-8 h-8 text-[#22a366] mx-auto mb-3" />
                  <div className="stat-number text-4xl font-black mb-1">40+</div>
                  <div className="text-gray-600 text-sm">Years of Service</div>
                </div>
                <div className="bg-[#e8f5ee] rounded-2xl p-6 text-center">
                  <Users className="w-8 h-8 text-[#22a366] mx-auto mb-3" />
                  <div className="stat-number text-4xl font-black mb-1">5,500+</div>
                  <div className="text-gray-600 text-sm">Government Clients</div>
                </div>
                <div className="bg-[#e8f5ee] rounded-2xl p-6 text-center">
                  <Globe className="w-8 h-8 text-[#22a366] mx-auto mb-3" />
                  <div className="stat-number text-4xl font-black mb-1">100+</div>
                  <div className="text-gray-600 text-sm">Countries Served</div>
                </div>
                <div className="bg-[#e8f5ee] rounded-2xl p-6 text-center">
                  <Award className="w-8 h-8 text-[#22a366] mx-auto mb-3" />
                  <div className="stat-number text-4xl font-black mb-1">24/7</div>
                  <div className="text-gray-600 text-sm">Support Available</div>
                </div>
              </div>
            </div>

            {/* Values - from brochure */}
            <div className="mb-20">
              <div className="text-center mb-12">
                <span className="text-[#E8913A] font-semibold text-sm uppercase tracking-wider">Why Choose Harris</span>
                <h2 className="text-3xl font-black text-[#1a7a4b] mt-3">Choice. Expertise. Relationship.</h2>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center p-8">
                  <div className="w-16 h-16 bg-[#e8f5ee] rounded-2xl flex items-center justify-center mx-auto mb-5">
                    <Award className="w-8 h-8 text-[#22a366]" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Experience</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Harris has provided software to governments for 40+ years. We bring decades of domain expertise to every implementation and partnership.
                  </p>
                </div>
                <div className="text-center p-8">
                  <div className="w-16 h-16 bg-[#e8f5ee] rounded-2xl flex items-center justify-center mx-auto mb-5">
                    <HeartHandshake className="w-8 h-8 text-[#22a366]" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Customer Care</h3>
                  <p className="text-gray-600 leading-relaxed">
                    One-on-one support. Small software service, big partner innovation. Your success is our priority at every step.
                  </p>
                </div>
                <div className="text-center p-8">
                  <div className="w-16 h-16 bg-[#e8f5ee] rounded-2xl flex items-center justify-center mx-auto mb-5">
                    <Shield className="w-8 h-8 text-[#22a366]" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Software for Life</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We support every product for as long as our clients rely on them. Ongoing upgrades, reliable support&mdash;we&apos;re in it for the long haul.
                  </p>
                </div>
              </div>
            </div>

            {/* Harris / Constellation */}
            <div className="bg-gradient-to-r from-[#1a7a4b] to-[#22a366] rounded-3xl p-10 md:p-14 text-white">
              <div className="grid md:grid-cols-2 gap-10 items-center">
                <div>
                  <h2 className="text-3xl font-black mb-4">Part of a Global Family</h2>
                  <p className="text-green-100 leading-relaxed mb-6">
                    Harris Computer is a division of Constellation Software, one of the largest vertical market software companies in the world. This partnership gives Spectrum the resources and stability of a global organization while maintaining the personalized service that local governments expect.
                  </p>
                  <div className="space-y-3 text-green-100">
                    <p><strong className="text-white">Harris Computer:</strong> Serving 5,500+ government entities worldwide</p>
                    <p><strong className="text-white">Constellation Software:</strong> TSX-listed, operating in 100+ countries</p>
                    <p><strong className="text-white">Contact:</strong> AHaenlin@harriscomputer.com</p>
                  </div>
                </div>
                <div className="text-center">
                  <div className="inline-block bg-white/10 rounded-2xl p-8 border border-white/20">
                    <Building2 className="w-16 h-16 text-[#22a366] mx-auto mb-4" />
                    <p className="text-2xl font-bold">Harris Computer</p>
                    <p className="text-green-200 text-sm mt-2">A Constellation Software company</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#e8f5ee]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-[#1a7a4b] mb-4">Ready to Learn More?</h2>
          <p className="text-gray-600 text-lg mb-8 max-w-xl mx-auto">
            Contact our team to discuss how Spectrum can help your local government.
          </p>
          <Link href="/contact" className="bg-gradient-to-r from-[#1a7a4b] to-[#22a366] text-white px-8 py-4 rounded-lg font-bold hover:shadow-xl transition-all inline-flex items-center">
            Get in Touch <ChevronRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  )
}
