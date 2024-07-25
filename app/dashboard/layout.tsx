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
import type {Metadata} from "next"

export const metadata: Metadata = {
  title: "Dashboard",
}

interface ParallelLayoutProps {
  children: ReactNode
}

const DashboardPageLayout: React.FC<ParallelLayoutProps> = ({children}) => {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-y-4 mb-6 lg:mx-8">
        <p className="font-bold text-4xl">Dashboard</p>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <p>Home</p>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <Slash />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      {children}
    </DashboardLayout>
  )
}

export default DashboardPageLayout
