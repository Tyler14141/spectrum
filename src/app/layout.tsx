import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Spectrum | ERP Software for Local Government',
  description: 'Spectrum is a scalable, feature-rich financial management solution built specifically for local governments. A Harris Computer product.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans">
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <footer className="bg-[#0e3d26] text-gray-300">
          <div className="container mx-auto px-4 py-14">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
              {/* Company Info */}
              <div>
                <div className="mb-5 flex items-center">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center mr-2">
                    <span className="text-white font-black text-lg">S</span>
                  </div>
                  <div>
                    <span className="text-xl font-black text-white">Spectrum</span>
                    <span className="block text-[9px] uppercase tracking-[0.15em] text-[#22a366] font-semibold -mt-1">Software Solutions</span>
                  </div>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  A scalable, feature-rich financial management solution built specifically for local governments. Designed for long-term partnership.
                </p>
                <div className="text-sm space-y-1.5 text-gray-400">
                  <p>Alison Haenlin</p>
                  <p>Strategic Account Manager</p>
                  <p className="text-[#22a366]">716-402-2812</p>
                </div>
              </div>

              {/* Products */}
              <div>
                <h3 className="text-white font-bold mb-5 text-sm uppercase tracking-wider">Products</h3>
                <ul className="space-y-3 text-sm">
                  <li><Link href="/products/financial-management" className="hover:text-white transition-colors">Financial Management</Link></li>
                  <li><Link href="/products/procurement" className="hover:text-white transition-colors">Procurement & Spending Control</Link></li>
                  <li><Link href="/products/hr-payroll" className="hover:text-white transition-colors">Human Resources & Payroll</Link></li>
                  <li><Link href="/products/revenue-taxation" className="hover:text-white transition-colors">Revenue & Taxation</Link></li>
                  <li><Link href="/products/asset-management" className="hover:text-white transition-colors">Asset & Infrastructure Management</Link></li>
                </ul>
              </div>

              {/* Resources */}
              <div>
                <h3 className="text-white font-bold mb-5 text-sm uppercase tracking-wider">Resources</h3>
                <ul className="space-y-3 text-sm">
                  <li><Link href="/contact" className="hover:text-white transition-colors">Training</Link></li>
                  <li><Link href="/contact" className="hover:text-white transition-colors">Customer Support</Link></li>
                  <li><Link href="/contact" className="hover:text-white transition-colors">Webinars & Events</Link></li>
                  <li><Link href="/contact" className="hover:text-white transition-colors">Implementation Guide</Link></li>
                </ul>
              </div>

              {/* Company */}
              <div>
                <h3 className="text-white font-bold mb-5 text-sm uppercase tracking-wider">Company</h3>
                <ul className="space-y-3 text-sm">
                  <li><Link href="/about" className="hover:text-white transition-colors">About Spectrum</Link></li>
                  <li><Link href="/solutions" className="hover:text-white transition-colors">Solutions</Link></li>
                  <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
                </ul>
                <div className="mt-6 p-4 bg-white/5 rounded-xl border border-white/10">
                  <p className="text-xs text-gray-400 mb-2">Part of</p>
                  <p className="text-white font-semibold text-sm">Harris Computer</p>
                  <p className="text-gray-400 text-xs mt-1">A Constellation Software company</p>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-700/50 mt-10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
              <p>&copy; {new Date().getFullYear()} Spectrum Software Solutions &mdash; Harris Computer. All rights reserved.</p>
              <div className="flex gap-6">
                <Link href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
                <Link href="#" className="hover:text-gray-300 transition-colors">Terms of Service</Link>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
