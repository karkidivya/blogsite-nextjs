import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import Image from "next/image"

export function CardWithForm() {
  return (
    <Card className="w-[350px] mt-2">
      <CardHeader>
        <CardTitle>Title</CardTitle>
        <CardDescription>Aurthor/Publish date</CardDescription>
      </CardHeader>
      <CardContent>
        
          <div className="grid w-full items-center gap-4">
            <Image src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPxhSCn_f1Fh4-MSEB6ve9ML1yspVf9eYWlSzVnNgpjw&s"}
           width={400} height={400}
           alt="alternate image"/>
          </div>
        
      </CardContent>
      <CardFooter className="flex justify-between">
        {/* <Button variant="outline">Cancel</Button> */}
        <Button>See More</Button>
      </CardFooter>
    </Card>
  )
}
