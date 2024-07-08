import type React from "react"
import type {ReactNode} from "react"
import DashboardLayout from "@/components/Layouts/DashboardLayout"

interface ParallelLayoutProps {
  children: ReactNode
}

const ProfileLayout: React.FC<ParallelLayoutProps> = ({children}) => {
  return (
    <DashboardLayout>
      <p className="mb-6 mx-8 font-bold text-4xl">My Profile</p>
      {children}
    </DashboardLayout>
  )
}

export default ProfileLayout
