type Routing = {
  path: string
  name: string
}

export const Routers: Routing[] = [
  {
    path: "/dashboard",
    name: "Dashboard",
  },
  {
    path: "/benefits",
    name: "Benefits",
  },
  {
    path: "/claims",
    name: "Claims",
  },
  {
    path: "/profile",
    name: "Profile",
  },
]
