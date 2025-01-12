import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Home, Car, ShoppingBag, Recycle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface CarbonTrackerWidgetProps {
  totalCarbon?: number;
  maxCarbon?: number;
  categories?: {
    homeEquipment: number;
    transport: number;
    shopping: number;
    waste: number;
  };
}

const CarbonTrackerWidget = ({
  totalCarbon = 450,
  maxCarbon = 1000,
  categories = {
    homeEquipment: 150,
    transport: 200,
    shopping: 50,
    waste: 50,
  },
}: CarbonTrackerWidgetProps) => {
  const progress = (totalCarbon / maxCarbon) * 100;

  return (
    <Card className="w-full bg-white">
      <CardHeader>
        <CardTitle className="text-xl flex items-center justify-between">
          Carbon Footprint
          <span className="text-sm text-gray-500">
            {totalCarbon}/{maxCarbon} kg CO₂
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="relative pt-4">
          <Progress value={progress} className="h-3" />
          <div className="mt-2 text-sm text-gray-500 text-center">
            {progress.toFixed(1)}% of monthly target
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Dialog>
            <DialogTrigger asChild>
              <Card className="cursor-pointer hover:bg-gray-50 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-orange-100 rounded-lg">
                      <Home className="w-6 h-6 text-orange-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Home Equipment</h3>
                      <p className="text-sm text-gray-500">
                        {categories.homeEquipment} kg CO₂
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle>Home Equipment Impact</DialogTitle>
              </DialogHeader>
              <Tabs defaultValue="solar">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="solar">Solar Panels</TabsTrigger>
                  <TabsTrigger value="heat">Heat Pumps</TabsTrigger>
                </TabsList>
                <TabsContent value="solar" className="space-y-4">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label>Number of Solar Panels</Label>
                      <Input
                        type="number"
                        placeholder="Enter number of panels"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Average Daily Sun Hours</Label>
                      <Input type="number" placeholder="Enter sun hours" />
                    </div>
                    <Button className="w-full">Calculate Impact</Button>
                  </div>
                </TabsContent>
                <TabsContent value="heat" className="space-y-4">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label>Heat Pump Type</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="air">Air Source</SelectItem>
                          <SelectItem value="ground">Ground Source</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Home Size (sq ft)</Label>
                      <Input type="number" placeholder="Enter home size" />
                    </div>
                    <Button className="w-full">Calculate Impact</Button>
                  </div>
                </TabsContent>
              </Tabs>
            </DialogContent>
          </Dialog>

          <Dialog>
            <DialogTrigger asChild>
              <Card className="cursor-pointer hover:bg-gray-50 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-blue-100 rounded-lg">
                      <Car className="w-6 h-6 text-blue-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Transportation</h3>
                      <p className="text-sm text-gray-500">
                        {categories.transport} kg CO₂
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle>Transportation Impact</DialogTitle>
              </DialogHeader>
              <Tabs defaultValue="daily">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="daily">Daily Commute</TabsTrigger>
                  <TabsTrigger value="trips">Upcoming Trips</TabsTrigger>
                </TabsList>
                <TabsContent value="daily" className="space-y-4">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label>Transportation Method</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select method" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="car">Car</SelectItem>
                          <SelectItem value="bus">Bus</SelectItem>
                          <SelectItem value="train">Train</SelectItem>
                          <SelectItem value="bike">Bicycle</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Daily Distance (km)</Label>
                      <Input type="number" placeholder="Enter distance" />
                    </div>
                    <Button className="w-full">Calculate Impact</Button>
                  </div>
                </TabsContent>
                <TabsContent value="trips" className="space-y-4">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label>Trip Type</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="flight">Flight</SelectItem>
                          <SelectItem value="train">Train</SelectItem>
                          <SelectItem value="bus">Bus</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Distance (km)</Label>
                      <Input type="number" placeholder="Enter distance" />
                    </div>
                    <Button className="w-full">Calculate Impact</Button>
                  </div>
                </TabsContent>
              </Tabs>
            </DialogContent>
          </Dialog>

          <Dialog>
            <DialogTrigger asChild>
              <Card className="cursor-pointer hover:bg-gray-50 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-green-100 rounded-lg">
                      <ShoppingBag className="w-6 h-6 text-green-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Supermarket Choice</h3>
                      <p className="text-sm text-gray-500">
                        {categories.shopping} kg CO₂
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle>Shopping Impact</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Shopping Type</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="organic">Organic Products</SelectItem>
                      <SelectItem value="conventional">
                        Conventional Products
                      </SelectItem>
                      <SelectItem value="mixed">Mixed Shopping</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Monthly Grocery Budget ($)</Label>
                  <Input type="number" placeholder="Enter amount" />
                </div>
                <Button className="w-full">Calculate Impact</Button>
              </div>
            </DialogContent>
          </Dialog>

          <Dialog>
            <DialogTrigger asChild>
              <Card className="cursor-pointer hover:bg-gray-50 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-purple-100 rounded-lg">
                      <Recycle className="w-6 h-6 text-purple-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Waste Management</h3>
                      <p className="text-sm text-gray-500">
                        {categories.waste} kg CO₂
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle>Waste Management</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Recycling Percentage</Label>
                  <Input type="number" placeholder="Enter percentage" />
                </div>
                <div className="space-y-2">
                  <Label>Waste Type Distribution</Label>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Organic Waste (%)</Label>
                      <Input type="number" placeholder="Enter percentage" />
                    </div>
                    <div className="space-y-2">
                      <Label>Plastic (%)</Label>
                      <Input type="number" placeholder="Enter percentage" />
                    </div>
                    <div className="space-y-2">
                      <Label>Paper (%)</Label>
                      <Input type="number" placeholder="Enter percentage" />
                    </div>
                    <div className="space-y-2">
                      <Label>Glass (%)</Label>
                      <Input type="number" placeholder="Enter percentage" />
                    </div>
                  </div>
                </div>
                <Button className="w-full">Calculate Impact</Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </CardContent>
    </Card>
  );
};

export default CarbonTrackerWidget;
