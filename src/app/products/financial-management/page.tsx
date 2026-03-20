import Link from 'next/link'
import { ChevronRight, Wallet, FileText, CreditCard, CheckCircle, BarChart3, BookOpen } from 'lucide-react'

export default function FinancialManagementPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0e3d26] to-[#1a7a4b] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="inline-flex items-center bg-white/10 rounded-full px-4 py-2 mb-6 border border-white/20">
              <Wallet className="w-4 h-4 mr-2 text-[#E8913A]" />
              <span className="text-sm font-medium">Financial Management</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
              Financial Management
            </h1>
            <p className="text-xl text-green-200 leading-relaxed max-w-2xl">
              Complete municipal accounting with fund management, accounts payable, general ledger, budget preparation, and comprehensive financial reporting designed for local government.
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
                <BookOpen className="w-10 h-10 text-[#22a366] mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-3">General Ledger</h3>
                <p className="text-gray-600 leading-relaxed">Full fund accounting with multi-department chart of accounts, automated journal entries, and real-time balance tracking.</p>
              </div>
              <div className="p-8 bg-white rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow">
                <CreditCard className="w-10 h-10 text-[#22a366] mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-3">Accounts Payable</h3>
                <p className="text-gray-600 leading-relaxed">Streamlined invoice processing, vendor payments, 1099 reporting, and check reconciliation with flexible payment options.</p>
              </div>
              <div className="p-8 bg-white rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow">
                <BarChart3 className="w-10 h-10 text-[#22a366] mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-3">Budget Preparation</h3>
                <p className="text-gray-600 leading-relaxed">Multi-year budget development with what-if analysis, department submissions, and council presentation tools.</p>
              </div>
              <div className="p-8 bg-white rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow">
                <FileText className="w-10 h-10 text-[#22a366] mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-3">Financial Reporting</h3>
                <p className="text-gray-600 leading-relaxed">GASB-compliant reporting with customizable report writer, CAFR support, and automated state reporting requirements.</p>
              </div>
              <div className="p-8 bg-white rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow">
                <CheckCircle className="w-10 h-10 text-[#22a366] mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-3">Bank Reconciliation</h3>
                <p className="text-gray-600 leading-relaxed">Automated bank reconciliation with electronic statement import, outstanding check tracking, and exception reporting.</p>
              </div>
              <div className="p-8 bg-white rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow">
                <Wallet className="w-10 h-10 text-[#22a366] mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-3">Fund Accounting</h3>
                <p className="text-gray-600 leading-relaxed">Full governmental fund accounting with grant tracking, project accounting, and inter-fund transfer management.</p>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center bg-[#e8f5ee] rounded-3xl p-12 border border-[#22a366]/20">
              <h2 className="text-2xl font-black text-[#1a7a4b] mb-4">See Financial Management in Action</h2>
              <p className="text-gray-600 mb-6 max-w-xl mx-auto">Schedule a personalized demo with our team and discover how Spectrum can simplify your municipal accounting.</p>
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
