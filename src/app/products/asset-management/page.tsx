import Link from 'next/link'
import { ChevronRight, Wrench, Building2, Truck, ClipboardList, BarChart3, Calendar } from 'lucide-react'

export default function AssetManagementPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0e3d26] to-[#1a7a4b] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="inline-flex items-center bg-white/10 rounded-full px-4 py-2 mb-6 border border-white/20">
              <Wrench className="w-4 h-4 mr-2 text-[#E8913A]" />
              <span className="text-sm font-medium">Asset & Infrastructure Management</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
              Asset & Infrastructure Management
            </h1>
            <p className="text-xl text-green-200 leading-relaxed max-w-2xl">
              Track and manage all government assets from vehicles and equipment to buildings and infrastructure with depreciation scheduling, maintenance tracking, and capital planning.
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
                <ClipboardList className="w-10 h-10 text-[#22a366] mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-3">Asset Registry</h3>
                <p className="text-gray-600 leading-relaxed">Centralized database of all government assets with barcode/RFID support, location tracking, and condition assessments.</p>
              </div>
              <div className="p-8 bg-white rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow">
                <BarChart3 className="w-10 h-10 text-[#22a366] mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-3">Depreciation</h3>
                <p className="text-gray-600 leading-relaxed">Automated depreciation calculations with multiple methods, GASB 34 compliance, and integration with the general ledger.</p>
              </div>
              <div className="p-8 bg-white rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow">
                <Wrench className="w-10 h-10 text-[#22a366] mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-3">Maintenance Tracking</h3>
                <p className="text-gray-600 leading-relaxed">Preventive and corrective maintenance scheduling with work order management, parts tracking, and cost analysis.</p>
              </div>
              <div className="p-8 bg-white rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow">
                <Truck className="w-10 h-10 text-[#22a366] mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-3">Fleet Management</h3>
                <p className="text-gray-600 leading-relaxed">Vehicle and equipment tracking with fuel consumption, mileage logs, inspection schedules, and replacement planning.</p>
              </div>
              <div className="p-8 bg-white rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow">
                <Building2 className="w-10 h-10 text-[#22a366] mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-3">Infrastructure</h3>
                <p className="text-gray-600 leading-relaxed">Manage roads, bridges, utilities, and facilities with condition rating, lifecycle analysis, and capital improvement planning.</p>
              </div>
              <div className="p-8 bg-white rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow">
                <Calendar className="w-10 h-10 text-[#22a366] mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-3">Capital Planning</h3>
                <p className="text-gray-600 leading-relaxed">Long-term capital improvement planning with project prioritization, funding analysis, and multi-year budget integration.</p>
              </div>
            </div>

            <div className="text-center bg-[#e8f5ee] rounded-3xl p-12 border border-[#22a366]/20">
              <h2 className="text-2xl font-black text-[#1a7a4b] mb-4">See Asset Management in Action</h2>
              <p className="text-gray-600 mb-6 max-w-xl mx-auto">Schedule a personalized demo to see how Spectrum can help you manage your government assets.</p>
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
