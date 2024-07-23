import type React from "react"
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/Forms/Select"
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/Card"
import Info from "@/components/Icons/Info"
import {Skeleton} from "@/components/ui/Skeleton"

const Overview: React.FC = () => {
  const yearList = ["2014", "2013", "2012", "2011"]

  return (
    <Card className="shadow-brand-primary h-full">
      <CardHeader>
        <div className="md:flex md:justify-between items-center">
          <CardTitle>Benefits Overview</CardTitle>
          <div className="pt-4 lg:p-0 flex items-center">
            <p className="text-base font-bold text-gray-500 pr-3">Plan Year</p>
            <Select>
              <SelectTrigger className="w-fit">
                <SelectValue placeholder="2014" />
              </SelectTrigger>
              <SelectContent>
                {yearList.map((value) => (
                  <SelectItem key={value} value={value}>
                    {value}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div>
          <div className="bg-brand-primary p-4 rounded grid text-sm md:flex md:justify-between md:text-base text-white font-semibold">
            <p>Period: 1 Jan 2024 - 31 Dec 2024</p>
            <p>Statement Date: 14 Jun 2024</p>
          </div>
          <div className="flex space-x-2 px-4 py-3 mt-2 bg-blue-50 rounded 2xl:items-center">
            <div className="shrink-0 w-6 h-6 text-brand-primary">
              <Info />
            </div>
            <p className="text-gray-950 text-sm">
              Please confirm the Enrolment Selection at the Check Out page, otherwise your last approved benefits will
              be applied.
            </p>
          </div>
          <div className="pt-6">
            {/*---Insure plan content--*/}
            <div className="py-5">
              <p className="text-lg pb-6 text-gray-950 font-semibold">Sell Leave</p>
              <div className="grid grid-cols-2 lg:grid-cols-3 pt-1 text-sm">
                <div className="lg:col-span-1 py-2 px-3 rounded text-end bg-gray-100 text-brand-primary font-bold text-nowrap">
                  Selected Plan
                </div>
                <div className="lg:col-span-2 py-2 px-3 text-gray-950">Sell 2 Days</div>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-3 pt-1 text-sm">
                <div className="lg:col-span-1 py-2 px-3 rounded text-end bg-gray-100 text-brand-primary font-bold">
                  Current Plan
                </div>
                <div className="lg:col-span-2 py-2 px-3 text-gray-950">Not Sell</div>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-3 pt-1 text-sm">
                <div className="lg:col-span-1 py-2 px-3 rounded text-end bg-gray-100 text-brand-primary font-bold">
                  Members
                </div>
                <div className="lg:col-span-2 py-2 px-3 text-gray-950">Richard Tan 63</div>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-3 pt-1 text-sm">
                <div className="lg:col-span-1 py-2 px-3 rounded text-end bg-gray-100 text-brand-primary font-bold">
                  Guaranteed Acceptance
                </div>
                <div className="lg:col-span-2 py-2 px-3 text-gray-950">Not Sell</div>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-3 pt-1 text-sm">
                <div className="lg:col-span-1 py-2 px-3 rounded text-end bg-gray-100 text-brand-primary font-bold">
                  Pending Acceptance
                </div>
                <div className="lg:col-span-2 py-2 px-3 text-gray-950">Not Applicable</div>
              </div>
            </div>
            {/*---Insure plan content--*/}
            <div className="py-5">
              <p className="text-lg pb-6 text-gray-950 font-semibold">Group Term Life</p>
              <div className="grid grid-cols-2 lg:grid-cols-3 pt-1 text-sm">
                <div className="lg:col-span-1 py-2 px-3 rounded text-end bg-gray-100 text-brand-primary font-bold text-nowrap">
                  Selected Plan
                </div>
                <div className="lg:col-span-2 py-2 px-3 text-gray-950">36x Basic Monthly Salary</div>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-3 pt-1 text-sm">
                <div className="lg:col-span-1 py-2 px-3 rounded text-end bg-gray-100 text-brand-primary font-bold">
                  Current Plan
                </div>
                <div className="lg:col-span-2 py-2 px-3 text-gray-950">12x Basic Monthly Salary</div>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-3 pt-1 text-sm">
                <div className="lg:col-span-1 py-2 px-3 rounded text-end bg-gray-100 text-brand-primary font-bold">
                  Members
                </div>
                <div className="lg:col-span-2 py-2 px-3 text-gray-950">Richard Tan 63</div>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-3 pt-1 text-sm">
                <div className="lg:col-span-1 py-2 px-3 rounded text-end bg-gray-100 text-brand-primary font-bold">
                  Guaranteed Acceptance
                </div>
                <div className="lg:col-span-2 py-2 px-3 text-gray-950">$120,000.00</div>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-3 pt-1 text-sm">
                <div className="lg:col-span-1 py-2 px-3 rounded text-end bg-gray-100 text-brand-primary font-bold">
                  Pending Acceptance
                </div>
                <div className="lg:col-span-2 py-2 px-3 text-gray-950">$0.00</div>
              </div>
            </div>
            {/*---Insure plan content--*/}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default Overview
