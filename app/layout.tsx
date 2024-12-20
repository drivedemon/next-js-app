import "./globals.css"
import {Inter as FontSans} from "next/font/google"
import Footer from "@/components/Footer/Footer"
import {Toaster} from "@/components/Toast/Toaster"
import {cn} from "@/lib/utils"
import type React from "react"
import type {ReactNode} from "react"
import Provider from "@/providers/ClientProvider"
import {getServerSession} from "next-auth/next"
import {authOptions, type IAuthUserSession} from "@/app/api/auth/[...nextauth]/authOptions"

const fontSans = FontSans({subsets: ["latin"], variable: "--font-sans"})

interface ParallelLayoutProps {
  children: ReactNode
}

const RootLayout = async ({children}: Readonly<ParallelLayoutProps>) => {
  const session: IAuthUserSession | null = await getServerSession(authOptions)

  return (
    <html lang="en">
      <body
        className={cn(fontSans.className, "text-gray-950 bg-gray-100 flex flex-col")}
        style={{
          minHeight: "calc(var(--vh, 1vh) * 100)",
          paddingRight: "calc(0 - var(--removed-body-scroll-bar-size)) !important",
        }}
      >
        <Toaster />
        <Provider session={session}>
          <div className="flex-grow flex flex-col">{children}</div>
        </Provider>
        <Footer />
      </body>
    </html>
  )
}

export default RootLayout
