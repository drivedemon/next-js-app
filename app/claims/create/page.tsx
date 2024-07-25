"use client"

import type React from "react"
import {useState} from "react"
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/Card"
import Stepper from "@/components/ui/Stepper"
import {ChevronUp} from "lucide-react"
import {cn, money} from "@/lib/utils"
import {Button} from "@/components/Forms/Button"
import HealthcareIcon from "@/components/Icons/HealthcareIcon"
import WellnessIcon from "@/components/Icons/WellnessIcon"
import {Label} from "@/components/Forms/Label"
import {Input} from "@/components/Forms/Input"
import FileUpload from "@/components/Forms/FileUpload"
import FileMultipleUpload from "@/components/Forms/FileMultipleUpload"
import CDatePicker from "@/components/Forms/CDatePicker"
import PdfIcon from "@/components/Icons/PdfIcon"
import {Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger} from "@/components/ui/Dialog"
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/Forms/Select"
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/Tooltip"

const Create: React.FC = () => {
  const steps = ["Select Claim Type", "Add Receipt and Referral", "Claim Detail", "Review Claim"]

  const yearList = ["2014", "2013", "2012", "2011"]
  const policyName = ["Policy 12100394", "Policy 12100395", "Policy 12100396", "Policy 12100397"]
  const [policy, setPolicy] = useState<string>(policyName[0])
  const [yearSelected, setYearSelected] = useState<string>(yearList[0])
  const [datePicker, setDatePicker] = useState<string>("")

  const [isOpenGuideline, setIsOpenGuideline] = useState<boolean>(false)
  const [isOpenSupportDocument, setIsOpenSupportDocument] = useState<boolean>(false)
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

        {/*Claim information Page1*/}
        <Card className={currentStep === 1 ? "h-full" : "hidden"}>
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
                    <div className="bg-white relative p-20 rounded-xl border shadow-md cursor-pointer text-center hover:drop-shadow">
                      <p className="absolute top-6 left-0 right-0 text-brand-primary text-nowrap">Medical</p>
                      <div className="flex items-center justify-center absolute inset-0">
                        <div className="w-16 h-16 text-brand-primary">
                          <HealthcareIcon />
                        </div>
                      </div>
                    </div>
                    <div className="bg-white relative p-20 rounded-xl border shadow-md cursor-pointer text-center hover:drop-shadow">
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

        {/*File upload Page2*/}
        <Card className={currentStep === 2 ? "h-full" : "hidden"}>
          <CardContent className="px-0 lg:px-3">
            <div className="lg:mx-2 flex flex-col text-sm lg:text-base gap-y-4">
              <span className="font-bold text-base lg:text-lg">Claim receipt (file)</span>
              <div className="flex flex-col gap-y-2">
                <div className="grid grid-cols-12">
                  <p className="col-span-4 lg:col-span-2">Plan Year</p>
                  <p className="col-span-8 lg:col-span-10 font-semibold">2024</p>
                </div>
                <div className="grid grid-cols-12">
                  <p className="col-span-4 lg:col-span-2">Policy Name</p>
                  <p className="col-span-8 lg:col-span-10 font-semibold">
                    Policy NamePolicy NamePolicy NamePolicy Name
                  </p>
                </div>
                <div className="grid grid-cols-12">
                  <p className="col-span-4 lg:col-span-2">Claimant name</p>
                  <p className="col-span-8 lg:col-span-10 font-semibold">Rachel Svanhildr</p>
                </div>
                <div className="grid grid-cols-12">
                  <p className="col-span-4 lg:col-span-2">Claim Type</p>
                  <TooltipProvider delayDuration={0}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className="col-span-8 lg:col-span-10 w-fit bg-white relative p-10 rounded-xl border shadow-md text-center">
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
              </div>
              <div className="flex flex-col gap-y-2">
                <Label>
                  <span className="text-red-500">*</span>Receipt Upload
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

        {/*Support document upload Page2*/}
        <Card className={currentStep === 2 ? "h-full" : "hidden"}>
          <CardContent className="px-0 lg:px-3">
            <div className="lg:mx-2 flex flex-col text-sm lg:text-base gap-y-2">
              <div
                className="flex lg:items-center cursor-pointer gap-x-1 group"
                onClick={() => {
                  setIsOpenSupportDocument(!isOpenSupportDocument)
                }}
              >
                <span className="font-bold text-base lg:text-lg">Referral documents (files)</span>
                <ChevronUp
                  className={cn(
                    isOpenSupportDocument && "transform rotate-180",
                    "transition-transform duration-300 h-6 w-6 shrink-0",
                  )}
                />
              </div>
              <div
                className={cn(
                  isOpenSupportDocument ? "max-h-full" : "max-h-0",
                  "overflow-hidden transition-all duration-300 flex flex-col gap-y-2",
                )}
              >
                <Label>Referral documents Upload</Label>
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

        {/*Claim detail Page3*/}
        <Card className={currentStep === 3 ? "h-full" : "hidden"}>
          <CardContent className="px-0 lg:px-3">
            <div className="lg:mx-2 mb-3 flex flex-col text-sm lg:text-base gap-y-4">
              <span className="font-bold text-base lg:text-lg">Claim Detail</span>
              <div className="grid lg:grid-cols-12 gap-2 lg:gap-4 font-semibold">
                <div className="col-span-6 flex flex-col gap-y-3">
                  <Label>Receipt Date</Label>
                  <CDatePicker />
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
                  <Label htmlFor="receipt_number">Receipt Number</Label>
                  <Input className="flex items-center" type="text" name="receipt_number" id="receipt_number" />
                </div>
                <div className="col-span-6 flex flex-col gap-y-3">
                  <Label htmlFor="receipt_amount">Receipt Amount</Label>
                  <Input className="flex items-center" type="number" name="receipt_amount" id="receipt_amount" />
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

        {/*Review Page4*/}
        <Card className={cn(currentStep === steps.length ? "h-full" : "hidden")}>
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
                <div>
                  <p className="font-semibold">Receipt</p>
                  <div className="flex flex-col items-center p-3">
                    {file && (
                      <div className="flex flex-col items-center space-y-3">
                        {(file.type.includes("image") && filePreview) && (
                          <img src={filePreview} className="w-full h-[13rem] rounded z-10" alt="Preview" />
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
                  <p className="font-semibold">Referral documents</p>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center p-3 w-full">
                    {multipleFile.map((file: any, index: number) =>
                      file.type.includes("image") && multipleFilePreview[index] ? (
                        <img
                          key={index.toString()}
                          src={multipleFilePreview[index]}
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
      </CardContent>
      <CardFooter className="mt-4 lg:mt-0 flex flex-col-reverse lg:flex-row gap-3 lg:justify-center">
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
