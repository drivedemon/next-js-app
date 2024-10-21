"use client"

import type {FC} from "react"
import type React from "react"
import {Card, CardContent} from "@/components/ui/Card"
import {cn, money} from "@/lib/utils"
import HealthcareIcon from "@/components/Icons/HealthcareIcon"
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/Tooltip"
import PdfIcon from "@/components/Icons/PdfIcon"
import type {IUploadForm} from "@/components/Claims/Forms/ClaimUploadForm"

interface ClaimReviewProps extends React.HTMLAttributes<HTMLElement> {
  currentStep: number
  steps: string[]
  formData: IUploadForm
}

const ClaimReviewForm: FC<ClaimReviewProps> = (props: ClaimReviewProps) => {
  return (
    <Card className={cn(props.currentStep === props.steps.length ? "h-full" : "hidden")}>
      <CardContent className="px-0 lg:px-3">
        <div className="lg:mx-2 flex flex-col text-sm lg:text-base gap-y-4">
          <span className="font-bold text-base lg:text-lg">Review Claim</span>
          <div className="flex flex-col gap-y-4 text-sm lg:text-base">
            <div className="grid gap-y-0.5 md:grid-cols-12 lg:grid-cols-12">
              <p className="md:col-span-4 lg:col-span-3 font-semibold">Plan Year</p>
              <p className="md:col-span-7 lg:col-span-9">2024</p>
            </div>

            <div className="grid gap-y-0.5 md:grid-cols-12 lg:grid-cols-12">
              <p className="md:col-span-4 lg:col-span-3 font-semibold">Policy Name</p>
              <p className="md:col-span-7 lg:col-span-9">Policy 12100394</p>
            </div>

            <div className="grid gap-y-0.5 md:grid-cols-12 lg:grid-cols-12">
              <p className="md:col-span-4 lg:col-span-3 font-semibold">Claimant Name</p>
              <p className="md:col-span-7 lg:col-span-9">Rachel Svanhildr</p>
            </div>

            <div className="grid gap-y-0.5 md:grid-cols-12 lg:grid-cols-12">
              <p className="md:col-span-4 lg:col-span-3 font-semibold">Claim Type</p>
              <TooltipProvider delayDuration={0}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="md:col-span-7 lg:col-span-9 w-fit bg-white relative p-10 rounded-xl border shadow-md text-center">
                      <div className="flex items-center justify-center absolute inset-0">
                        <div className="w-10 h-10 text-brand-primary">
                          <HealthcareIcon />
                        </div>
                      </div>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Medical</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>

            <div className="grid gap-y-0.5 md:grid-cols-12 lg:grid-cols-12">
              <p className="md:col-span-4 lg:col-span-3 font-semibold">Receipt Date</p>
              <p className="md:col-span-7 lg:col-span-9">2 Jul 2024</p>
            </div>

            <div className="grid gap-y-0.5 md:grid-cols-12 lg:grid-cols-12">
              <p className="md:col-span-4 lg:col-span-3 font-semibold">Receipt Number</p>
              <p className="md:col-span-7 lg:col-span-9">10012301</p>
            </div>

            <div className="grid gap-y-0.5 md:grid-cols-12 lg:grid-cols-12">
              <p className="md:col-span-4 lg:col-span-3 font-semibold">Receipt Amount</p>
              <p className="md:col-span-7 lg:col-span-9">{money(1000)}</p>
            </div>

            <div className="grid gap-y-0.5 md:grid-cols-12 lg:grid-cols-12">
              <p className="md:col-span-4 lg:col-span-3 font-semibold">Currency</p>
              <p className="md:col-span-7 lg:col-span-9">THB</p>
            </div>

            <div className="grid gap-y-0.5 md:grid-cols-12 lg:grid-cols-12">
              <p className="md:col-span-4 lg:col-span-3 font-semibold">Diagnosis</p>
              <p className="md:col-span-7 lg:col-span-9">test</p>
            </div>

            <div className="grid gap-y-0.5 md:grid-cols-12 lg:grid-cols-12">
              <p className="md:col-span-4 lg:col-span-3 font-semibold">Clinic</p>
              <p className="md:col-span-7 lg:col-span-9">Thailand clinic</p>
            </div>

            <div className="grid gap-y-0.5 md:grid-cols-12 lg:grid-cols-12">
              <p className="md:col-span-4 lg:col-span-3 font-semibold">Country of Treatment</p>
              <p className="md:col-span-7 lg:col-span-9">Thailand</p>
            </div>

            <div className="grid gap-y-0.5 md:grid-cols-12 lg:grid-cols-12">
              <p className="md:col-span-4 lg:col-span-3 font-semibold">Bank Name</p>
              <p className="md:col-span-7 lg:col-span-9">Rachel Svanhildr</p>
            </div>

            <div className="grid gap-y-0.5 md:grid-cols-12 lg:grid-cols-12">
              <p className="md:col-span-4 lg:col-span-3 font-semibold">Bank Account Number</p>
              <p className="md:col-span-7 lg:col-span-9">1234567890</p>
            </div>

            <div className="grid gap-y-0.5 md:grid-cols-12 lg:grid-cols-12">
              <p className="md:col-span-4 lg:col-span-3 font-semibold">Bank Holder Name</p>
              <p className="md:col-span-7 lg:col-span-9">Rachel Svanhildr</p>
            </div>
            <div>
              <p className="font-semibold">Receipt</p>
              <div className="flex flex-col items-center p-3">
                {props.formData.file && (
                  <div className="flex flex-col items-center space-y-3">
                    {props.formData.file.type.includes("image") && props.formData.filePreview && (
                      <img src={props.formData.filePreview} className="w-full h-[13rem] rounded z-10" alt="Preview" />
                    )}
                    {props.formData.file.type.includes("pdf") && (
                      <div className="w-20 h-20 text-brand-primary z-10">
                        <PdfIcon />
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
            <div>
              <p className="font-semibold">Referral documents</p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center p-3 w-full">
                {props.formData.multipleFile.map((file: any, index: number) =>
                  file.type.includes("image") && props.formData.multipleFilePreview[index] ? (
                    <img
                      key={index.toString()}
                      src={props.formData.multipleFilePreview[index]}
                      className="w-full h-[13rem] rounded"
                      alt="Preview"
                    />
                  ) : (
                    <div
                      key={index.toString()}
                      className="w-full h-[13rem] rounded bg-blue-50 flex items-center justify-center"
                    >
                      <div className="w-20 h-20 text-brand-primary">
                        <PdfIcon />
                      </div>
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default ClaimReviewForm
