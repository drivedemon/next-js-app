"use client"

import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/Card"
import {Label} from "@/components/Forms/Label"
import {Button} from "@/components/Forms/Button"
import type React from "react"
import {useState} from "react"
import {Input} from "@/components/Forms/Input"
import {Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow} from "@/components/Forms/Table"
import {cn} from "@/lib/utils"

const Profile: React.FC = () => {
  const [isOpenForm, setIsOpenForm] = useState(false)

  return (
    <div className="flex flex-col gap-y-6">
      <div className="lg:px-4">
        <Card className="bg-white">
          <form action={""}>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>Information</CardTitle>
                {/*TODO: Phase 1 only display cant update*/}
                <div className="hidden">
                  {isOpenForm ? (
                    <div className="flex gap-x-3">
                      <Button variant="danger" size="lg" onClick={() => setIsOpenForm(!isOpenForm)}>
                        Cancel
                      </Button>
                      <Button variant="success" size="lg" onClick={() => setIsOpenForm(!isOpenForm)}>
                        Confirm
                      </Button>
                    </div>
                  ) : (
                    <Button variant="primary" size="lg" onClick={() => setIsOpenForm(!isOpenForm)}>
                      Edit profile
                    </Button>
                  )}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                <div className="flex flex-col gap-y-1">
                  <Label htmlFor="username" className="text-sm lg:text-base font-semibold">
                    Login Username
                  </Label>
                  {isOpenForm ? (
                    <Input className="flex items-center lg:w-2/3" type="text" name="username" id="username" />
                  ) : (
                    <p className="text-sm lg:text-base font-normal">drive123</p>
                  )}
                </div>
                <div className="flex flex-col gap-y-1">
                  <Label htmlFor="role" className="text-sm lg:text-base font-semibold">
                    Role
                  </Label>
                  {isOpenForm ? (
                    <Input className="flex items-center lg:w-2/3" type="text" name="role" id="role" />
                  ) : (
                    <p className="text-sm lg:text-base font-normal">USER</p>
                  )}
                </div>
                <div className="flex flex-col gap-y-1">
                  <Label htmlFor="fullname" className="text-sm lg:text-base font-semibold">
                    Fullname
                  </Label>
                  {isOpenForm ? (
                    <Input className="flex items-center lg:w-2/3" type="text" name="fullname" id="fullname" />
                  ) : (
                    <p className="text-sm lg:text-base font-normal">drive test</p>
                  )}
                </div>
                <div className="flex flex-col gap-y-1">
                  <Label htmlFor="personal_email" className="text-sm lg:text-base font-semibold">
                    Personal Email Address
                  </Label>
                  {isOpenForm ? (
                    <Input
                      className="flex items-center lg:w-2/3"
                      type="text"
                      name="personal_email"
                      id="personal_email"
                    />
                  ) : (
                    <p className="text-sm lg:text-base font-normal">drive@mail.com</p>
                  )}
                </div>
                <div className="flex flex-col gap-y-1">
                  <Label htmlFor="dob" className="text-sm lg:text-base font-semibold">
                    Date of Birth
                  </Label>
                  {isOpenForm ? (
                    <Input className="flex items-center lg:w-2/3" type="text" name="dob" id="dob" />
                  ) : (
                    <p className="text-sm lg:text-base font-normal">1 Jan 1950</p>
                  )}
                </div>
                <div className="flex flex-col gap-y-1">
                  <Label htmlFor="gender" className="text-sm lg:text-base font-semibold">
                    Gender
                  </Label>
                  {isOpenForm ? (
                    <Input className="flex items-center lg:w-2/3" type="text" name="gender" id="gender" />
                  ) : (
                    <p className="text-sm lg:text-base font-normal">Male</p>
                  )}
                </div>
                <div className="flex flex-col gap-y-1">
                  <Label htmlFor="account_status" className="text-sm lg:text-base font-semibold">
                    Account Status
                  </Label>
                  {isOpenForm ? (
                    <Input
                      className="flex items-center lg:w-2/3"
                      type="text"
                      name="account_status"
                      id="account_status"
                    />
                  ) : (
                    <p className="text-sm lg:text-base font-normal">Active</p>
                  )}
                </div>
                <div className="flex flex-col gap-y-1">
                  <Label htmlFor="mobile_number" className="text-sm lg:text-base font-semibold">
                    Mobile Number
                  </Label>
                  {isOpenForm ? (
                    <Input className="flex items-center lg:w-2/3" type="text" name="mobile_number" id="mobile_number" />
                  ) : (
                    <p className="text-sm lg:text-base font-normal">02 000 0001</p>
                  )}
                </div>
                <div className="hidden flex flex-col gap-y-3">
                  <Button
                    className={cn(isOpenForm ? "hidden" : "block", "lg:hidden")}
                    variant="primary"
                    size="sm"
                    type="button"
                    onClick={() => setIsOpenForm(!isOpenForm)}
                  >
                    Edit profile
                  </Button>
                  {isOpenForm && (
                    <>
                      <Button variant="success" size="sm" onClick={() => setIsOpenForm(!isOpenForm)}>
                        Confirm
                      </Button>
                      <Button variant="danger" size="sm" onClick={() => setIsOpenForm(!isOpenForm)}>
                        Cancel
                      </Button>
                    </>
                  )}
                </div>
              </div>
            </CardContent>
          </form>
        </Card>
      </div>

      <div className="lg:px-4">
        <Card className="bg-white">
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>My Dependants</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow className="bg-brand-primary hover:bg-brand-primary text-white">
                  <TableHead className="text-nowrap lg:w-[30%]">Dependant Name</TableHead>
                  <TableHead className="text-nowrap lg:w-[25%]">ID Card No.</TableHead>
                  <TableHead className="text-nowrap lg:w-[15%]">Date of Birth</TableHead>
                  <TableHead className="text-nowrap lg:w-[15%]">Gender</TableHead>
                  <TableHead className="text-nowrap lg:w-[15%]">Relationship</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Rentorl Svanhildr</TableCell>
                  <TableCell>R1234</TableCell>
                  <TableCell>1 Jan 1980</TableCell>
                  <TableCell>Male</TableCell>
                  <TableCell>Parent</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Elrim Svanhildr</TableCell>
                  <TableCell>R1234</TableCell>
                  <TableCell>1 Jan 1980</TableCell>
                  <TableCell>Male</TableCell>
                  <TableCell>Parent</TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <TableCaption>Please inform HR if you have any discrepancies/updates in your personal data.</TableCaption>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Profile
