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

interface BlogPostProps {
  key : number;
  title: string;
  content: string;
  author: string;
  image: string;
  
}



 const CardWithForm : React.FC<BlogPostProps>  = ({key,  title,image, content, author }) => {

  const words = content.split(' ');
  const truncatedContent = words.slice(0, 10).join(' ');
  return (
    <Card className="w-[350px] mt-5 mx-5" >
    <CardHeader>
      <CardTitle>{title}</CardTitle>
      <CardDescription>by {author}</CardDescription>
    </CardHeader>
    <CardContent>
      
        <div className="grid w-full items-center gap-4">
          <Image src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPxhSCn_f1Fh4-MSEB6ve9ML1yspVf9eYWlSzVnNgpjw&s"}
         width={400} height={400}
         alt="alternate image"/>
        </div>

      
    </CardContent>
    <CardDescription className="mx-5 mb-1">{truncatedContent}</CardDescription>
    <CardFooter className="flex justify-between">
      {/* <Button variant="outline">Cancel</Button> */}
      <Button>See More</Button>
    </CardFooter>
  </Card>
  )
}

export default CardWithForm;
