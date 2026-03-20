import Link from 'next/link'
import { ChevronRight, Users, DollarSign, Calendar, FileText, Shield, Clock } from 'lucide-react'

export default function HRPayrollPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0e3d26] to-[#1a7a4b] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="inline-flex items-center bg-white/10 rounded-full px-4 py-2 mb-6 border border-white/20">
              <Users className="w-4 h-4 mr-2 text-[#E8913A]" />
              <span className="text-sm font-medium">Human Resources & Payroll</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
              Human Resources & Payroll
            </h1>
            <p className="text-xl text-green-200 leading-relaxed max-w-2xl">
              End-to-end HR and payroll management with direct deposit, leave tracking, benefits administration, position control, and compliance reporting.
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
                <DollarSign className="w-10 h-10 text-[#22a366] mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-3">Payroll Processing</h3>
                <p className="text-gray-600 leading-relaxed">Step-by-step payroll with direct deposit, multiple pay frequencies, deduction management, and automated tax calculations.</p>
              </div>
              <div className="p-8 bg-white rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow">
                <Users className="w-10 h-10 text-[#22a366] mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-3">Employee Management</h3>
                <p className="text-gray-600 leading-relaxed">Complete employee records with position control, job classification, salary administration, and organizational charts.</p>
              </div>
              <div className="p-8 bg-white rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow">
                <Shield className="w-10 h-10 text-[#22a366] mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-3">Benefits Administration</h3>
                <p className="text-gray-600 leading-relaxed">Manage health insurance, retirement plans, life insurance, and other benefits with automated enrollment and tracking.</p>
              </div>
              <div className="p-8 bg-white rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow">
                <Calendar className="w-10 h-10 text-[#22a366] mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-3">Leave Management</h3>
                <p className="text-gray-600 leading-relaxed">Track vacation, sick, personal, and FMLA leave with accrual rules, request workflows, and balance reporting.</p>
              </div>
              <div className="p-8 bg-white rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow">
                <Clock className="w-10 h-10 text-[#22a366] mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-3">Time & Attendance</h3>
                <p className="text-gray-600 leading-relaxed">Integrated time tracking with timeclock support, overtime calculations, and seamless payroll integration.</p>
              </div>
              <div className="p-8 bg-white rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow">
                <FileText className="w-10 h-10 text-[#22a366] mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-3">Compliance Reporting</h3>
                <p className="text-gray-600 leading-relaxed">Automated W-2s, ACA reporting, EEO compliance, pension reporting, and state/federal regulatory submissions.</p>
              </div>
            </div>

            <div className="text-center bg-[#e8f5ee] rounded-3xl p-12 border border-[#22a366]/20">
              <h2 className="text-2xl font-black text-[#1a7a4b] mb-4">See HR & Payroll in Action</h2>
              <p className="text-gray-600 mb-6 max-w-xl mx-auto">Schedule a personalized demo to see how Spectrum can streamline your human resources and payroll processes.</p>
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
