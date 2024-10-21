"use client"

import type {FC} from "react"
import type React from "react"
import {Card, CardContent} from "@/components/ui/Card"
import {Label} from "@/components/Forms/Label"
import {cn} from "@/lib/utils"
import HealthcareIcon from "@/components/Icons/HealthcareIcon"
import {useEffect, useState} from "react"
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/Tooltip"
import FileUpload from "@/components/Forms/FileUpload"
import {ChevronUp} from "lucide-react"
import {Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger} from "@/components/ui/Dialog"
import FileMultipleUpload from "@/components/Forms/FileMultipleUpload"

export interface IUploadForm {
  file: File | null
  filePreview: string | null
  multipleFile: any
  multipleFilePreview: any
}

interface ClaimInformationProps {
  currentStep: number
  onSubmit: (data: IUploadForm) => void
}

const ClaimUploadForm: FC<ClaimInformationProps> = (props: ClaimInformationProps) => {
  const [isOpenGuideline, setIsOpenGuideline] = useState<boolean>(false)
  const [isOpenSupportDocument, setIsOpenSupportDocument] = useState<boolean>(false)
  const [isOpenSupportGuideline, setIsOpenSupportGuideline] = useState<boolean>(false)
  const [file, setFile] = useState<File | null>(null)
  const [filePreview, setFilePreview] = useState<string | null>(null)
  const [multipleFile, setMultipleFile] = useState<any>([])
  const [multipleFilePreview, setMultipleFilePreview] = useState<any>([])

  useEffect(() => {
    if (file) {
      props.onSubmit({
        file: file,
        filePreview,
        multipleFile,
        multipleFilePreview,
      })
    }
    if (filePreview) {
      props.onSubmit({
        file,
        filePreview: filePreview,
        multipleFile,
        multipleFilePreview,
      })
    }
    if (multipleFile) {
      props.onSubmit({
        file,
        filePreview,
        multipleFile: multipleFile,
        multipleFilePreview,
      })
    }
    if (multipleFilePreview) {
      props.onSubmit({
        file,
        filePreview,
        multipleFile,
        multipleFilePreview: multipleFilePreview,
      })
    }
  }, [file, filePreview, multipleFile, multipleFilePreview])

  const handleFile = (data: File | null) => {
    setFile(data)
  }

  const handleFilePreview = (data: string | null) => {
    setFilePreview(data)
  }

  const handleMultipleFile = (data: File | [] | null) => {
    setMultipleFile(data)
    props.onSubmit({
      file,
      filePreview,
      multipleFile: data,
      multipleFilePreview,
    })
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

    props.onSubmit({
      file,
      filePreview,
      multipleFile,
      multipleFilePreview: multipleFilePreview,
    })
  }

  return (
    <>
      <Card className={props.currentStep === 2 ? "h-full" : "hidden"}>
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
                <p className="col-span-8 lg:col-span-10 font-semibold">Policy NamePolicy NamePolicy NamePolicy Name</p>
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
                          magnam optio quasi quibusdam. Consequatur deleniti expedita illum impedit ipsam nobis officia
                          praesentium quo. Enim molestiae officia quas. Lorem ipsum dolor sit amet, consectetur
                          adipisicing elit. Aut, culpa facilis incidunt magnam optio quasi quibusdam. Consequatur
                          deleniti expedita illum impedit ipsam nobis officia praesentium quo. Enim molestiae officia
                          quas. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, culpa facilis incidunt
                          magnam optio quasi quibusdam. Consequatur deleniti expedita illum impedit ipsam nobis officia
                          praesentium quo. Enim molestiae officia quas. Lorem ipsum dolor sit amet, consectetur
                          adipisicing elit. Aut, culpa facilis incidunt magnam optio quasi quibusdam. Consequatur
                          deleniti expedita illum impedit ipsam nobis officia praesentium quo. Enim molestiae officia
                          quas.
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
      <Card className={props.currentStep === 2 ? "h-full" : "hidden"}>
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
    </>
  )
}

export default ClaimUploadForm
