"use client"

import type React from "react"
import {SessionProvider} from "next-auth/react"
import {PageProvider} from "@/components/Layouts/DashboardContext"

export default function Provider({
  children,
  session,
}: {
  children: React.ReactNode
  session: any
}): React.ReactNode {
  return (
    <SessionProvider session={session}>
      <PageProvider defaultPage={null}>{children}</PageProvider>
    </SessionProvider>
  )
}
