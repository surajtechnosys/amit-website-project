import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const Home = () => {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <h1 className="text-2xl font-bold">Hero Banner</h1>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="tagline">Tagline</Label>
              <Input />
            </div>

            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input />
            </div>

            <div className="col-span-2 space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea className="min-h-[100px]" />
            </div>

            <div className="col-span-2 space-y-2">
              <div className="flex items-center justify-between">
                <h2 className="font-semibold">Trust Metrics List</h2>
                <Button>Add list</Button>
              </div>
              <Input />
              <Input />
              <Input />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <h1 className="text-2xl font-bold">About US</h1>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="tagline">Tagline</Label>
              <Input />
            </div>

            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input />
            </div>

            <div className="col-span-2 space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea className="min-h-[100px]" />
            </div>

            <div className="col-span-2 space-y-2">
              <div className="flex items-center justify-between">
                <h2 className="font-semibold">List</h2>
                <Button>Add list</Button>
              </div>
              <Input />
              <Input />
              <Input />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <h1 className="text-2xl font-bold">Delivery Model</h1>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input />
            </div>

            <div className="col-span-2 space-y-2">
              <div className="flex items-center justify-between">
                <h2 className="font-semibold">Item</h2>
                <Button>Add list</Button>
              </div>
              <Input />
              <Input />
              <Input />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <h1 className="text-2xl font-bold">Why Clients Choose Us</h1>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">

            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input />
            </div>

            <div className="col-span-2 space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea className="min-h-[100px]" />
            </div>

            <div className="col-span-2 space-y-2">
              <div className="flex items-center justify-between">
                <h2 className="font-semibold">Item</h2>
                <Button>Add list</Button>
              </div>
              <Input />
              <Input />
              <Input />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <h1 className="text-2xl font-bold">OUR GLOBAL DELIVERY MODEL</h1>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input />
            </div>

            <div className="space-y-2">
              <Label htmlFor="image">Image</Label>
              <Input />
            </div>

            <div className="col-span-2 space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea className="min-h-[100px]" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Home;
