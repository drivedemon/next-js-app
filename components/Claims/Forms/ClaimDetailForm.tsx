"use client"

import type {FC} from "react"
import type React from "react"
import {Card, CardContent} from "@/components/ui/Card"
import {Label} from "@/components/Forms/Label"
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/Forms/Select"
import {cn} from "@/lib/utils"
import {Input} from "@/components/Forms/Input"
import {useState} from "react"
import CDatePicker from "@/components/Forms/CDatePicker"

interface ClaimDetailProps extends React.HTMLAttributes<HTMLElement> {
  currentStep: number
}

const ClaimDetailForm: FC<ClaimDetailProps> = (props: ClaimDetailProps) => {
  const policyName = ["Policy 12100394", "Policy 12100395", "Policy 12100396", "Policy 12100397"]
  const [policy, setPolicy] = useState<string>(policyName[0])

  return (
    <>
      <Card className={props.currentStep === 3 ? "h-full" : "hidden"}>
        <CardContent className="px-0 lg:px-3">
          <div className="lg:mx-2 mb-3 flex flex-col text-sm lg:text-base gap-y-4">
            <span className="font-bold text-base lg:text-lg">Claim Detail</span>
            <div className="grid lg:grid-cols-12 gap-2 lg:gap-4 font-semibold">
              <div className="col-span-6 flex flex-col gap-y-3">
                <Label htmlFor="receipt_number">Receipt Number</Label>
                <Input className="flex items-center" type="text" name="receipt_number" id="receipt_number" />
              </div>
              <div className="col-span-6 flex flex-col gap-y-3">
                <Label>Receipt Date</Label>
                <CDatePicker />
              </div>
              <div className="col-span-6 flex flex-col gap-y-3">
                <Label htmlFor="receipt_amount">Receipt Amount</Label>
                <Input className="flex items-center" type="number" name="receipt_amount" id="receipt_amount" />
              </div>
              <div className="col-span-6 flex flex-col gap-y-3">
                <Label>Currency</Label>
                <Select>
                  <SelectTrigger className="h-full">
                    <SelectValue placeholder="Select Currency" />
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
              <div className="col-span-6 flex flex-col gap-y-3">
                <Label htmlFor="diagonosis">Diagnosis</Label>
                <Input className="flex items-center" type="text" name="diagonosis" id="diagonosis" />
              </div>
              <div className="col-span-6 flex flex-col gap-y-3">
                <Label htmlFor="clinic">Clinic</Label>
                <Input className="flex items-center" type="text" name="clinic" id="clinic" />
              </div>
              <div className="col-span-6 flex flex-col gap-y-3">
                <Label>Country of Treatment</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Location" />
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
            </div>
          </div>
        </CardContent>
      </Card>
      <Card className={props.currentStep === 3 ? "h-full" : "hidden"}>
        <CardContent className="px-0 lg:px-3">
          <div className="lg:mx-2 mb-3 flex flex-col text-sm lg:text-base gap-y-4">
            <span className="font-bold text-base lg:text-lg">Bank Detail</span>
            <div className="grid lg:grid-cols-12 gap-2 lg:gap-4 font-semibold">
              <div className="col-span-6 flex flex-col gap-y-3">
                <Label>Bank Name</Label>
                <Select>
                  <SelectTrigger className="h-full">
                    <SelectValue placeholder="Select Bank name" />
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
              <div className="col-span-6 flex flex-col gap-y-3">
                <Label htmlFor="bank_account_number">Bank Account Number</Label>
                <Input className="flex items-center" type="text" name="bank_account_number" id="bank_account_number" />
              </div>
              <div className="col-span-6 flex flex-col gap-y-3">
                <Label htmlFor="bank_holder_name">Bank Holder Name</Label>
                <Input className="flex items-center" type="text" name="bank_holder_name" id="bank_holder_name" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  )
}

export default ClaimDetailForm
