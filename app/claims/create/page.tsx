"use client"

import type React from "react"
import {useState} from "react"
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/Card"
import Stepper from "@/components/ui/Stepper"
import {ChevronUp} from "lucide-react"
import {cn} from "@/lib/utils"
import {Button} from "@/components/Forms/Button"
import HealthcareIcon from "@/components/Icons/HealthcareIcon"
import FamilyIcon from "@/components/Icons/FamilyIcon"
import WellnessIcon from "@/components/Icons/WellnessIcon"
import DiscretionaryIcon from "@/components/Icons/DiscretionaryIcon"
import InpatientIcon from "@/components/Icons/InpatientIcon"
import {Label} from "@/components/Forms/Label"
import {Input} from "@/components/Forms/Input"
import {RadioGroup, RadioGroupItem} from "@/components/Forms/RadioGroup"
import {Badge} from "@/components/ui/Badge"
import FileUpload from "@/components/Forms/FileUpload"
import FileMultipleUpload from "@/components/Forms/FileMultipleUpload"
import PdfIcon from "@/components/Icons/PdfIcon"
import {Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger} from "@/components/ui/Dialog"
import Image from "next/image"

const Create: React.FC = () => {
  const steps = ["Select Claim Type", "Add Receipt", "Add Supporting Documents", "Review Claim"]
  const [isOpenFlexible, setIsOpenFlexible] = useState<boolean>(false)
  const [isOpenMedical, setIsOpenMedical] = useState<boolean>(false)
  const [isOpenGuideline, setIsOpenGuideline] = useState<boolean>(false)
  const [isOpenSupportGuideline, setIsOpenSupportGuideline] = useState<boolean>(false)
  const [currentStep, setStep] = useState<number>(1)
  const [file, setFile] = useState<File | null>(null)
  const [filePreview, setFilePreview] = useState<string | null>(null)
  const [multipleFile, setMultipleFile] = useState<any>([])
  const [multipleFilePreview, setMultipleFilePreview] = useState<any>([])

  const handleFile = (data: File | null) => {
    setFile(data)
  }

  const handleFilePreview = (data: string | null) => {
    setFilePreview(data)
  }

  const handleMultipleFile = (data: File | [] | null) => {
    setMultipleFile(data)
  }

  const handleMultipleFilePreview = (data: []) => {
    setMultipleFilePreview([])

    if (data.length === 0) {
      return
    }

    data.map((file: any) => {
      const fileReader = new FileReader()
      fileReader.onload = () => {
        setMultipleFilePreview((prev: any) => [...prev, fileReader.result as string])
      }
      fileReader.readAsDataURL(file)
    })
  }

  return (
    <Card className="shadow-brand-primary h-full">
      <CardHeader>
        <CardTitle>{steps[currentStep - 1]}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-y-8">
        <Stepper steps={steps} currentStep={currentStep} />

        {/*Account balance*/}
        <Card className="h-full">
          <CardContent className="px-0 lg:px-3">
            <div className="mx-2 flex flex-col text-sm lg:text-base gap-y-2">
              <div className="flex flex-col md:flex-row lg:flex-row items-center gap-x-2 font-bold lg:text-nowrap text-base lg:text-lg">
                <span className="shrink-0">Your Account Balance</span>
                <span className="font-normal text-xs lg:text-sm">
                  (All prices are quoted in <span className="font-semibold">SGD</span>)
                </span>
              </div>

              <div className="flex flex-col lg:flex-row lg:items-center font-semibold lg:justify-between lg:pt-2">
                <div
                  className="flex items-center cursor-pointer gap-x-1 group"
                  onClick={() => {
                    setIsOpenFlexible(!isOpenFlexible)
                  }}
                >
                  <span className="text-nowrap text-brand-primary group-hover:underline">
                    Flexible Spending Account
                  </span>
                  <ChevronUp
                    className={cn(
                      isOpenFlexible && "transform rotate-180",
                      "transition-transform duration-300 h-6 w-6 text-brand-primary shrink-0",
                    )}
                  />
                </div>
                <span className="lg:text-right" hidden={!isOpenFlexible}>
                  Period: <span className="font-normal text-sm">1 Jan 2024 - 31 Dec 2024</span>
                </span>
              </div>

              <div
                className={cn(
                  isOpenFlexible ? "max-h-screen" : "max-h-0",
                  "overflow-hidden transition-all duration-300",
                )}
              >
                <div className="flex flex-col gap-y-0.5">
                  <div className="grid grid-cols-2">
                    <div className="bg-gray-50 rounded-l-sm pl-2">Allocation:</div>
                    <div className="text-right">5,000.00</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="bg-gray-50 rounded-l-sm pl-2">Utilized:</div>
                    <div className="text-right">5,000.00</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-x-2">
                <div className="flex justify-between items-center font-semibold">
                  <span>Balance: </span>
                  <span>5,000.00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Pending: </span>
                  <span>1,000.00</span>
                </div>
              </div>

              <div className="flex flex-col lg:flex-row lg:items-center font-semibold lg:justify-between lg:pt-2">
                <div
                  className="flex items-center cursor-pointer gap-x-1 group"
                  onClick={() => {
                    setIsOpenMedical(!isOpenMedical)
                  }}
                >
                  <span className="text-nowrap text-brand-primary group-hover:underline">Medical Spending Account</span>
                  <ChevronUp
                    className={cn(
                      isOpenMedical && "transform rotate-180",
                      "transition-transform duration-300 h-6 w-6 text-brand-primary shrink-0",
                    )}
                  />
                </div>
                <span className="lg:text-right" hidden={!isOpenMedical}>
                  Period: <span className="font-normal text-sm">1 Jan 2024 - 31 Dec 2024</span>
                </span>
              </div>

              <div
                className={cn(
                  isOpenMedical ? "max-h-screen" : "max-h-0",
                  "overflow-hidden transition-all duration-300",
                )}
              >
                <div className="flex flex-col gap-y-0.5">
                  <div className="grid grid-cols-2">
                    <div className="bg-gray-50 rounded-l-sm pl-2">Allocation:</div>
                    <div className="text-right">5,000.00</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="bg-gray-50 rounded-l-sm pl-2">Utilized:</div>
                    <div className="text-right">5,000.00</div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-x-2">
                <div className="flex justify-between items-center font-semibold">
                  <span>Balance: </span>
                  <span>5,000.00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Pending: </span>
                  <span>1,000.00</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/*Points of consider*/}
        <Card className={cn(currentStep !== 1 && "hidden", "h-full")}>
          <CardContent className="px-0 lg:px-3">
            <div className="mx-2 flex flex-col text-sm lg:text-base gap-y-6">
              <span className="font-bold text-base lg:text-lg">Points of consider</span>
              <span>Please keep your original receipt for audit purposes.</span>
            </div>
          </CardContent>
        </Card>

        {/*Claim information Page1*/}
        <Card className={cn(currentStep !== 1 && "hidden", "h-full")}>
          <CardContent className="px-0 lg:px-3">
            <div className="mx-2 flex flex-col text-sm lg:text-base gap-y-6">
              <span className="font-bold text-base lg:text-lg">Claim information</span>
              <div className="flex flex-col gap-y-6 font-semibold">
                <div className="flex flex-col gap-y-3">
                  <Label htmlFor="year">Plan Year</Label>
                  <Input className="flex items-center md:w-2/12 lg:w-2/12" type="text" name="year" id="year" />
                </div>
                <div className="flex flex-col gap-y-3">
                  <Label htmlFor="name">Claimant name</Label>
                  <Input className="flex items-center md:w-2/3 lg:w-2/3" type="text" name="name" id="name" />
                </div>
                <div className="flex flex-col gap-y-3">
                  <Label>Select the type of claim</Label>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
                    <div className="bg-white relative p-20 rounded-xl border shadow-md cursor-pointer text-center hover:drop-shadow">
                      <p className="absolute top-6 left-0 right-0 text-brand-primary text-nowrap">Healthcare</p>
                      <div className="flex items-center justify-center absolute inset-0">
                        <div className="w-16 h-16 text-brand-primary">
                          <HealthcareIcon />
                        </div>
                      </div>
                    </div>
                    <div className="bg-white relative p-20 rounded-xl border shadow-md cursor-pointer text-center hover:drop-shadow">
                      <p className="absolute top-6 left-0 right-0 text-brand-primary text-nowrap">
                        Family Oriented Benefits
                      </p>
                      <div className="flex items-center justify-center absolute inset-0">
                        <div className="w-16 h-16 text-brand-primary">
                          <FamilyIcon />
                        </div>
                      </div>
                    </div>
                    <div className="bg-white relative p-20 rounded-xl border shadow-md cursor-pointer text-center hover:drop-shadow">
                      <p className="absolute top-6 left-0 right-0 text-brand-primary text-nowrap">Wellness</p>
                      <div className="flex items-center justify-center absolute inset-0">
                        <div className="w-16 h-16 text-brand-primary">
                          <WellnessIcon />
                        </div>
                      </div>
                    </div>
                    <div className="bg-white relative p-20 rounded-xl border shadow-md cursor-pointer text-center hover:drop-shadow">
                      <p className="absolute top-6 left-0 right-0 text-brand-primary text-nowrap">Discretionary</p>
                      <div className="flex items-center justify-center absolute inset-0">
                        <div className="w-16 h-16 text-brand-primary">
                          <DiscretionaryIcon />
                        </div>
                      </div>
                    </div>
                    <div className="bg-white relative p-20 rounded-xl border shadow-md cursor-pointer text-center hover:drop-shadow">
                      <p className="absolute top-6 left-0 right-0 text-brand-primary text-nowrap">Inpatient</p>
                      <div className="flex items-center justify-center absolute inset-0">
                        <div className="w-16 h-16 text-brand-primary">
                          <InpatientIcon />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-y-3">
                  <Label className="mb-4">Select a specific claim type</Label>
                  <RadioGroup defaultValue="" className="flex flex-col gap-y-4">
                    <div className="flex flex-col gap-y-4">
                      <div className="flex items-center gap-x-2">
                        <RadioGroupItem value="1" id="item1" />
                        <Label htmlFor="item1">Outpatient</Label>
                      </div>
                    </div>
                    <div className="flex flex-col gap-y-4">
                      <div className="flex items-center gap-x-2">
                        <RadioGroupItem value="2" id="item2" />
                        <Label htmlFor="item2">Dental</Label>
                      </div>
                    </div>
                    <div className="flex flex-col gap-y-4">
                      <div className="flex items-center gap-x-2">
                        <RadioGroupItem value="3" id="item3" />
                        <Label htmlFor="item3">Alternative Medicine (Chiropractor, Homeopathy, etc.)</Label>
                      </div>
                      <div className="ml-6 flex gap-x-3">
                        <Badge className="lg:text-sm">CPF Contributable</Badge>
                        <Badge className="lg:text-sm">Taxable</Badge>
                      </div>
                    </div>
                    <div className="flex flex-col gap-y-4">
                      <div className="flex items-center gap-x-2">
                        <RadioGroupItem value="4" id="item4" />
                        <Label htmlFor="item4">
                          Medical Expenses beyond Hospital & Surgical Plan Limit (Cash payment)
                        </Label>
                      </div>
                    </div>
                  </RadioGroup>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/*File upload Page2*/}
        <Card className={cn(currentStep === 2 ? "h-full" : "hidden")}>
          <CardContent className="px-0 lg:px-3">
            <div className="mx-2 flex flex-col text-sm lg:text-base gap-y-6">
              <span className="font-bold text-base lg:text-lg">Claim receipt (file)</span>
              <div className="flex flex-col gap-y-2">
                <div className="grid grid-cols-12">
                  <p className="col-span-4 lg:col-span-2">Plan Year:</p>
                  <p className="col-span-8 lg:col-span-10 font-semibold">2024</p>
                </div>
                <div className="grid grid-cols-12">
                  <p className="col-span-4 lg:col-span-2">Claim Type:</p>
                  <p className="col-span-8 lg:col-span-10 font-semibold">
                    Outpatient Specialist (with/without referral letter)
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-y-2">
                <Label>
                  <span className="text-red-500">*</span>Receipt Upload:
                </Label>
                <FileUpload callbackFileEvent={handleFile} callbackFilePreviewEvent={handleFilePreview} />
                <div className="flex items-center font-semibold justify-between lg:pt-2">
                  <div
                    className="flex items-center cursor-pointer gap-x-1 group"
                    onClick={() => {
                      setIsOpenGuideline(!isOpenGuideline)
                    }}
                  >
                    <span className="text-nowrap text-brand-primary group-hover:underline">
                      Guidelines for claim submission
                    </span>
                    <ChevronUp
                      className={cn(
                        isOpenGuideline && "transform rotate-180",
                        "transition-transform duration-300 h-6 w-6 text-brand-primary shrink-0",
                      )}
                    />
                  </div>
                </div>

                <div
                  className={cn(
                    isOpenGuideline ? "max-h-screen" : "max-h-0",
                    "overflow-hidden transition-all duration-300",
                  )}
                >
                  <div className="flex flex-col gap-y-2 text-sm lg:text-base">
                    <p>
                      Please check the{" "}
                      <Dialog>
                        <DialogTrigger>
                          <span className="text-brand-primary font-bold cursor-pointer hover:underline">
                            instructions
                          </span>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogTitle>
                            <p className="text-brand-primary">Guidelines to upload receipt file</p>
                          </DialogTitle>
                          <DialogDescription>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, culpa facilis incidunt magnam
                            optio quasi quibusdam. Consequatur deleniti expedita illum impedit ipsam nobis officia
                            praesentium quo. Enim molestiae officia quas. Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit. Aut, culpa facilis incidunt magnam optio quasi quibusdam. Consequatur
                            deleniti expedita illum impedit ipsam nobis officia praesentium quo. Enim molestiae officia
                            quas. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, culpa facilis incidunt
                            magnam optio quasi quibusdam. Consequatur deleniti expedita illum impedit ipsam nobis
                            officia praesentium quo. Enim molestiae officia quas. Lorem ipsum dolor sit amet,
                            consectetur adipisicing elit. Aut, culpa facilis incidunt magnam optio quasi quibusdam.
                            Consequatur deleniti expedita illum impedit ipsam nobis officia praesentium quo. Enim
                            molestiae officia quas. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, culpa
                            facilis incidunt magnam optio quasi quibusdam. Consequatur deleniti expedita illum impedit
                            ipsam nobis officia praesentium quo. Enim molestiae officia quas. Lorem ipsum dolor sit
                            amet, consectetur adipisicing elit. Aut, culpa facilis incidunt magnam optio quasi
                            quibusdam. Consequatur deleniti expedita illum impedit ipsam nobis officia praesentium quo.
                            Enim molestiae officia quas.
                          </DialogDescription>
                        </DialogContent>
                      </Dialog>
                      , before you upload the receipt file.
                    </p>
                    <p>
                      We will process your file once uploaded, so that we can auto-fill the Claims information on your
                      behalf based on the file submitted.
                    </p>
                    <p>
                      You may continue to wait for few more seconds after uploading the file or alternatively you can
                      fill-in the claims information manually.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {file && currentStep === 2 && (
          <Card className={cn("h-full")}>
            <CardContent className="px-0 lg:px-3">
              <div className="mx-2 flex flex-col text-sm lg:text-base gap-y-6">
                <span className="font-bold text-base lg:text-lg">Claim receipt (information)</span>
                <div className="flex items-center gap-x-2">
                  <Label htmlFor="claimant">Claimant:</Label>
                  <p>Name of selected</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-x-8 gap-y-4">
                  <div className="flex flex-col gap-y-2">
                    <Label htmlFor="provider">Provider:</Label>
                    <Input id="provider" name="provider" />
                  </div>
                  <div className="flex flex-col gap-y-2">
                    <Label htmlFor="receipt_no">
                      <span className="text-red-500">*</span>Receipt No:
                    </Label>
                    <Input id="receipt_no" name="receipt_no" />
                  </div>
                  <div className="flex flex-col gap-y-2">
                    <Label htmlFor="date">
                      <span className="text-red-500">*</span>Receipt Date:
                    </Label>
                    <Input id="date" name="date" />
                  </div>
                  <div className="flex flex-col gap-y-2">
                    <Label htmlFor="amount">
                      <span className="text-red-500">*</span>Receipt Amount:
                    </Label>
                    <Input id="amount" name="amount" />
                  </div>
                  <div className="flex flex-col gap-y-2">
                    <Label htmlFor="reason">
                      <span className="text-red-500">*</span>Claim Reason:
                    </Label>
                    <Input id="reason" name="reason" />
                  </div>
                  <div className="flex flex-col gap-y-2">
                    <Label htmlFor="remark">Remark:</Label>
                    <Input id="remark" name="remark" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/*Support document upload Page3*/}
        <Card className={cn(currentStep === 3 ? "h-full" : "hidden")}>
          <CardContent className="px-0 lg:px-3">
            <div className="mx-2 flex flex-col text-sm lg:text-base gap-y-6">
              <span className="font-bold text-base lg:text-lg">Supporting documents (files)</span>
              <div className="flex flex-col gap-y-2">
                <div className="grid grid-cols-12">
                  <p className="col-span-2">Plan Year:</p>
                  <p className="col-span-10 font-semibold">2024</p>
                </div>
                <div className="grid grid-cols-12">
                  <p className="col-span-2">Claim Type:</p>
                  <p className="col-span-10 font-semibold">Outpatient Specialist (with/without referral letter)</p>
                </div>
              </div>
              <div className="flex flex-col gap-y-2">
                <Label>Supporting documents Upload:</Label>
                <FileMultipleUpload
                  callbackFileEvent={handleMultipleFile}
                  callbackFilePreviewEvent={handleMultipleFilePreview}
                />
                <div className="flex items-center font-semibold justify-between lg:pt-2">
                  <div
                    className="flex lg:items-center cursor-pointer gap-x-1 group"
                    onClick={() => {
                      setIsOpenSupportGuideline(!isOpenSupportGuideline)
                    }}
                  >
                    <span className="lg:text-nowrap text-brand-primary group-hover:underline">
                      Guidelines for submitting referral and supporting documents
                    </span>
                    <ChevronUp
                      className={cn(
                        isOpenSupportGuideline && "transform rotate-180",
                        "transition-transform duration-300 h-6 w-6 text-brand-primary shrink-0",
                      )}
                    />
                  </div>
                </div>

                <div
                  className={cn(
                    isOpenSupportGuideline ? "max-h-screen" : "max-h-0",
                    "overflow-hidden transition-all duration-300",
                  )}
                >
                  <div className="flex flex-col gap-y-2 text-sm lg:text-base">
                    <p>
                      Under referral letter,
                      <br />
                      you can submit new referral letter copy or select from the existing referral letter dropdown list
                      for an existing condition.
                    </p>
                    <p>
                      Under supporting,
                      <br />
                      documents you can submit documents that will be required for processing claim. Examples like{" "}
                      <span className="font-semibold">Credit card</span> statements, Flight/Hotel booking, Discharge
                      summary, detailed hospital bills Pre & Post bills from specialist. Copy of{" "}
                      <span className="font-semibold">Shield Settlement Letter</span> Copy of Referral Letter from GP,
                      etc.,
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/*Review Page4*/}
        <Card className={cn(currentStep === steps.length ? "h-full" : "hidden")}>
          <CardContent className="px-0 lg:px-3">
            <div className="mx-2 flex flex-col text-sm lg:text-base gap-y-6">
              <span className="font-bold text-base lg:text-lg">Claim detail</span>
              <div className="flex flex-col gap-y-3 lg:gap-y-6 text-sm lg:text-base">
                <div className="grid grid-cols-12">
                  <p className="col-span-4 lg:col-span-3 font-semibold">Plan Year:</p>
                  <p className="col-span-7 8g:col-span-9">2024</p>
                </div>
                <div className="grid grid-cols-12">
                  <p className="col-span-4 lg:col-span-3 font-semibold">Claim ID:</p>
                  <p className="col-span-7 8g:col-span-9">newdemo3-001281</p>
                </div>
                <div className="grid grid-cols-12">
                  <p className="col-span-4 lg:col-span-3 font-semibold">Claim Item:</p>
                  <p className="col-span-7 8g:col-span-9">Outpatient GP</p>
                </div>
                <div className="grid grid-cols-12 items-center">
                  <p className="col-span-4 lg:col-span-3 font-semibold">Tax Status:</p>
                  <div className="col-span-8 lg:col-span-9">
                    <Badge variant="outline" className="text-sm">
                      Non-Taxable
                    </Badge>
                  </div>
                </div>
                <div className="grid grid-cols-12 items-center">
                  <p className="col-span-4 lg:col-span-3 font-semibold">CPF Contributable:</p>
                  <div className="col-span-8 lg:col-span-9">
                    <Badge variant="outline" className="text-sm">
                      No
                    </Badge>
                  </div>
                </div>
                <div className="grid grid-cols-12">
                  <p className="col-span-4 lg:col-span-3 font-semibold">Claimant:</p>
                  <p className="col-span-8 lg:col-span-9">Rachel Svanhildr</p>
                </div>
                <div className="grid grid-cols-12">
                  <p className="col-span-4 lg:col-span-3 font-semibold">Provider:</p>
                  <p className="col-span-8 lg:col-span-9">@Just Braces.Dental Centre</p>
                </div>
                <div className="grid grid-cols-12">
                  <p className="col-span-4 lg:col-span-3 font-semibold">Receipt No:</p>
                  <p className="col-span-8 lg:col-span-9">1234</p>
                </div>
                <div className="grid grid-cols-12">
                  <p className="col-span-4 lg:col-span-3 font-semibold">Receipt Date:</p>
                  <p className="col-span-8 lg:col-span-9">2 Jul 2024</p>
                </div>
                <div className="grid grid-cols-12">
                  <p className="col-span-4 lg:col-span-3 font-semibold">Receipt Amount:</p>
                  <p className="col-span-8 lg:col-span-9">SGD 1,234.00</p>
                </div>
                <div className="grid grid-cols-12">
                  <p className="col-span-4 lg:col-span-3 font-semibold">Claim Reason:</p>
                  <p className="col-span-8 lg:col-span-9">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, aperiam assumenda at aut consequatur
                    cupiditate dolor dolore dolorum eligendi fugiat laborum magnam magni officia omnis quod repudiandae
                    tenetur totam vero.
                  </p>
                </div>
                <div className="grid grid-cols-12">
                  <p className="col-span-4 lg:col-span-3 font-semibold">Remark:</p>
                  <p className="col-span-8 lg:col-span-9">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aut consequatur, dolores enim
                    eum eveniet hic inventore ipsam labore laudantium magni, nam nisi numquam officiis possimus
                    quibusdam quidem quisquam voluptatibus?
                  </p>
                </div>
                <div>
                  <p className="font-semibold">Receipt:</p>
                  <div className="flex flex-col items-center p-3">
                    {file && (
                      <div
                        className={cn(
                          file.type.includes("pdf") && "absolute top-20",
                          "flex flex-col items-center space-y-3",
                        )}
                      >
                        {file.type.includes("image") && (
                          <Image src={filePreview ?? ""} className="w-full rounded h-[13rem] z-10" alt="Preview" />
                        )}
                        {file.type.includes("pdf") && (
                          <div className="w-20 h-20 text-brand-primary z-10">
                            <PdfIcon />
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
                <div>
                  <p className="font-semibold">Supporting documents:</p>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center p-3 w-full">
                    {multipleFile.map((file: any, index: number) =>
                      file.type.includes("image") ? (
                        <Image
                          key={index.toString()}
                          src={multipleFilePreview[index]}
                          className="w-full rounded h-[13rem]"
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
      </CardContent>
      <CardFooter className="flex flex-col-reverse lg:flex-row gap-3 lg:justify-center">
        <Button
          variant="outline"
          className={cn(currentStep === 1 && "hidden", "w-full lg:w-fit border-brand-primary text-brand-primary")}
          onClick={() => {
            setStep(currentStep === steps.length ? 2 : currentStep - 1)
          }}
        >
          {currentStep === steps.length ? "Edit" : "Previous"}
        </Button>
        <Button
          variant="primary"
          className={currentStep === steps.length ? "hidden" : "block w-full lg:w-fit "}
          onClick={() => {
            setStep(currentStep + 1)
          }}
        >
          {currentStep === 1 ? "Proceed" : currentStep === 2 ? "Verify Claim information" : "Preview"}
        </Button>
        <Button variant="success" className={currentStep === steps.length ? "block w-full lg:w-fit" : "hidden"}>
          Confirm
        </Button>
      </CardFooter>
    </Card>
  )
}

export default Create
