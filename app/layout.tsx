import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import  "./globals.css";

import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Beauty Artist - Professional Makeup & Beauty Services",
  description: "Professional makeup artist offering bridal, special occasion, and everyday beauty services.",
}

// filepath: e:\Intern - NETWITX\Beauty Salon\beauty-salon\app\layout.tsx
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-red-500`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
};