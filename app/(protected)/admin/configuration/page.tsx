import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import React from 'react'
import GeneralComponent from './general'
import EmailComponent from './email'
import SocialComponent from './social'

const page = () => {
    return (
        <Card>
            <CardHeader>
                <div className="flex justify-between items-center">
                    <h1 className='text-2xl font-bold'>Configuration</h1>
                </div>
            </CardHeader>

            <CardContent>
                <Tabs defaultValue="general">
                    <TabsList variant="line">
                        <TabsTrigger value="general">General</TabsTrigger>
                        <TabsTrigger value="email">Email</TabsTrigger>
                        <TabsTrigger value="social">Social Media</TabsTrigger>
                    </TabsList>
                    <TabsContent value="general">
                        <GeneralComponent />
                    </TabsContent>
                    <TabsContent value="email">
                        <EmailComponent />
                    </TabsContent>
                    <TabsContent value="social">
                        <SocialComponent />
                    </TabsContent>
                </Tabs>
            </CardContent>
        </Card>
    )
}

export default page