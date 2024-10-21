"use client"

import type React from "react"
import type {ReactNode} from "react"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/Breadcrumb"
import {Slash} from "lucide-react"
import DashboardLayout from "@/components/Layouts/DashboardLayout"
import DashboardMenuTab from "@/components/Layouts/DashboardMenuTab"
import DashboardContent from "@/components/Layouts/DashboardContent"
import {usePage} from "@/components/Layouts/DashboardContext"
import {useLayoutEffect} from "react"

interface ParallelLayoutProps {
  children: ReactNode
}

const ClaimsLayout: React.FC<ParallelLayoutProps> = ({children}) => {
  const {isPage, setPage} = usePage()
  const menuTab = [
    {
      key: "claim_track",
      name: "Track Claims",
      children: [
        {key: "claim_track", name: "Track Claims", event: () => setPage("claim_track")},
        {key: "claim_completed", name: "Completed Claims", event: () => setPage("claim_completed")},
      ],
      event: () => setPage("claim_track"),
    },
    {key: "claim_create", name: "New Claims", event: () => setPage("claim_create")},
    {key: "claim_document", name: "Policy Documents", event: () => setPage("claim_document")},
    // {key: "overview", name: "Account Overview", event: () => setPage("overview")},
  ]

  useLayoutEffect(() => {
    setPage(isPage?.includes("claim") ? isPage : "claim_track")
  }, [])

  return (
    <DashboardLayout>
      <div className="flex flex-col gap-y-4 mb-6 lg:mx-8">
        <p className="font-bold text-4xl">Claims</p>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <p>Home</p>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <Slash />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink href="/claims">Claims</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <DashboardContent menuTab={<DashboardMenuTab menu={menuTab} current={isPage} />}>{children}</DashboardContent>
    </DashboardLayout>
  )
}

export default ClaimsLayout
