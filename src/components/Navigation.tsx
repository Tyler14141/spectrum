'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Phone, ChevronDown, Mail } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)
  const [resourcesOpen, setResourcesOpen] = useState(false)

  return (
    <>
      {/* Top Utility Bar */}
      <div className="bg-[#0e3d26] text-gray-300">
        <div className="container mx-auto px-4 py-2">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-5">
              <div className="flex items-center">
                <Phone className="w-3.5 h-3.5 mr-1.5" />
                <span>716-402-2812</span>
              </div>
              <div className="hidden md:flex items-center">
                <Mail className="w-3.5 h-3.5 mr-1.5" />
                <span>AHaenlin@harriscomputer.com</span>
              </div>
            </div>
            <div className="flex items-center space-x-5">
              <span className="hidden sm:inline text-gray-400">Harris Computer</span>
              <Link href="/contact" className="hover:text-white transition-colors">
                Contact
              </Link>
              <Link href="/contact" className="bg-[#E8913A] text-white px-3 py-1 rounded text-xs font-semibold hover:bg-[#d07e2f] transition-colors">
                Client Login
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50 border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-[#1a7a4b] rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white font-black text-xl">S</span>
                </div>
                <div>
                  <span className="text-2xl font-black text-[#1a7a4b]">Spectrum</span>
                  <span className="block text-[10px] uppercase tracking-[0.2em] text-[#22a366] font-semibold -mt-1">Software Solutions</span>
                </div>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-1">
              {/* Products Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setProductsOpen(true)}
                onMouseLeave={() => setProductsOpen(false)}
              >
                <button className="text-gray-700 hover:text-[#1a7a4b] font-medium transition-colors px-4 py-2 rounded-lg hover:bg-gray-50 flex items-center">
                  Products
                  <ChevronDown className={`w-4 h-4 ml-1 transition-transform ${productsOpen ? 'rotate-180' : ''}`} />
                </button>

                {productsOpen && (
                  <div className="absolute top-full left-0 mt-1 w-72 bg-white shadow-xl rounded-xl border border-gray-100 py-3 z-50">
                    <div className="px-4 pb-2 mb-2 border-b border-gray-100">
                      <span className="text-xs uppercase tracking-wider text-gray-400 font-semibold">Financial & Operations</span>
                    </div>
                    <Link href="/products/financial-management" className="block px-4 py-2.5 hover:bg-[#e8f5ee] group">
                      <span className="font-semibold text-gray-800 group-hover:text-[#1a7a4b]">Financial Management</span>
                      <span className="block text-xs text-gray-500 mt-0.5">Budgeting, accounting, reporting</span>
                    </Link>
                    <Link href="/products/procurement" className="block px-4 py-2.5 hover:bg-[#e8f5ee] group">
                      <span className="font-semibold text-gray-800 group-hover:text-[#1a7a4b]">Procurement & Spending Control</span>
                      <span className="block text-xs text-gray-500 mt-0.5">Purchase orders, vendor management</span>
                    </Link>
                    <Link href="/products/hr-payroll" className="block px-4 py-2.5 hover:bg-[#e8f5ee] group">
                      <span className="font-semibold text-gray-800 group-hover:text-[#1a7a4b]">Human Resources & Payroll</span>
                      <span className="block text-xs text-gray-500 mt-0.5">Employee management, benefits, payroll</span>
                    </Link>
                    <div className="px-4 pb-2 pt-3 mb-2 border-b border-gray-100">
                      <span className="text-xs uppercase tracking-wider text-gray-400 font-semibold">Revenue & Infrastructure</span>
                    </div>
                    <Link href="/products/revenue-taxation" className="block px-4 py-2.5 hover:bg-[#e8f5ee] group">
                      <span className="font-semibold text-gray-800 group-hover:text-[#1a7a4b]">Revenue & Taxation</span>
                      <span className="block text-xs text-gray-500 mt-0.5">Tax billing, collection, compliance</span>
                    </Link>
                    <Link href="/products/asset-management" className="block px-4 py-2.5 hover:bg-[#e8f5ee] group">
                      <span className="font-semibold text-gray-800 group-hover:text-[#1a7a4b]">Asset & Infrastructure Management</span>
                      <span className="block text-xs text-gray-500 mt-0.5">Asset tracking, maintenance, lifecycle</span>
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/solutions"
                className="text-gray-700 hover:text-[#1a7a4b] font-medium transition-colors px-4 py-2 rounded-lg hover:bg-gray-50"
              >
                Solutions
              </Link>

              {/* Resources Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setResourcesOpen(true)}
                onMouseLeave={() => setResourcesOpen(false)}
              >
                <button className="text-gray-700 hover:text-[#1a7a4b] font-medium transition-colors px-4 py-2 rounded-lg hover:bg-gray-50 flex items-center">
                  Resources
                  <ChevronDown className={`w-4 h-4 ml-1 transition-transform ${resourcesOpen ? 'rotate-180' : ''}`} />
                </button>

                {resourcesOpen && (
                  <div className="absolute top-full right-0 mt-1 w-56 bg-white shadow-xl rounded-xl border border-gray-100 py-3 z-50">
                    <Link href="/contact" className="block px-4 py-2.5 hover:bg-[#e8f5ee] text-gray-700 hover:text-[#1a7a4b] font-medium">
                      Training
                    </Link>
                    <Link href="/contact" className="block px-4 py-2.5 hover:bg-[#e8f5ee] text-gray-700 hover:text-[#1a7a4b] font-medium">
                      Customer Support
                    </Link>
                    <Link href="/contact" className="block px-4 py-2.5 hover:bg-[#e8f5ee] text-gray-700 hover:text-[#1a7a4b] font-medium">
                      Webinars & Events
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/about"
                className="text-gray-700 hover:text-[#1a7a4b] font-medium transition-colors px-4 py-2 rounded-lg hover:bg-gray-50"
              >
                About
              </Link>

              <Link
                href="/contact"
                className="ml-2 bg-gradient-to-r from-[#1a7a4b] to-[#22a366] text-white px-6 py-2.5 rounded-lg font-semibold hover:shadow-lg hover:shadow-[#1a7a4b]/25 transition-all duration-300"
              >
                Request a Demo
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-gray-700 p-2 rounded-lg hover:bg-gray-100"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="lg:hidden pb-6 border-t border-gray-100 pt-4 space-y-1">
              <div className="px-3 py-2">
                <span className="text-xs uppercase tracking-wider text-gray-400 font-semibold">Products</span>
              </div>
              <Link href="/products/financial-management" className="block py-2.5 text-gray-700 hover:text-[#1a7a4b] hover:bg-[#e8f5ee] px-4 rounded-lg" onClick={() => setIsOpen(false)}>
                Financial Management
              </Link>
              <Link href="/products/procurement" className="block py-2.5 text-gray-700 hover:text-[#1a7a4b] hover:bg-[#e8f5ee] px-4 rounded-lg" onClick={() => setIsOpen(false)}>
                Procurement & Spending Control
              </Link>
              <Link href="/products/hr-payroll" className="block py-2.5 text-gray-700 hover:text-[#1a7a4b] hover:bg-[#e8f5ee] px-4 rounded-lg" onClick={() => setIsOpen(false)}>
                Human Resources & Payroll
              </Link>
              <Link href="/products/revenue-taxation" className="block py-2.5 text-gray-700 hover:text-[#1a7a4b] hover:bg-[#e8f5ee] px-4 rounded-lg" onClick={() => setIsOpen(false)}>
                Revenue & Taxation
              </Link>
              <Link href="/products/asset-management" className="block py-2.5 text-gray-700 hover:text-[#1a7a4b] hover:bg-[#e8f5ee] px-4 rounded-lg" onClick={() => setIsOpen(false)}>
                Asset & Infrastructure Management
              </Link>

              <div className="border-t border-gray-100 my-3"></div>

              <Link href="/solutions" className="block py-2.5 text-gray-700 hover:text-[#1a7a4b] hover:bg-[#e8f5ee] px-4 rounded-lg font-medium" onClick={() => setIsOpen(false)}>
                Solutions
              </Link>
              <Link href="/about" className="block py-2.5 text-gray-700 hover:text-[#1a7a4b] hover:bg-[#e8f5ee] px-4 rounded-lg font-medium" onClick={() => setIsOpen(false)}>
                About
              </Link>
              <Link href="/contact" className="block py-2.5 text-gray-700 hover:text-[#1a7a4b] hover:bg-[#e8f5ee] px-4 rounded-lg font-medium" onClick={() => setIsOpen(false)}>
                Contact
              </Link>

              <div className="pt-3 px-3">
                <Link
                  href="/contact"
                  className="block text-center bg-gradient-to-r from-[#1a7a4b] to-[#22a366] text-white px-6 py-3 rounded-lg font-semibold"
                  onClick={() => setIsOpen(false)}
                >
                  Request a Demo
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  )
}
