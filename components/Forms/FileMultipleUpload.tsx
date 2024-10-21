"use client"

import {type FC, useEffect, useRef, useState} from "react"
import {cn, getFilePreviews} from "@/lib/utils"
import PdfIcon from "@/components/Icons/PdfIcon"
import JpgIcon from "@/components/Icons/JpgIcon"
import PngIcon from "@/components/Icons/PngIcon"
import {LoaderIcon} from "lucide-react"

interface FileMultipleUploadProps {
  callbackFileEvent: (file: [] | null) => void
  callbackFilePreviewEvent: (file: []) => void
}

const FileMultipleUpload: FC<FileMultipleUploadProps> = ({callbackFileEvent, callbackFilePreviewEvent}) => {
  const [dragActive, setDragActive] = useState<boolean>(false)
  const inputRef = useRef<any>(null)
  const [files, setFiles] = useState<any>([])
  const [filesPreview, setFilesPreview] = useState<any>([])

  useEffect(() => {
    if (files) {
      callbackFileEvent(files)
      callbackFilePreviewEvent(files)
    } else {
      callbackFileEvent([])
      callbackFilePreviewEvent([])
      setFiles([])
      setFilesPreview([])
    }
  }, [files])

  const handleChange = async (e: any) => {
    e.preventDefault()
    if (e.target.files?.[0]) {
      for (let i = 0; i < e.target.files.length; i++) {
        setFiles((prevState: any) => [...prevState, e.target.files[i]])
      }
      const fileArray = Array.from(e.target.files)
      try {
        const previews = await getFilePreviews(fileArray)
        previews.map((preview) => setFilesPreview((prev: any) => [...prev, preview]))
      } catch (error) {
        console.error("Error reading files:", error)
      }
    }
  }

  const handleDrop = async (e: any) => {
    if (files.length >= 5) {
      return
    }

    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
    if (e.dataTransfer.files?.[0]) {
      for (let i = 0; i < e.dataTransfer.files.length; i++) {
        setFiles((prevState: any) => [...prevState, e.dataTransfer.files[i]])
      }
      const fileArray = Array.from(e.dataTransfer.files)
      try {
        const previews = await getFilePreviews(fileArray)
        previews.map((preview) => setFilesPreview((prev: any) => [...prev, preview]))
      } catch (error) {
        console.error("Error reading files:", error)
      }
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

  const removeFile = (fileName: any, index: number) => {
    const newArr = [...files]
    newArr.splice(index, 1)
    filesPreview.splice(index, 1)
    setFiles([])
    setFiles(newArr)
  }

  const openFileExplorer = () => {
    if (files.length >= 5) {
      return
    }

    inputRef.current.value = ""
    inputRef.current.click()
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <form
        className={cn(
          files.length >= 5
            ? "border-gray-200 bg-gray-100 cursor-not-allowed"
            : "border-brand-secondary bg-gray-50 text-brand-primary cursor-pointer",
          "w-full lg:w-2/4 rounded-lg border-dashed border-2 min-h-[15rem] text-center relative flex-col items-center gap-y-4",
        )}
        onClick={openFileExplorer}
        onDragEnter={handleDragEnter}
        onSubmit={(e) => e.preventDefault()}
        onDrop={handleDrop}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
      >
        <input
          placeholder="fileInput"
          className="hidden"
          ref={inputRef}
          type="file"
          multiple={true}
          onChange={handleChange}
          accept=".png,.jpg,.jpeg,.pdf"
        />

        <div hidden={files.length >= 5} className="absolute top-14 left-0 right-0 text-sm lg:text-base">
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
        <span
          className={cn(
            files.length >= 5 ? "text-red-500" : "text-brand-primary",
            "absolute bottom-3 left-0 right-0 text-xs",
          )}
        >
          Maximum 5 files upload
        </span>
      </form>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center py-4 w-full">
        {files.map((file: any, index: number) =>
          filesPreview[index] !== undefined ? (
            file.type.includes("image") ? (
              <img
                key={index.toString()}
                src={filesPreview[index]}
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
            )
          ) : (
            <div
              key={index.toString()}
              className="w-full h-[13rem] rounded bg-blue-50 flex items-center justify-center"
            >
              <LoaderIcon className="w-10 h-10 text-brand-primary" />
            </div>
          ),
        )}
      </div>
      <div className="flex flex-col items-center p-3">
        {files.map((file: any, index: number) => (
          <div key={index.toString()} className="flex flex-row space-x-5">
            <span>{file.name}</span>
            <span className="text-red-500 cursor-pointer" onClick={() => removeFile(file.name, index)}>
              remove
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FileMultipleUpload
