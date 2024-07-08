import type {Metadata} from "next"
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/Card"
import {FileInput, ListTodo, Pointer, Umbrella, Wallet} from "lucide-react"
import {Button} from "@/components/Forms/Button"
import type React from "react"

export const metadata: Metadata = {
  title: "Dashboard",
}

const Dashboard: React.FC = () => {
  return (
    <div className="gap-y-4 flex-col items-center grid lg:max-w-none lg:grid-cols-12 lg:items-start lg:h-screen lg:px-0">
      <div className="lg:col-span-3 lg:px-4 h-full flex flex-col lg:border-r border-gray-300">
        <Card className="shadow-brand-primary">
          <CardHeader className="text-center border-b border-gray-500">
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
          <Card className="shadow-brand-primary h-full">
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

        <div className="col-span-12 sm:col-span-6 lg:col-span-4">
          <Card className="shadow-brand-primary hover:drop-shadow-lg cursor-pointer h-full">
            <CardHeader className="px-0">
              <CardTitle className="flex gap-x-2">
                <Pointer className="text-brand-primary" />
                <span className="text-lg font-semibold">Benefits Selection</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="px-0">
              <p className="text-sm">Select your Group Insurance coverage</p>
            </CardContent>
            <CardFooter />
          </Card>
        </div>

        <div className="col-span-12 sm:col-span-6 lg:col-span-4">
          <Card className="shadow-brand-primary hover:drop-shadow-lg cursor-pointer h-full">
            <CardHeader className="px-0">
              <CardTitle className="flex gap-x-2">
                <FileInput className="text-brand-primary" />
                <span className="text-lg font-semibold">Submit claims</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="px-0">
              <p className="text-sm">Submit your Insurance and Flex claim online</p>
            </CardContent>
            <CardFooter />
          </Card>
        </div>

        <div className="col-span-12 sm:col-span-6 lg:col-span-4">
          <Card className="shadow-brand-primary hover:drop-shadow-lg cursor-pointer h-full">
            <CardHeader className="px-0">
              <CardTitle className="flex gap-x-2">
                <Umbrella className="text-brand-primary" />
                <span className="text-lg font-semibold">Benefits Coverage</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="px-0">
              <p className="text-sm">Check your Group Insurance coverage</p>
            </CardContent>
            <CardFooter />
          </Card>
        </div>

        <div className="col-span-12 sm:col-span-6 lg:col-span-4">
          <Card className="shadow-brand-primary hover:drop-shadow-lg cursor-pointer h-full">
            <CardHeader className="px-0">
              <CardTitle className="flex gap-x-2">
                <ListTodo className="text-brand-primary" />
                <span className="text-lg font-semibold">Track claims</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="px-0">
              <p className="text-sm">Check you claim status</p>
            </CardContent>
            <CardFooter />
          </Card>
        </div>

        <div className="col-span-12 sm:col-span-6 lg:col-span-4">
          <Card className="shadow-brand-primary hover:drop-shadow-lg cursor-pointer h-full">
            <CardHeader className="px-0">
              <CardTitle className="flex gap-x-2">
                <Wallet className="text-brand-primary" />
                <span className="text-lg font-semibold">Statement of accounts</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="px-0">
              <p className="text-sm">Check your account utilization</p>
            </CardContent>
            <CardFooter />
          </Card>
        </div>

        <div className="col-span-12 sm:col-span-6 lg:col-span-4 min-h-20">
          <Card className="shadow-brand-primary hover:drop-shadow-lg cursor-pointer h-full">
            <CardHeader className="px-0">
              <CardTitle className="flex gap-x-2">
                <FileInput className="text-brand-primary" />
                <span className="text-lg font-semibold">Documents</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="px-0">
              <p className="text-sm">User guide, Policy documents, Claims form</p>
            </CardContent>
            <CardFooter />
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
