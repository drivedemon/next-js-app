import type React from "react"
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/Card"
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/Forms/Select"
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/Forms/Table"
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/Tooltip"
import {CircleHelp, EyeIcon} from "lucide-react"
import {moneyDecimal} from "@/lib/utils"
import Link from "next/link"

const Overview: React.FC = () => {
  const yearList = ["2014", "2013", "2012", "2011"]

  return (
    <Card className="shadow-brand-primary h-full">
      <CardHeader>
        <div className="md:flex md:justify-between items-center">
          <CardTitle>Account Overview</CardTitle>
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
        <Table>
          <TableHeader>
            <TableRow className="bg-brand-primary hover:bg-brand-primary text-white">
              <TableHead className="lg:w-[30%]">Account</TableHead>
              <TableHead className="lg:w-[20%]">User</TableHead>
              <TableHead className="lg:w-[15%]">
                <div className="flex items-center gap-x-0.5">
                  <p>Entitlement</p>
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
              <TableHead className="lg:w-[15%]">
                <div className="flex items-center gap-x-0.5">
                  <p>Utilised</p>
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
              <TableHead className="lg:w-[15%]">
                <div className="flex items-center gap-x-0.5">
                  <p>Balance</p>
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
              <TableHead className="lg:w-[5%]">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-semibold text-brand-primary">
                <Link href={`claims/overview/${1}`} className="hover:underline">
                  Flexible Spending Account
                </Link>
              </TableCell>
              <TableCell>Rentorl Svanhildr</TableCell>
              <TableCell>{moneyDecimal(5000)}</TableCell>
              <TableCell>{moneyDecimal(0)}</TableCell>
              <TableCell>{moneyDecimal(5000)}</TableCell>
              <TableCell>
                <Link href={`claims/overview/${1}`} className="flex items-center justify-center">
                  <EyeIcon className="w-5 h-5 text-brand-primary cursor-pointer" />
                </Link>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-semibold text-brand-primary">
                <Link href={`claims/overview/${2}`} className="hover:underline">
                  Medical Spending Account
                </Link>
              </TableCell>
              <TableCell>Rentorl Svanhildr</TableCell>
              <TableCell>{moneyDecimal(5000)}</TableCell>
              <TableCell>{moneyDecimal(0)}</TableCell>
              <TableCell>{moneyDecimal(5000)}</TableCell>
              <TableCell>
                <Link href={`claims/overview/${2}`} className="flex items-center justify-center">
                  <EyeIcon className="w-5 h-5 text-brand-primary cursor-pointer" />
                </Link>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

export default Overview
