"use client"

import type React from "react"
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/Card"
import {cn, moneyDecimal} from "@/lib/utils"
import {useState} from "react"
import ClaimSubMenu, {claimTypeDisplay, claimTypePage, type SubMenuClaimType} from "@/components/Claims/SubMenu"
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/Forms/Table"
import {Badge} from "@/components/ui/Badge"
import {Eye, Pencil, Trash2} from "lucide-react"
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/Forms/Select"

const Track: React.FC = () => {
  const [claimType, setClaimType] = useState<SubMenuClaimType>({key: claimTypePage[0], value: claimTypeDisplay[0]})

  return (
    <Card className="shadow-brand-primary h-full">
      <ClaimSubMenu claimTypeState={setClaimType} />
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          {claimType.value}
          <div className="flex items-center gap-x-4">
            <div className={claimType.key === claimTypePage[0] ? "block" : "hidden"}>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Status" defaultValue="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="status">status</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Policy Year" defaultValue="Policy Year" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="2023">2023</SelectItem>
                <SelectItem value="2024">2024</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow className="bg-brand-primary hover:bg-brand-primary text-white">
              <TableHead className="text-nowrap text-center w-[10%]">Status</TableHead>
              <TableHead className="text-wrap w-[15%]">Claimant Name</TableHead>
              <TableHead className="text-wrap w-[10%]">Policy Type</TableHead>
              <TableHead className="text-wrap w-[10%]">Receipt Date</TableHead>
              <TableHead className="text-wrap w-[10%]">Receipt Amount</TableHead>
              <TableHead className="text-wrap w-[10%]">Created On</TableHead>
              <TableHead className="text-nowrap w-[20%]">Remark</TableHead>
              <TableHead className="text-nowrap text-center w-[10%]">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>
                <Badge variant={claimType.key === claimTypePage[0] ? "default" : "success"}>
                  {claimType.key === claimTypePage[0] ? "Submitted" : "Completed"}
                </Badge>
              </TableCell>
              <TableCell>Drive test</TableCell>
              <TableCell>Medical</TableCell>
              <TableCell>01 Jan 2024</TableCell>
              <TableCell>{moneyDecimal(10000)}</TableCell>
              <TableCell>01 Jan 2024</TableCell>
              <TableCell>
                <div className="line-clamp-4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elitit amet, consectetur adipisicing elitLorem
                  ipsum dolor sit amet, consectetur adipisicing elitit amet, consectetur adipisicing elit
                </div>
              </TableCell>
              <TableCell>
                <div className="flex items-center justify-center gap-x-3 px-2">
                  <Pencil
                    className={cn(claimType.key === claimTypePage[1] && "hidden", "w-5 h-5 text-brand-primary")}
                  />
                  <Eye className="w-5 h-5 text-brand-primary" />
                  <Trash2
                    className={cn(claimType.key === claimTypePage[1] && "hidden", "w-5 h-5 text-brand-primary")}
                  />
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Badge variant={claimType.key === claimTypePage[0] ? "outline" : "success"}>
                  {claimType.key === claimTypePage[0] ? "Draft" : "Completed"}
                </Badge>
              </TableCell>
              <TableCell>Drive test</TableCell>
              <TableCell>Medical</TableCell>
              <TableCell>01 Jan 2024</TableCell>
              <TableCell>{moneyDecimal(10000)}</TableCell>
              <TableCell>01 Jan 2024</TableCell>
              <TableCell>-</TableCell>
              <TableCell>
                <div className="flex items-center justify-center gap-x-3 px-2">
                  <Pencil
                    className={cn(claimType.key === claimTypePage[1] && "hidden", "w-5 h-5 text-brand-primary")}
                  />
                  <Eye className="w-5 h-5 text-brand-primary" />
                  <Trash2
                    className={cn(claimType.key === claimTypePage[1] && "hidden", "w-5 h-5 text-brand-primary")}
                  />
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Badge variant={claimType.key === claimTypePage[0] ? "danger" : "success"} className="text-center">
                  {claimType.key === claimTypePage[0] ? "Missing Information" : "Completed"}
                </Badge>
              </TableCell>
              <TableCell>Drive test</TableCell>
              <TableCell>Medical</TableCell>
              <TableCell>01 Jan 2024</TableCell>
              <TableCell>{moneyDecimal(10000)}</TableCell>
              <TableCell>01 Jan 2024</TableCell>
              <TableCell>-</TableCell>
              <TableCell>
                <div className="flex items-center justify-center gap-x-3 px-2">
                  <Pencil
                    className={cn(claimType.key === claimTypePage[1] && "hidden", "w-5 h-5 text-brand-primary")}
                  />
                  <Eye className="w-5 h-5 text-brand-primary" />
                  <Trash2
                    className={cn(claimType.key === claimTypePage[1] && "hidden", "w-5 h-5 text-brand-primary")}
                  />
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Badge variant={claimType.key === claimTypePage[0] ? "secondary" : "success"} className="text-center">
                  {claimType.key === claimTypePage[0] ? "In Progress" : "Completed"}
                </Badge>
              </TableCell>
              <TableCell>Drive test</TableCell>
              <TableCell>Medical</TableCell>
              <TableCell>01 Jan 2024</TableCell>
              <TableCell className="text-nowrap">{moneyDecimal(10000)}</TableCell>
              <TableCell>01 Jan 2024</TableCell>
              <TableCell>-</TableCell>
              <TableCell>
                <div className="flex items-center justify-center gap-x-3 px-2">
                  <Pencil
                    className={cn(claimType.key === claimTypePage[1] && "hidden", "w-5 h-5 text-brand-primary")}
                  />
                  <Eye className="w-5 h-5 text-brand-primary" />
                  <Trash2
                    className={cn(claimType.key === claimTypePage[1] && "hidden", "w-5 h-5 text-brand-primary")}
                  />
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

export default Track
