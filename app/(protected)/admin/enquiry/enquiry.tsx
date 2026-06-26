"use client"
import { Button } from '@/components/ui/button'
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { getEnquiryById } from '@/lib/actions/enquiry-action'
import React, { useEffect } from 'react'

const SingleEnquiry =  (props: any) => {

    useEffect(() => {
      getEnquiryById(props.id).then((res) => {
        console.log(res.data);
      })
    }, [props.id])
  

    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="outline">Open</Button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Enquiry Detail</SheetTitle>
                   
                </SheetHeader>
                <div className="grid flex-1 auto-rows-min gap-6 px-4">
                    
                </div>
                <SheetFooter>
                    <SheetClose asChild>
                        <Button variant="outline">Close</Button>
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}

export default SingleEnquiry