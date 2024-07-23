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
import {PageProvider, usePage} from "@/components/Layouts/DashboardContext"
import DashboardContent from "@/components/Layouts/DashboardContent"
import DashboardMenuTab from "@/components/Layouts/DashboardMenuTab"
import {usePathname} from "next/navigation"

interface ParallelLayoutProps {
  children: ReactNode
}

const BenefitsLayout: React.FC<ParallelLayoutProps> = ({children}) => {
  const {isPage, setPage} = usePage()
  const menuTab = [
    {key: "overview", name: "Benefits Statement", event: () => setPage("overview")},
    {key: "create", name: "Benefits Selection", event: () => setPage("create")},
    {key: "document", name: "Documents", event: () => setPage("document")},
    {key: "summary", name: "Total Rewards Statement", event: () => setPage("summary")},
  ]

  return (
    <DashboardLayout>
      <div className="flex flex-col gap-y-4 mb-6 lg:mx-8">
        <p className="font-bold text-4xl">Benefits</p>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <p>Home</p>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <Slash />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink href="/benefits">Benefits</BreadcrumbLink>
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
  return currentPath.split("/")[2] ?? "overview"
}

const BenefitsLayoutWrapper: React.FC<ParallelLayoutProps> = ({children}) => (
  <PageProvider defaultPage={GetDefaultPage()}>
    <BenefitsLayout>{children}</BenefitsLayout>
  </PageProvider>
)

export default BenefitsLayoutWrapper
