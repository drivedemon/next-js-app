import NextAuth from "next-auth/next"
import {authOptions} from "./authOptions"

// @ts-ignore
const nextAuth = NextAuth(authOptions)

export {nextAuth as GET, nextAuth as POST}
