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
import {PageProvider, usePage} from "@/components/Layouts/DashboardContext"
import {usePathname} from "next/navigation"

interface ParallelLayoutProps {
  children: ReactNode
}
const ClaimsLayout: React.FC<ParallelLayoutProps> = ({children}) => {
  const {isPage, setPage} = usePage()
  const menuTab = [
    {key: "track", name: "Track Claims", event: () => setPage("track")},
    {key: "create", name: "New Claims", event: () => setPage("create")},
    {key: "overview", name: "Account Overview", event: () => setPage("overview")},
    {key: "document", name: "Documents", event: () => setPage("document")},
  ]

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

const GetDefaultPage = (): string => {
  const currentPath = usePathname()
  return currentPath.split("/")[2] ?? "track"
}

const ClaimsLayoutWrapper: React.FC<ParallelLayoutProps> = ({children}) => (
  <PageProvider defaultPage={GetDefaultPage()}>
    <ClaimsLayout>{children}</ClaimsLayout>
  </PageProvider>
)

export default ClaimsLayoutWrapper
