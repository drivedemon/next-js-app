"use client"

import type React from "react"
import {useState} from "react"
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/Card"
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/Forms/Table"
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/Tooltip"
import {ChevronUp, CircleHelp, Printer} from "lucide-react"
import {cn, moneyDecimal} from "@/lib/utils"
import {Button} from "@/components/Forms/Button"

interface Params {
  params: {
    memberId: string
  }
}

const AccountOverviewPage: React.FC<Params> = ({params: {memberId}}: Params) => {
  const [isOpenSummary, setIsOpenSummary] = useState<boolean>(false)

  return (
    <Card className="shadow-brand-primary h-full">
      <CardHeader>
        <div className="md:flex md:justify-between items-center">
          <CardTitle className="w-full">
            <div className="flex justify-between items-center">
              <p>Flexible Spending Account Statement</p>
              <Button variant="primary" className="flex gap-x-1">
                <Printer className="w-5 h-5" />
                Print
              </Button>
            </div>
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col gap-y-4">
        <Card>
          <CardContent>
            <div className="mx-2 flex flex-col text-sm lg:text-base gap-y-4">
              <div className="flex flex-col md:flex-row lg:flex-row items-center gap-x-2 font-bold lg:text-nowrap text-base lg:text-lg">
                <span>Account Information</span>
              </div>
              <div className="flex flex-col gap-y-2">
                <div className="grid grid-cols-12">
                  <p className="col-span-4 font-medium">Plan Year:</p>
                  <p className="col-span-8">2024</p>
                </div>
                <div className="grid grid-cols-12">
                  <p className="col-span-4 font-medium">Period:</p>
                  <p className="col-span-8">1 Jan 2024 - 31 Dec 2024</p>
                </div>
                <div className="grid grid-cols-12">
                  <p className="col-span-4 font-medium">Employee ID:</p>
                  <p className="col-span-8">1234</p>
                </div>
                <div className="grid grid-cols-12">
                  <p className="col-span-4 font-medium">Name:</p>
                  <p className="col-span-8">Rachel Svanhildr</p>
                </div>
                <div className="grid grid-cols-12">
                  <p className="col-span-4 font-medium">Account Owner:</p>
                  <p className="col-span-8">Rachel Svanhildr</p>
                </div>
                <div className="grid grid-cols-12">
                  <p className="col-span-4 font-medium">Statement Date:</p>
                  <p className="col-span-8">4 Jul 2024</p>
                </div>
              </div>
              <Card className="lg:w-3/4">
                <CardContent>
                  <div className="mx-2 flex flex-col text-sm lg:text-base gap-y-4">
                    <div className="flex flex-col md:flex-row lg:flex-row items-center gap-x-2 font-bold lg:text-nowrap text-base lg:text-lg">
                      <span className="shrink-0">Summary</span>
                      <span className="font-normal text-xs lg:text-sm">
                        (All prices are quoted in <span className="font-semibold">SGD</span>)
                      </span>
                    </div>
                    <div className="flex flex-col gap-y-1">
                      <div className="grid grid-cols-12 font-semibold">
                        <p className="col-span-6 lg:col-span-4">Entitlement</p>
                        <p className="col-span-6 lg:col-span-8 text-right">{moneyDecimal(5000)}</p>
                      </div>
                      <div className="grid grid-cols-12">
                        <div
                          className="col-span-6 lg:col-span-4 flex items-center cursor-pointer gap-x-0.5 group"
                          onClick={() => {
                            setIsOpenSummary(!isOpenSummary)
                          }}
                        >
                          <span className="text-nowrap group-hover:underline">Points Allocation</span>
                          <ChevronUp
                            className={cn(
                              isOpenSummary && "transform rotate-180",
                              "transition-transform duration-300 h-4 w-4 lg:h-6 lg:w-6 shrink-0",
                            )}
                          />
                        </div>
                        <p className="col-span-6 lg:col-span-8 text-right">{moneyDecimal(5000)}</p>
                      </div>
                      <div
                        className={cn(
                          isOpenSummary ? "max-h-screen" : "max-h-0",
                          "overflow-hidden transition-all duration-300",
                        )}
                      >
                        <div className="grid grid-cols-12">
                          <p className="col-span-6 lg:col-span-4 text-nowrap lg:indent-2">Employee Flex Points</p>
                          <p className="col-span-6 lg:col-span-8 text-right">{moneyDecimal(5000)}</p>
                        </div>
                      </div>
                      <div className="grid grid-cols-12 font-semibold border-gray-500 border-y py-1 my-1">
                        <p className="col-span-6 lg:col-span-4">Utilisation</p>
                        <p className="col-span-6 lg:col-span-8 text-right">{moneyDecimal(0)}</p>
                      </div>
                      <div className="grid grid-cols-12 font-semibold">
                        <p className="col-span-6 lg:col-span-4">Balance</p>
                        <p className="col-span-6 lg:col-span-8 text-right">{moneyDecimal(5000)}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
        <Table>
          <TableHeader>
            <TableRow className="bg-brand-primary hover:bg-brand-primary text-white">
              <TableHead className="lg:w-[5%]">No.</TableHead>
              <TableHead className="lg:w-[25%]">Transaction</TableHead>
              <TableHead className="lg:w-[25%]">Category</TableHead>
              <TableHead className="lg:text-nowrap lg:w-[15%]">Transacted On</TableHead>
              <TableHead className="lg:text-nowrap lg:w-[15%]">Effective On</TableHead>
              <TableHead className="lg:text-nowrap lg:w-[15%]">
                <div className="flex items-center gap-x-0.5">
                  <p>Amount</p>
                  <TooltipProvider delayDuration={0}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <CircleHelp className="h-4 w-4" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>All prices are quoted in (SGD)</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>Employee Flex Points</TableCell>
              <TableCell>Flex Points Allocation</TableCell>
              <TableCell> 2 Jan 2024</TableCell>
              <TableCell>1 Jan 2024</TableCell>
              <TableCell>{moneyDecimal(5000)}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

export default AccountOverviewPage
