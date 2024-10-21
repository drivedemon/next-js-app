"use client"

import type {FC} from "react"
import type React from "react"
import {useState} from "react"
import axios from "axios"
import {CHECK_CREDENTIALS} from "@/lib/apiEndPoints"
import {signIn} from "next-auth/react"
import {Label} from "@/components/Forms/Label"
import {Input} from "@/components/Forms/Input"
import {useToast} from "@/components/Toast/useToast"
import SubmitButton from "@/components/Forms/SubmitButton"
import type {TAuthLoginType} from "@/types/Auth"

type LoginProps = {}

const Login: FC<LoginProps> = () => {
  const {toast} = useToast()
  const [loading, setLoading] = useState<boolean>(false)
  const [authState, setAuthState] = useState<TAuthLoginType>({
    username: "",
    password: "",
  })
  const [errors, setErrors] = useState({
    username: [],
    password: [],
  })

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setLoading(true)
    await axios
      .post(CHECK_CREDENTIALS, authState, {
        headers: {
          Accept: "application/json",
        },
      })
      .then((res) => {
        if (res?.status === 200) {
          signIn("credentials", {
            username: authState.username,
            password: authState.password,
            redirect: true,
            callbackUrl: "/dashboard",
          })
          toast({
            variant: "success",
            title: "Logged in successfully!",
          })
        } else {
          toast({
            variant: "danger",
            title: "Something wrong!",
          })
        }
      })
      .catch((err) => {
        toast({
          variant: "danger",
          title: "Username or Password invalid!",
        })
        setLoading(false)
        setErrors(err?.response?.data?.errors)
      })
    setLoading(false)
  }

  return (
    <form onSubmit={handleSubmit} className="px-4 lg:px-10 grid gap-3">
      <div className="flex flex-col gap-y-2">
        <Label htmlFor="username">Username</Label>
        <Input
          id="username"
          type="text"
          placeholder="username"
          className="flex items-center"
          onChange={(e) => setAuthState({...authState, username: e.target.value})}
        />
        <span className="text-red-500 text-sm">{errors?.username?.[0]}</span>
      </div>
      <div className="grid gap-1">
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          placeholder="password"
          type="password"
          onChange={(e) => setAuthState({...authState, password: e.target.value})}
        />
        <span className="text-red-500 text-sm">{errors?.password?.[0]}</span>
      </div>
      <div className="sm:mx-auto">
        <SubmitButton className="w-full md:px-20 lg:px-16" disabled={loading}>
          Sign In
        </SubmitButton>
      </div>
    </form>
  )
}

export default Login
