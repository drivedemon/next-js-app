"use client"

import {type FC, useRef, useState, useEffect} from "react"
import {cn} from "@/lib/utils"
import Image from "next/image"
import PdfIcon from "@/components/Icons/PdfIcon"
import JpgIcon from "@/components/Icons/JpgIcon"
import PngIcon from "@/components/Icons/PngIcon"

interface FileUploadProps {
  callbackFileEvent: (file: File | null) => void
  callbackFilePreviewEvent: (file: string | null) => void
}

const FileUpload: FC<FileUploadProps> = ({callbackFileEvent, callbackFilePreviewEvent}) => {
  const [dragActive, setDragActive] = useState<boolean>(false)
  const inputRef = useRef<any>(null)
  const [file, setFile] = useState<any>(null)
  const [filePreview, setFilePreview] = useState<string | null>(null)

  useEffect(() => {
    if (file) {
      const fileReader = new FileReader()
      fileReader.onload = () => {
        setFilePreview(fileReader.result as string)
        callbackFilePreviewEvent(fileReader.result as string)
      }

      if (file.type.includes("image")) {
        fileReader.readAsDataURL(file)
      } else if (file.type.includes("pdf")) {
        setFilePreview(URL.createObjectURL(file))
        callbackFilePreviewEvent(URL.createObjectURL(file))
      }

      callbackFileEvent(file)
    } else {
      callbackFileEvent(null)
      callbackFilePreviewEvent(null)
      setFile(null)
      setFilePreview(null)
    }
  }, [file])

  const handleChange = (e: any) => {
    e.preventDefault()
    if (e.target.files?.[0] && (e.target.files[0].type.includes("image") || e.target.files[0].type.includes("pdf"))) {
      setFile(e.target.files[0])
    }
  }

  const handleDrop = (e: any) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
    if (
      e.dataTransfer.files?.[0] &&
      (e.dataTransfer.files[0].type.includes("image") || e.dataTransfer.files[0].type.includes("pdf"))
    ) {
      setFile(e.dataTransfer.files[0])
    } else {
      // toast alert
    }
  }

  const handleDragLeave = (e: any) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
  }

  const handleDragOver = (e: any) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(true)
  }

  const handleDragEnter = (e: any) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(true)
  }

  const removeFile = () => {
    setFile(null)
    setFilePreview(null)
  }

  const openFileExplorer = () => {
    inputRef.current.value = ""
    inputRef.current.click()
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <form
        className={cn(
          file ? "bg-white text-white" : "bg-gray-50 text-brand-primary",
          "w-full lg:w-2/4 rounded-lg cursor-pointer border-brand-secondary border-dashed border-2 min-h-[15rem] text-center relative flex-col items-center gap-y-4",
        )}
        onClick={openFileExplorer}
        onDragEnter={handleDragEnter}
        onSubmit={(e) => e.preventDefault()}
        onDrop={handleDrop}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
      >
        <div className="flex flex-col items-center p-3">
          {file && filePreview && (
            <div className={cn(file.type.includes("pdf") && "absolute top-20", "flex flex-col items-center space-y-3")}>
              {file.type.includes("image") && filePreview && (
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
        {/* this input element allows us to select files for upload. We make it hidden so we can activate it when the user clicks select files */}
        <input
          placeholder="fileInput"
          className="hidden"
          ref={inputRef}
          type="file"
          multiple={false}
          onChange={handleChange}
          accept=".png,.jpg,.jpeg,.pdf"
        />

        <div hidden={file} className="absolute top-14 left-0 right-0 text-sm lg:text-base">
          <p className="px-4">
            Drag & Drop file or{" "}
            <span className="font-bold text-blue-600 cursor-pointer" onClick={openFileExplorer}>
              <u>Select file</u>
            </span>{" "}
            to upload
          </p>
          <div className="text-xs">(File size up to 2 MB)</div>
          <div className="my-4 flex justify-center gap-x-6">
            <div className="w-8 h-8">
              <JpgIcon />
            </div>
            <div className="w-8 h-8">
              <PngIcon />
            </div>
            <div className="w-8 h-8">
              <PdfIcon />
            </div>
          </div>
        </div>
        <span hidden={file} className="absolute bottom-3 left-0 right-0 text-xs text-brand-primary">
          At least one file must be submitted to continue
        </span>
      </form>

      <div className="flex flex-col items-center p-3">
        <div className="flex flex-row space-x-5">
          <span>{file?.name}</span>
          <span hidden={file === null} className="text-red-500 cursor-pointer" onClick={removeFile}>
            remove
          </span>
        </div>
      </div>
    </div>
  )
}

export default FileUpload
