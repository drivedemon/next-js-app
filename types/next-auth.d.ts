import NextAuth, {type DefaultSession, DefaultUser} from "next-auth"

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
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
    } & DefaultSession["user"]
  }
}
