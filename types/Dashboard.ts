import type {ForwardRefExoticComponent} from "react"
import type {LucideProps} from "lucide-react"

export type TDashboardModule = {
  id?: string
  module_name: string
  display_name: string
  sequential?: number
  record_status?: number
  record_status_text?: string
  created_at?: number
  updated_at?: number
}

export type TDashboardConstant = {
  key: string
  href: string
  page: string
  value: string
  icon: ForwardRefExoticComponent<LucideProps>
}
