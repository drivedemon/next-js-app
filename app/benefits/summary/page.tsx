"use client"

import type React from "react"
import {useEffect} from "react"
import Link from "next/link"
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/Card"
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/Forms/Select"
import {Table, TableBody, TableCell, TableRow} from "@/components/Forms/Table"
import {Donut} from "@/components/Charts/Donut"

const Summary: React.FC = () => {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById("header")
      const divContent = document.getElementById("divContent")

      if (!header || !divContent) {
        return
      }

      if (header.getBoundingClientRect().bottom > divContent.getBoundingClientRect().top) {
        const firstChild = divContent.firstElementChild as HTMLElement | null
        if (firstChild) {
          firstChild.style.top = `${header.getBoundingClientRect().bottom + 20}px`
        }
        window.removeEventListener("scroll", handleScroll)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <Card className="shadow-brand-primary h-full">
      <CardHeader>
        <CardTitle>Total Rewards Statement</CardTitle>
      </CardHeader>
      <CardContent>
        <div id="divContent" className="grid grid-cols-1 md:grid-cols-3 gap-y-8 md:gap-x-2 lg:gap-x-4">
          <div className="col-span-1 md:h-fit md:sticky flex flex-col gap-y-6">
            <div className="flex justify-center">
              <Select>
                <SelectTrigger className="w-fit">
                  <SelectValue placeholder="01 Jan 2023-31 Dec 2023" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="01 Jan 2023-31 Dec 2023">01 Jan 2023-31 Dec 2023</SelectItem>
                  <SelectItem value="01 Jan 2022-31 Dec 2022">01 Jan 2022-31 Dec 2022</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="text-xs text-center">
              <Donut />
              <p>As of 01-Feb-2023</p>
              <p>All figures are in SGD</p>
            </div>
            <div className="lg:px-5 flex flex-col gap-y-2">
              <div className="flex">
                <span className="p-2.5 h-fit bg-brand-primary rounded-sm" />
                <Link href="#totalCash" className="text-base font-bold text-green-700 pl-2 leading-5">
                  Total Cash
                </Link>
              </div>
              <p className="text-sm pl-7">HKD 193,000.00</p>
              <Link href="#otherBenefits" className="text-base font-bold text-green-700 pl-7">
                Other Benefits
              </Link>
              <Link href="#learnAndDev" className="text-base font-bold text-green-700 pl-7">
                Learning & Development
              </Link>
              <div className="flex">
                <span className="p-2.5 h-fit bg-orange-500 rounded-sm" />
                <Link href="#retirementBenefits" className="text-base font-bold text-green-700 pl-2 leading-5">
                  Retirement Benefits
                </Link>
              </div>
              <p className="text-sm pl-7">HKD 19,000.00</p>
              <div className="flex">
                <span className="p-2.5 h-fit bg-green-600 rounded-sm" />
                <Link href="#groupInsuranceBenefits" className="text-base font-bold text-green-700 pl-2 leading-5">
                  Group Insurance Benefits
                </Link>
              </div>
              <p className="text-sm pl-7">HKD 11,828.00</p>
              <div className="flex">
                <span className="p-2.5 h-fit bg-purple-500 rounded-sm" />
                <Link href="#flexibleSpendingAccount" className="text-base font-bold text-green-700 pl-2 leading-5">
                  Flexible Spending Account
                </Link>
              </div>
              <p className="text-sm pl-7">HKD 11,828.00</p>
            </div>
            <div className="bg-gray-100 rounded p-2">
              <p className="text-xs">
                Important: This statement is intended to summarize your company provided benefits and earnings. The
                annual values shown are based on your eligibility, benefit selections, and earning as of 08-Mar-2023 and
                assume a full year’s employment. Portions of your deferred pay or retirement accounts are not included
                in your above annual cost. In case of discrepancy in your statement, please contact Human Resources.
                Should any information in this statement conflict with legal plan documents, the terms in the plan
                documents and collective bargaining agreements (if applicable) shall prevail.
              </p>
            </div>
          </div>
          <div className="col-span-1 md:col-span-2 flex flex-col gap-y-10">
            <div id="totalCash">
              <div className="bg-gray-100 rounded p-2 mb-3 lg:mb-5">
                <p className="text-lg font-bold">Total Cash</p>
              </div>
              <div className="flex flex-col ml-2 gap-y-3 lg:gap-y-5">
                <p className="text-sm">All figures are in HKD, rounded to nearest dollar</p>
                <p className="text-base font-semibold">Annual Base Salary</p>
                <Table>
                  <TableBody>
                    <TableRow className="bg-transparent hover:bg-transparent">
                      <TableCell className="text-base w-[50%]">Annual Base Salary</TableCell>
                      <TableCell className="text-base w-[50%]">SGD 140,000.00</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
                <p className="text-base font-semibold">
                  Variable Cash Sales Commission and Incentive % of Annual Base Salary
                </p>
                <Table>
                  <TableBody>
                    <TableRow className="bg-transparent hover:bg-transparent">
                      <TableCell className="text-base w-[50%]">Bonus (BU)</TableCell>
                      <TableCell className="text-base w-[50%]">SGD 9,000.00</TableCell>
                    </TableRow>
                    <TableRow className="bg-transparent hover:bg-transparent">
                      <TableCell className="text-base w-[50%]">Bonus (IBO)</TableCell>
                      <TableCell className="text-base w-[50%]">SGD 17,500.00</TableCell>
                    </TableRow>
                    <TableRow className="bg-transparent hover:bg-transparent">
                      <TableCell className="text-base w-[50%]">Bonus (PMO)</TableCell>
                      <TableCell className="text-base w-[50%]">SGD 9,000.00</TableCell>
                    </TableRow>
                    <TableRow className="bg-transparent hover:bg-transparent">
                      <TableCell className="text-base w-[50%]">Bonus (WPS)</TableCell>
                      <TableCell className="text-base w-[50%]">SGD 17,500.00</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
                <p className="text-sm font-medium">
                  The figure here is assuming situation at 100% of targeted performance. For actual pay-out amount,
                  please refer to HR guideline
                </p>
                <p className="text-base font-semibold">Leaves</p>
                <Table>
                  <TableBody>
                    <TableRow className="bg-transparent hover:bg-transparent">
                      <TableCell className="text-base w-[50%]">Leaves - Annual Leave</TableCell>
                      <TableCell className="text-base w-[50%]">18 day(s)</TableCell>
                    </TableRow>
                    <TableRow className="bg-transparent hover:bg-transparent">
                      <TableCell className="text-base w-[50%]">Leaves - Work from Home</TableCell>
                      <TableCell className="text-base w-[50%]">4 days per month</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
                <p className="text-sm font-medium">
                  The figure here is assuming situation at 100% of targeted performance. For actual pay-out amount,
                  please refer to HR guideline
                </p>
              </div>
            </div>
            <div id="otherBenefits">
              <div className="bg-gray-100 rounded p-2 mb-3 lg:mb-5">
                <p className="text-lg font-bold">Other Benefits</p>
              </div>
              <div className="flex flex-col ml-2 gap-y-3 lg:gap-y-5">
                <p className="text-base font-semibold">Other benefits</p>
                <Table>
                  <TableBody>
                    <TableRow className="bg-transparent hover:bg-transparent">
                      <TableCell className="text-base w-[50%]">
                        Company Discounted Goods - Free goods & Staff Purchase Scheme
                      </TableCell>
                      <TableCell className="text-base w-[50%]">
                        6000 SGD Freegoods & 6000 SGD Staff purchase every quarter
                      </TableCell>
                    </TableRow>
                    <TableRow className="bg-transparent hover:bg-transparent">
                      <TableCell className="text-base w-[50%]">
                        Company Discounted Goods - Employee Exclusive Event
                      </TableCell>
                      <TableCell className="text-base w-[50%]">4 Friends & Family Sale</TableCell>
                    </TableRow>
                    <TableRow className="bg-transparent hover:bg-transparent">
                      <TableCell className="text-base w-[50%]">
                        2020 Employee Share Ownership Plan - 2020 ESOP Share(s) Purchased
                      </TableCell>
                      <TableCell className="text-base w-[50%]">2 Share(s)</TableCell>
                    </TableRow>
                    <TableRow className="bg-transparent hover:bg-transparent">
                      <TableCell className="text-base w-[50%]">
                        2020 Employee Share Ownership Plan - 2020 ESOP Free Share(s)
                      </TableCell>
                      <TableCell className="text-base w-[50%]">2 Share(s)</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </div>
            <div id="learnAndDev">
              <div className="bg-gray-100 rounded p-2 mb-3 lg:mb-5">
                <p className="text-lg font-bold">Learning & Development</p>
              </div>
              <div className="flex flex-col ml-2 gap-y-3 lg:gap-y-5">
                <p className="text-base font-semibold">Learning & Development</p>
                <Table>
                  <TableBody>
                    <TableRow className="bg-transparent hover:bg-transparent">
                      <TableCell className="text-base w-[50%]">Workshop</TableCell>
                      <TableCell className="text-base w-[50%]">40 hours</TableCell>
                    </TableRow>
                    <TableRow className="bg-transparent hover:bg-transparent">
                      <TableCell className="text-base w-[50%]">Learning Hours</TableCell>
                      <TableCell className="text-base w-[50%]">30 hours</TableCell>
                    </TableRow>
                    <TableRow className="bg-transparent hover:bg-transparent">
                      <TableCell className="text-base w-[50%]">Total learning Hours</TableCell>
                      <TableCell className="text-base w-[50%]">70 hours</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </div>
            <div id="retirementBenefits">
              <div className="bg-gray-100 rounded p-2 mb-3 lg:mb-5">
                <p className="text-lg font-bold">Retirement Benefits</p>
              </div>
              <div className="flex flex-col ml-2 gap-y-3 lg:gap-y-5">
                <p className="text-base font-semibold">Retirement Title</p>
                <Table>
                  <TableBody>
                    <TableRow className="bg-transparent hover:bg-transparent">
                      <TableCell className="text-base w-[50%]">Retirement Title</TableCell>
                      <TableCell className="text-base w-[50%]">CPF</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
                <p className="text-base font-semibold">Employer Mandatory Contribution</p>
                <Table>
                  <TableBody>
                    <TableRow className="bg-transparent hover:bg-transparent">
                      <TableCell className="text-base w-[50%]">
                        Employer Mandatory Contribution (% of Base Salary)
                      </TableCell>
                      <TableCell className="text-base w-[50%]">5%</TableCell>
                    </TableRow>
                    <TableRow className="bg-transparent hover:bg-transparent">
                      <TableCell className="text-base w-[50%]">Employer Mandatory Contribution</TableCell>
                      <TableCell className="text-base w-[50%]">SGD 7,000.00</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
                <p className="text-base font-semibold">Employee Mandatory Contribution</p>
                <Table>
                  <TableBody>
                    <TableRow className="bg-transparent hover:bg-transparent">
                      <TableCell className="text-base w-[50%]">
                        Employer Mandatory Contribution (% of Base Salary)
                      </TableCell>
                      <TableCell className="text-base w-[50%]">5%</TableCell>
                    </TableRow>
                    <TableRow className="bg-transparent hover:bg-transparent">
                      <TableCell className="text-base w-[50%]">Employer Mandatory Contribution</TableCell>
                      <TableCell className="text-base w-[50%]">SGD 5,000.00</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
                <p className="text-base font-semibold">Employee Mandatory Contribution</p>
                <Table>
                  <TableBody>
                    <TableRow className="bg-transparent hover:bg-transparent">
                      <TableCell className="text-base w-[50%]">
                        Employer Voluntary Contribution (% of Base Salary)
                      </TableCell>
                      <TableCell className="text-base w-[50%]">5% of base salary - SGD 1750 (if any)</TableCell>
                    </TableRow>
                    <TableRow className="bg-transparent hover:bg-transparent">
                      <TableCell className="text-base w-[50%]">Employer Mandatory Contribution</TableCell>
                      <TableCell className="text-base w-[50%]">SGD 7,000.00</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
                <p className="text-sm font-medium">
                  Retirement benefits calculation is based on my Base Salary. For actual contribution amount, please
                  refer to HR guideline
                </p>
              </div>
            </div>
            <div id="groupInsuranceBenefits">
              <div className="bg-gray-100 rounded p-2 mb-3 lg:mb-5">
                <p className="text-lg font-bold">Group Insurance Benefits</p>
              </div>
              <div className="flex flex-col ml-2 gap-y-3 lg:gap-y-5">
                <p className="text-base font-semibold">Outpatient</p>
                <Table>
                  <TableBody>
                    <TableRow className="bg-transparent hover:bg-transparent">
                      <TableCell className="text-base w-[50%]">Outpatient 1</TableCell>
                      <TableCell className="text-base w-[50%]">OP Plan A (Employee Only)</TableCell>
                    </TableRow>
                    <TableRow className="bg-transparent hover:bg-transparent">
                      <TableCell className="text-base w-[50%]">Outpatient Entitlement</TableCell>
                      <TableCell className="text-base w-[50%]">GD 3,954.00</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
                <p className="text-base font-semibold">Inpatient</p>
                <Table>
                  <TableBody>
                    <TableRow className="bg-transparent hover:bg-transparent">
                      <TableCell className="text-base w-[50%]">Inpatient</TableCell>
                      <TableCell className="text-base w-[50%]">P Plan A (Employee Only)</TableCell>
                    </TableRow>
                    <TableRow className="bg-transparent hover:bg-transparent">
                      <TableCell className="text-base w-[50%]">Inpatient Entitlement</TableCell>
                      <TableCell className="text-base w-[50%]">SGD 6,325.00</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
                <p className="text-base font-semibold">GTL</p>
                <Table>
                  <TableBody>
                    <TableRow className="bg-transparent hover:bg-transparent">
                      <TableCell className="text-base w-[50%]">GTL</TableCell>
                      <TableCell className="text-base w-[50%]">36x Basic Monthly Salary</TableCell>
                    </TableRow>
                    <TableRow className="bg-transparent hover:bg-transparent">
                      <TableCell className="text-base w-[50%]">GTL entitlement</TableCell>
                      <TableCell className="text-base w-[50%]">SGD 581.00</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
                <p className="text-base font-semibold">LTD</p>
                <Table>
                  <TableBody>
                    <TableRow className="bg-transparent hover:bg-transparent">
                      <TableCell className="text-base w-[50%]">LTD</TableCell>
                      <TableCell className="text-base w-[50%]">60% of Base Salary</TableCell>
                    </TableRow>
                    <TableRow className="bg-transparent hover:bg-transparent">
                      <TableCell className="text-base w-[50%]">LTD entitlement</TableCell>
                      <TableCell className="text-base w-[50%]">SGD 968.00</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </div>
            <div id="flexibleSpendingAccount">
              <div className="bg-gray-100 rounded p-2 mb-3 lg:mb-5">
                <p className="text-lg font-bold">Flexible Spending Account</p>
              </div>
              <div className="flex flex-col ml-2 gap-y-3 lg:gap-y-5">
                <p className="text-base font-semibold">Flexible Spending Account</p>
                <Table>
                  <TableBody>
                    <TableRow className="bg-transparent hover:bg-transparent">
                      <TableCell className="text-base w-[50%]">my Flexible Spending Account</TableCell>
                      <TableCell className="text-base w-[50%]">SGD 5,000.00</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
                <p className="text-base font-semibold">Well-Being Spending Account</p>
                <Table>
                  <TableBody>
                    <TableRow className="bg-transparent hover:bg-transparent">
                      <TableCell className="text-base w-[50%]">my Well-Being Spending Account</TableCell>
                      <TableCell className="text-base w-[50%]">SGD 5,000.00</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
export default Summary
