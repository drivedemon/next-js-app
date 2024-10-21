import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/Card"
import type React from "react"
import ECardCarousel, {type IECard} from "@/components/ECards/ECardCarousel"

const ECard: React.FC = () => {
  const eCard: IECard[] = [
    {
      insurer_name: "drive",
      dob: "31/01/2000",
      policy_no: "123456789",
      holder_name: "drive holder",
      expired_date: "31/01/2024",
    },
    {
      insurer_name: "drive2",
      dob: "31/01/2000",
      policy_no: "1234567891",
      holder_name: "drive2 holder",
      expired_date: "31/01/2024",
    },
    {
      insurer_name: "drive3",
      dob: "31/01/2000",
      policy_no: "1234567891",
      holder_name: "drive3 holder",
      expired_date: "31/01/2024",
    },
  ]

  return (
    <div className="gap-y-4 flex-col items-center grid lg:max-w-none lg:grid-cols-12 lg:items-start lg:px-0">
      <div className="lg:col-span-3 lg:px-4 h-full flex flex-col lg:border-r border-gray-300">
        <Card className="shadow-brand-primary">
          <CardHeader className="text-center border-b border-gray-500">
            <CardTitle>Action</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-y-2 justify-center items-center text-center">
            <p className="text-sm">Select eCard for more information</p>
            <p className="text-sm lg:text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium adipisci autem consectetur cumque
              dolore ducimus enim, esse expedita explicabo facilis illo iusto laborum quae quia repudiandae soluta
              voluptas voluptatem.
            </p>
          </CardContent>
          <CardFooter className="flex gap-1 justify-between px-0" />
        </Card>
      </div>
      <div className="lg:col-span-9 grid grid-cols-12 gap-6 lg:px-4">
        <div className="col-span-12">
          <ECardCarousel eCard={eCard} />
        </div>
      </div>
    </div>
  )
}

export default ECard
