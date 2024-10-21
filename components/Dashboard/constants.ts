import type {TDashboardConstant} from "@/types/Dashboard"
import {Building2, CreditCard, FileInput, FileText, ListTodo, Umbrella} from "lucide-react"

export const CDashboard: TDashboardConstant[] = [
  {
    key: "benefit_coverage",
    href: "/benefits",
    page: "benefit_overview",
    value: "Benefits Coverage",
    icon: Umbrella,
  },
  {
    key: "policy_document",
    href: "/benefits",
    page: "benefit_document",
    value: "Policy Document",
    icon: FileText,
  },
  {
    key: "submit_claim",
    href: "/claims",
    page: "claim_create",
    value: "Submit claims",
    icon: FileInput,
  },
  {
    key: "track_claim",
    href: "/claims",
    page: "claim_track",
    value: "Track claims",
    icon: ListTodo,
  },
  {
    key: "ecard",
    href: "/e-card",
    page: "e_card",
    value: "eCard",
    icon: CreditCard,
  },
  {
    key: "clinics",
    href: "/clinics",
    page: "clinics",
    value: "Clinics",
    icon: Building2,
  },
]
