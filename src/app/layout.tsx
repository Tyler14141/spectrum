import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Spectrum Software Solutions | ERP for Local Government",
  description:
    "Spectrum is a comprehensive, scalable ERP platform designed for municipalities, counties, and utility districts. Financial management, HR, payroll, utility billing, and more.",
  keywords:
    "ERP, local government, municipality software, financial management, utility billing, payroll, Harris Computer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased text-spectrum-navy">{children}</body>
    </html>
  );
}
