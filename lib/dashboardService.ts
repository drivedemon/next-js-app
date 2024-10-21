import {DASHBOARD_URL} from "@/lib/apiEndPoints"
import type {IAuthUser} from "@/app/api/auth/[...nextauth]/authOptions"
import type {TDashboardModule} from "@/types/Dashboard"

const getDashboard = async (data: IAuthUser | null): Promise<TDashboardModule[] | null> => {
  const res = await fetch(DASHBOARD_URL, {
    headers: {
      Authorization: `Bearer ${data?.token}`,
      Accept: "application/json",
    },
  })

  const response = await res.json()
  if (response?.is_request_success) {
    return response.data
  }

  return null
}

export default getDashboard
