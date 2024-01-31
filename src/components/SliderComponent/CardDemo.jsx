import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";


function CardDemo() {
  return (
    <div>
      
        <Card className="">
          <CardHeader>
            <CardTitle>You have a new message!</CardTitle>
            <CardDescription>2 hours ago</CardDescription>
          </CardHeader>
          
        </Card>
        <Card className="">
          <CardHeader>
            <CardTitle>You have </CardTitle>
            <CardDescription>1 hours ago</CardDescription>
          </CardHeader>
          
        </Card>
    
    </div>
  );
}

export default CardDemo;
