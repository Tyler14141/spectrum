import Link from 'next/link'
import { ChevronRight, Landmark, Receipt, FileText, CreditCard, BarChart3, CheckCircle } from 'lucide-react'

export default function RevenueTaxationPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0e3d26] to-[#1a7a4b] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="inline-flex items-center bg-white/10 rounded-full px-4 py-2 mb-6 border border-white/20">
              <Landmark className="w-4 h-4 mr-2 text-[#E8913A]" />
              <span className="text-sm font-medium">Revenue & Taxation</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
              Revenue & Taxation
            </h1>
            <p className="text-xl text-green-200 leading-relaxed max-w-2xl">
              Comprehensive revenue management including property tax billing, collection, utility billing, licensing, permitting, and integrated cash receipts.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <div className="p-8 bg-white rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow">
                <Receipt className="w-10 h-10 text-[#22a366] mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-3">Tax Billing</h3>
                <p className="text-gray-600 leading-relaxed">Generate property tax bills with flexible billing cycles, installment plans, and automated penalty/interest calculations.</p>
              </div>
              <div className="p-8 bg-white rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow">
                <CreditCard className="w-10 h-10 text-[#22a366] mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-3">Collections</h3>
                <p className="text-gray-600 leading-relaxed">Integrated collection management with payment processing, delinquency tracking, lien management, and payment plans.</p>
              </div>
              <div className="p-8 bg-white rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow">
                <Landmark className="w-10 h-10 text-[#22a366] mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-3">Property Assessment</h3>
                <p className="text-gray-600 leading-relaxed">Property valuation tools with mass appraisal, exemption tracking, and assessment roll management.</p>
              </div>
              <div className="p-8 bg-white rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow">
                <FileText className="w-10 h-10 text-[#22a366] mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-3">Utility Billing</h3>
                <p className="text-gray-600 leading-relaxed">Water, sewer, and other utility billing with meter reading integration, consumption analysis, and rate management.</p>
              </div>
              <div className="p-8 bg-white rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow">
                <BarChart3 className="w-10 h-10 text-[#22a366] mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-3">Revenue Reporting</h3>
                <p className="text-gray-600 leading-relaxed">Comprehensive revenue dashboards with collection rates, aging analysis, and forecasting tools.</p>
              </div>
              <div className="p-8 bg-white rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow">
                <CheckCircle className="w-10 h-10 text-[#22a366] mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-3">Cash Receipts</h3>
                <p className="text-gray-600 leading-relaxed">Integrated cash receipts with multi-tender support, online payments, and automated general ledger posting.</p>
              </div>
            </div>

            <div className="text-center bg-[#e8f5ee] rounded-3xl p-12 border border-[#22a366]/20">
              <h2 className="text-2xl font-black text-[#1a7a4b] mb-4">See Revenue & Taxation in Action</h2>
              <p className="text-gray-600 mb-6 max-w-xl mx-auto">Schedule a personalized demo to see how Spectrum can optimize your revenue collection.</p>
              <Link href="/contact" className="bg-gradient-to-r from-[#1a7a4b] to-[#22a366] text-white px-8 py-3.5 rounded-lg font-bold hover:shadow-xl transition-all inline-flex items-center">
                Request a Demo <ChevronRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
