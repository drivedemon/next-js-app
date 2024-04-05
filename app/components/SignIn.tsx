"use client"

import * as React from "react"
import { Input } from "@/app/components/forms/input"
import { Label } from "@/app/components/forms/label"
import { Button } from "@/app/components/forms/button"
import { cn } from "@/lib/utils"

// @ts-ignore
export default function SignIn(props) {
    return (
        <form method="POST" action="https://www.formbackend.com/f/664decaabbf1c319"
              className={cn("px-10 grid gap-6", props.className)}>
            <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input className="flex items-center" type="email" name="email" id="email" placeholder="EMAIL" />
            </div>
            <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input className="flex items-center" type="password" name="password" id="password"
                       placeholder="PASSWORD" />
            </div>
            <div className="mx-auto">
                <Button className="button bg-slate-400 px-10 hover:bg-slate-500" type="submit">Sign In</Button>
            </div>
        </form>
    )
}