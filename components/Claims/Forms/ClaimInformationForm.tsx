"use client"

import type {FC} from "react"
import type React from "react"
import {Card, CardContent} from "@/components/ui/Card"
import {Label} from "@/components/Forms/Label"
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/Forms/Select"
import {cn} from "@/lib/utils"
import {Input} from "@/components/Forms/Input"
import HealthcareIcon from "@/components/Icons/HealthcareIcon"
import WellnessIcon from "@/components/Icons/WellnessIcon"
import {useState} from "react"

interface ClaimInformationProps extends React.HTMLAttributes<HTMLElement> {
  currentStep: number
}

const ClaimInformationForm: FC<ClaimInformationProps> = (props: ClaimInformationProps) => {
  const yearList = ["2014", "2013", "2012", "2011"]
  const [yearSelected, setYearSelected] = useState<string>(yearList[0])
  const policyName = ["Policy 12100394", "Policy 12100395", "Policy 12100396", "Policy 12100397"]
  const [policy, setPolicy] = useState<string>(policyName[0])

  return (
    <Card className={props.currentStep === 1 ? "h-full" : "hidden"}>
      <CardContent className="px-0 lg:px-3">
        <div className="lg:mx-2 mb-3 flex flex-col text-sm lg:text-base gap-y-4">
          <span className="font-bold text-base lg:text-lg">Claim Information</span>
          <div className="flex flex-col gap-y-4 font-semibold">
            <div className="flex flex-col gap-y-3">
              <Label htmlFor="year">Plan Year</Label>
              <Select onValueChange={(e) => setYearSelected(e)}>
                <SelectTrigger className="md:w-1/3 lg:w-1/6">
                  <SelectValue placeholder={yearSelected} />
                </SelectTrigger>
                <SelectContent>
                  {yearList.map((value) => (
                    <SelectItem key={value} value={value} className={cn(value === yearSelected && "bg-blue-50")}>
                      {value}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col gap-y-3">
              <Label htmlFor="year">Policy Name</Label>
              <Select onValueChange={(e) => setPolicy(e)}>
                <SelectTrigger className="md:w-2/3 lg:w-2/3">
                  <SelectValue placeholder={policy} />
                </SelectTrigger>
                <SelectContent>
                  {policyName.map((value) => (
                    <SelectItem key={value} value={value} className={cn(value === policy && "bg-blue-50")}>
                      {value}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col gap-y-3">
              <Label htmlFor="name">Claimant name</Label>
              <Input className="flex items-center md:w-2/3 lg:w-2/3" type="text" name="name" id="name" />
            </div>
            <div className="flex flex-col gap-y-3">
              <Label>Select the type of claim</Label>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
                <div className="bg-white relative p-20 rounded-xl border cursor-pointer text-center hover:drop-shadow">
                  <p className="absolute top-6 left-0 right-0 text-brand-primary text-nowrap">Medical</p>
                  <div className="flex items-center justify-center absolute inset-0">
                    <div className="w-16 h-16 text-brand-primary">
                      <HealthcareIcon />
                    </div>
                  </div>
                </div>
                <div className="bg-white relative p-20 rounded-xl border cursor-pointer text-center hover:drop-shadow">
                  <p className="absolute top-6 left-0 right-0 text-brand-primary text-nowrap">Life</p>
                  <div className="flex items-center justify-center absolute inset-0">
                    <div className="w-16 h-16 text-brand-primary">
                      <WellnessIcon />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default ClaimInformationForm
