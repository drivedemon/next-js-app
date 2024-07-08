import {User} from "@/types/User"
import {create} from "zustand"

type UserStore = {
  user: User
  handleUser: (user: User) => void
}

export const useUserStore = create<UserStore>()((set) => ({
  user: null,
  handleUser: (newUser) => set((state) => ({user: newUser})),
}))
