import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/Card"
import {Button} from "@/components/Forms/Button"
import type React from "react"
import getDashboard from "@/lib/dashboardService"
import {authOptions, type IAuthUserSession} from "@/app/api/auth/[...nextauth]/authOptions"
import {getServerSession} from "next-auth/next"
import type {TDashboardModule} from "@/types/Dashboard"
import DashboardModule from "@/components/Dashboard/DashboardModule"

const Dashboard: React.FC = async () => {
  const session: IAuthUserSession | null = await getServerSession(authOptions)
  const getDashboardModules: TDashboardModule[] | null = await getDashboard(session?.user || null)

  return (
    <div className="gap-y-4 flex-col items-center grid lg:max-w-none lg:grid-cols-12 lg:items-start lg:px-0">
      <div className="lg:col-span-3 lg:px-4 h-full flex flex-col lg:border-r border-gray-300">
        <Card>
          <CardHeader className="text-center border-b border-gray-500">
            {JSON.stringify(session)}

            <CardTitle>Actions</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-y-2 justify-center items-center text-center">
            <p className="text-sm">You can now select your benefits until</p>
            <p className="text-brand-primary text-sm lg:text-base font-semibold">31st Dec 2024 11:59 PM</p>
            <p className="text-sm">214 days 6 hours and 28 minutes left</p>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button variant="primary" className="sm:px-20 md:px-14">
              Select Benefits
            </Button>
          </CardFooter>
        </Card>
      </div>
      <div className="lg:col-span-9 grid grid-cols-12 gap-6 lg:px-4">
        <div className="col-span-12">
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Message Board</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-semibold">Welcome to our Benefits Portal</p>
              <p>
                To familiarize yourself with the portal, we encourage you to view the videos on the portal found on
                "Need Help" icon on the top right hand corner. The "Claims" video is useful as a guide on how to submit
                your claims.
              </p>
              <p className="pt-4">
                Please call our hotline +65 6220 9119 or email: help@ppcxa.com should you require further clarification.
              </p>
            </CardContent>
          </Card>
        </div>

        <DashboardModule modules={getDashboardModules} />
      </div>
    </div>
  )
}

export default Dashboard
