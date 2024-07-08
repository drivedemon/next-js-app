import type React from "react"
import type {ReactNode} from "react"

interface DashboardContentProps {
  children: ReactNode
  menuTab?: ReactNode
}

const DashboardContent: React.FC<DashboardContentProps> = ({children, menuTab}) => {
  return (
    <div className="gap-y-4 flex-col items-center grid lg:max-w-none lg:grid-cols-12 lg:items-start lg:px-0">
      {menuTab}
      <div className="lg:col-span-9 grid grid-cols-12 gap-4 lg:px-4">
        <div className="col-span-12">{children}</div>
      </div>
    </div>
  )
}

export default DashboardContent
