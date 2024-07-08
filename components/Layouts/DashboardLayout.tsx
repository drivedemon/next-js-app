import type React from "react"
import type {ReactNode} from "react"
import Header from "@/components/Header/Header"

interface ParallelLayoutProps {
  children: ReactNode
}

const DashboardLayout: React.FC<ParallelLayoutProps> = ({children}) => {
  return (
    <>
      <Header user={null} />
      <div className="container px-4 lg:px-0 py-4 min-h-screen">{children}</div>
    </>
  )
}

export default DashboardLayout
