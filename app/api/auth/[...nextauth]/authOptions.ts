import {LOGIN_URL} from "@/lib/apiEndPoints"
import axios from "axios"
import CredentialsProvider from "next-auth/providers/credentials"
import type {AuthOptions, ISODateString} from "next-auth"

export interface AuthUserSession {
  user: AuthUser
  expires: ISODateString
}

export interface AuthUser {
  uuid?: string | null
  login_buffer_day?: number | null
  first_name?: string | null
  last_name?: string | null
  email?: string | null
  billing_address?: string | null
  phone_number?: string | null
  dob?: string | null
  gender?: string | null
  role?: string | null
  token?: string | null
  account_status?: number | null
  record_status?: number | null
  created_by?: string | null
  updated_by?: string | null
}

export const authOptions: AuthOptions = {
  pages: {
    signIn: "/",
  },
  session: {
    maxAge: 60 * 60, // 1 hour (day * hour * min * sec)
  },
  callbacks: {
    async jwt({token, user}: any) {
      if (user) {
        token.user = user
      }
      return token
    },

    async session({session, token}: any) {
      if (token) {
        session.user = token.user as AuthUser
      }
      return session
    },
  },

  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        username: {},
        password: {},
      },
      async authorize(credentials) {
        const res = await axios.post(LOGIN_URL, credentials)
        const response = res.data
        const user = response?.user
        if (user) {
          return user
        }
        return null
      },
    }),
  ],
}
