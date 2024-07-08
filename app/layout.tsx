import "./globals.css"
import type {Metadata} from "next"
import {Inter as FontSans} from "next/font/google"
import Footer from "@/components/Footer/Footer"
import {Toaster} from "@/components/Toast/Toaster"
import {cn} from "@/lib/utils"
import type React from "react"
import type {ReactNode} from "react"

const fontSans = FontSans({subsets: ["latin"], variable: "--font-sans"})

export const metadata: Metadata = {
  title: "PrimeCare Member App",
  description: "Generated by create next app",
}

const RootLayout = ({children}: Readonly<{children: ReactNode}>) => {
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

export default RootLayout
