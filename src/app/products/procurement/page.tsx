import Link from 'next/link'
import { ChevronRight, Receipt, ShoppingCart, FileCheck, Users, BarChart3, Shield } from 'lucide-react'

export default function ProcurementPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0e3d26] to-[#1a7a4b] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="inline-flex items-center bg-white/10 rounded-full px-4 py-2 mb-6 border border-white/20">
              <Receipt className="w-4 h-4 mr-2 text-[#E8913A]" />
              <span className="text-sm font-medium">Procurement & Spending Control</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
              Procurement & Spending Control
            </h1>
            <p className="text-xl text-green-200 leading-relaxed max-w-2xl">
              Streamlined procurement workflows with purchase order management, vendor tracking, spending controls, and full audit trail compliance for local governments.
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
                <ShoppingCart className="w-10 h-10 text-[#22a366] mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-3">Purchase Orders</h3>
                <p className="text-gray-600 leading-relaxed">Create, route, and approve purchase orders with configurable approval workflows and budget validation.</p>
              </div>
              <div className="p-8 bg-white rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow">
                <Users className="w-10 h-10 text-[#22a366] mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-3">Vendor Management</h3>
                <p className="text-gray-600 leading-relaxed">Centralized vendor database with performance tracking, insurance certificate management, and bid history.</p>
              </div>
              <div className="p-8 bg-white rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow">
                <Shield className="w-10 h-10 text-[#22a366] mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-3">Spending Controls</h3>
                <p className="text-gray-600 leading-relaxed">Budget encumbrance, spending limits, and approval thresholds ensure fiscal responsibility at every level.</p>
              </div>
              <div className="p-8 bg-white rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow">
                <FileCheck className="w-10 h-10 text-[#22a366] mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-3">Contract Management</h3>
                <p className="text-gray-600 leading-relaxed">Track contracts from RFP through execution with milestone tracking, renewal alerts, and compliance monitoring.</p>
              </div>
              <div className="p-8 bg-white rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow">
                <BarChart3 className="w-10 h-10 text-[#22a366] mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-3">Spend Analysis</h3>
                <p className="text-gray-600 leading-relaxed">Comprehensive spending reports by vendor, department, category, and time period for informed decision-making.</p>
              </div>
              <div className="p-8 bg-white rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow">
                <Receipt className="w-10 h-10 text-[#22a366] mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-3">Audit Trail</h3>
                <p className="text-gray-600 leading-relaxed">Complete audit trail for all procurement activities ensuring transparency and regulatory compliance.</p>
              </div>
            </div>

            <div className="text-center bg-[#e8f5ee] rounded-3xl p-12 border border-[#22a366]/20">
              <h2 className="text-2xl font-black text-[#1a7a4b] mb-4">See Procurement in Action</h2>
              <p className="text-gray-600 mb-6 max-w-xl mx-auto">Schedule a personalized demo to see how Spectrum can streamline your procurement process.</p>
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
