"use client"

import "./globals.css"
import {Inter as FontSans} from "next/font/google"
import Footer from "@/components/Footer/Footer"
import {Toaster} from "@/components/Toast/Toaster"
import {cn} from "@/lib/utils"
import type React from "react"
import type {ReactNode} from "react"
import {PageProvider} from "@/components/Layouts/DashboardContext"

const fontSans = FontSans({subsets: ["latin"], variable: "--font-sans"})

interface ParallelLayoutProps {
  children: ReactNode
}

const RootLayout = ({children}: Readonly<ParallelLayoutProps>) => {
  return (
    <html lang="en">
      <body
        className={cn(fontSans.className, "text-gray-950 relative")}
        style={{
          minHeight: "calc(var(--vh, 1vh) * 100)",
          paddingRight: "calc(0 - var(--removed-body-scroll-bar-size)) !important",
        }}
      >
        <Toaster />
        <div className="bg-gray-100">{children}</div>
        <Footer />
      </body>
    </html>
  )
}

const RootLayoutWrapper: React.FC<ParallelLayoutProps> = ({children}) => (
  <PageProvider defaultPage={null}>
    <RootLayout>{children}</RootLayout>
  </PageProvider>
)

export default RootLayoutWrapper
