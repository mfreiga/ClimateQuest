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
    <Card className="w-[400px] bg-white">
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

        <div className="space-y-3">
          <Dialog>
            <DialogTrigger asChild>
              <div className="flex items-center justify-between cursor-pointer hover:bg-gray-50 p-2 rounded">
                <div className="flex items-center gap-2">
                  <Home className="w-5 h-5 text-orange-500" />
                  <span>Home Equipment</span>
                </div>
                <span>{categories.homeEquipment} kg</span>
              </div>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Home Equipment Impact</DialogTitle>
              </DialogHeader>
              <Tabs defaultValue="solar">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="solar">Solar Panels</TabsTrigger>
                  <TabsTrigger value="heat">Heat Pumps</TabsTrigger>
                </TabsList>
                <TabsContent value="solar" className="space-y-4">
                  <div className="p-4 border rounded">
                    <h4 className="font-medium">Solar Panel Details</h4>
                    {/* Add solar panel form fields */}
                  </div>
                </TabsContent>
                <TabsContent value="heat" className="space-y-4">
                  <div className="p-4 border rounded">
                    <h4 className="font-medium">Heat Pump Details</h4>
                    {/* Add heat pump form fields */}
                  </div>
                </TabsContent>
              </Tabs>
            </DialogContent>
          </Dialog>

          <Dialog>
            <DialogTrigger asChild>
              <div className="flex items-center justify-between cursor-pointer hover:bg-gray-50 p-2 rounded">
                <div className="flex items-center gap-2">
                  <Car className="w-5 h-5 text-blue-500" />
                  <span>Transportation</span>
                </div>
                <span>{categories.transport} kg</span>
              </div>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Transportation Impact</DialogTitle>
              </DialogHeader>
              <Tabs defaultValue="daily">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="daily">Daily Commute</TabsTrigger>
                  <TabsTrigger value="trips">Upcoming Trips</TabsTrigger>
                </TabsList>
                <TabsContent value="daily" className="space-y-4">
                  <div className="p-4 border rounded">
                    <h4 className="font-medium">Daily Transportation</h4>
                    {/* Add daily commute form fields */}
                  </div>
                </TabsContent>
                <TabsContent value="trips" className="space-y-4">
                  <div className="p-4 border rounded">
                    <h4 className="font-medium">Trip Details</h4>
                    {/* Add trip planning form fields */}
                  </div>
                </TabsContent>
              </Tabs>
            </DialogContent>
          </Dialog>

          <Dialog>
            <DialogTrigger asChild>
              <div className="flex items-center justify-between cursor-pointer hover:bg-gray-50 p-2 rounded">
                <div className="flex items-center gap-2">
                  <ShoppingBag className="w-5 h-5 text-green-500" />
                  <span>Supermarket Choice</span>
                </div>
                <span>{categories.shopping} kg</span>
              </div>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Shopping Impact</DialogTitle>
              </DialogHeader>
              <div className="p-4 border rounded">
                <h4 className="font-medium">Shopping Habits</h4>
                {/* Add shopping habits form fields */}
              </div>
            </DialogContent>
          </Dialog>

          <Dialog>
            <DialogTrigger asChild>
              <div className="flex items-center justify-between cursor-pointer hover:bg-gray-50 p-2 rounded">
                <div className="flex items-center gap-2">
                  <Recycle className="w-5 h-5 text-purple-500" />
                  <span>Waste Management</span>
                </div>
                <span>{categories.waste} kg</span>
              </div>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Waste Management</DialogTitle>
              </DialogHeader>
              <div className="p-4 border rounded">
                <h4 className="font-medium">Recycling & Waste</h4>
                {/* Add waste management form fields */}
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </CardContent>
    </Card>
  );
};

export default CarbonTrackerWidget;
