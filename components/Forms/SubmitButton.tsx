import type React from "react"
import type {FC} from "react"
import {Button} from "@/components/Forms/Button"
import {Loader2} from "lucide-react"

import {cn} from "@/lib/utils"

interface SubmitButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  disabled?: boolean
}

const SubmitButton: FC<SubmitButtonProps> = (props) => {
  return (
    <Button
      className={cn(props.className, "button bg-slate-700 px-10 hover:bg-slate-900")}
      disabled={props.disabled}
      type="submit"
    >
      {props.disabled ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : props.children ?? "Submit"}
    </Button>
  )
}

export default SubmitButton
