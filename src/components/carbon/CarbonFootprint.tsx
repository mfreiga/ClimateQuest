import { Card, CardContent } from "@/components/ui/card";
import { Car, Home, ShoppingCart, Recycle, MapPin, Bike } from "lucide-react";
import Navigation from "@/components/ui/navigation";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import FriendLeaderboard from "../dashboard/FriendLeaderboard";

const mockEcoShops = [
  {
    id: 1,
    name: "Green Market",
    distance: 0.5,
    rating: 4.5,
    type: "Bio Mart",
    x: 25,
    y: 35,
  },
  {
    id: 2,
    name: "Bio Store",
    distance: 1.2,
    rating: 4.8,
    type: "Bio Mart",
    x: 65,
    y: 25,
  },
  {
    id: 3,
    name: "Local Supermarket",
    distance: 2.0,
    rating: 4.3,
    type: "Convenient Supermarket",
    x: 45,
    y: 65,
  },
  {
    id: 4,
    name: "Mixed Foods",
    distance: 2.5,
    rating: 4.6,
    type: "Mixed Shopping",
    x: 75,
    y: 55,
  },
];

function CarbonFootprint() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-slate-900 to-teal-900">
      <Navigation showLogin={false} />

      <div className="container mx-auto py-8 px-4">
        <div className="flex gap-8">
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-white mb-2">
              Carbon Footprint
            </h1>
            <p className="text-white/80 mb-6">
              Track and reduce your CO2 emissions.
            </p>

            <Card className="p-6 mb-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="font-semibold mb-1">
                    Carbon Reduction Progress
                  </h3>
                  <p className="text-sm text-gray-500">
                    Monthly Goal: 500kg CO₂
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-semibold">350kg</p>
                  <p className="text-sm text-gray-500">CO₂ Reduced</p>
                </div>
              </div>
              <Progress value={70} className="h-3" />
              <div className="flex justify-between mt-2 text-sm text-gray-500">
                <span>70% Complete</span>
                <span>150kg remaining</span>
              </div>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Dialog>
                <DialogTrigger asChild>
                  <Card className="p-6 cursor-pointer hover:shadow-lg transition-all">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-orange-100 rounded-lg">
                        <Home className="w-6 h-6 text-orange-500" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Home Energy</h3>
                        <p className="text-sm text-gray-500">
                          Log your household energy consumption
                        </p>
                      </div>
                    </div>
                  </Card>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Home Energy Usage</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <Label>Energy Type</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select energy source" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="solar">Solar Panels</SelectItem>
                          <SelectItem value="grid">Grid Electricity</SelectItem>
                        </SelectContent>
                      </Select>
                      <div className="mt-2 space-y-2">
                        <Label>Monthly Energy Usage (kWh)</Label>
                        <Input type="number" placeholder="Enter amount" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>Heating Type</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select heating type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="heatpump">Heat Pump</SelectItem>
                          <SelectItem value="conventional">
                            Conventional Heating
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      <div className="mt-2 space-y-2">
                        <Label>Monthly Heating Usage (kWh)</Label>
                        <Input type="number" placeholder="Enter amount" />
                      </div>
                    </div>
                    <Button className="w-full">Calculate Impact</Button>
                  </div>
                </DialogContent>
              </Dialog>

              <Dialog>
                <DialogTrigger asChild>
                  <Card className="p-6 cursor-pointer hover:shadow-lg transition-all">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-blue-100 rounded-lg">
                        <Car className="w-6 h-6 text-blue-500" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Transportation</h3>
                        <p className="text-sm text-gray-500">
                          Track your travel emissions
                        </p>
                      </div>
                    </div>
                  </Card>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Transportation Impact</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label>Vehicle Type</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="car">Car</SelectItem>
                          <SelectItem value="bicycle">Bicycle</SelectItem>
                          <SelectItem value="motorcycle">Motorcycle</SelectItem>
                          <SelectItem value="bus">Bus</SelectItem>
                          <SelectItem value="train">Train</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Distance (km)</Label>
                      <Input type="number" placeholder="Enter distance" />
                    </div>
                    <Button className="w-full">Calculate Impact</Button>
                  </div>
                </DialogContent>
              </Dialog>

              <Dialog>
                <DialogTrigger asChild>
                  <Card className="p-6 cursor-pointer hover:shadow-lg transition-all">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-green-100 rounded-lg">
                        <ShoppingCart className="w-6 h-6 text-green-500" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Shopping</h3>
                        <p className="text-sm text-gray-500">
                          Monitor your consumption habits
                        </p>
                      </div>
                    </div>
                  </Card>
                </DialogTrigger>
                <DialogContent>
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
                          <SelectItem value="biomart">Bio Mart</SelectItem>
                          <SelectItem value="convenient">
                            Convenient Supermarket
                          </SelectItem>
                          <SelectItem value="mixed">Mixed Shopping</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Monthly Grocery Budget ($)</Label>
                      <Input type="number" placeholder="Enter amount" />
                    </div>
                    <div className="space-y-2">
                      <Label>Eco-Friendly Shops Nearby</Label>
                      <div className="relative w-full h-[300px] rounded-lg overflow-hidden border bg-slate-50">
                        {/* Map Background with Streets */}
                        <div className="absolute inset-0">
                          <div className="w-full h-full">
                            {/* Horizontal Streets */}
                            <div className="absolute top-1/4 w-full h-[1px] bg-gray-200" />
                            <div className="absolute top-2/4 w-full h-[1px] bg-gray-200" />
                            <div className="absolute top-3/4 w-full h-[1px] bg-gray-200" />
                            {/* Vertical Streets */}
                            <div className="absolute left-1/4 h-full w-[1px] bg-gray-200" />
                            <div className="absolute left-2/4 h-full w-[1px] bg-gray-200" />
                            <div className="absolute left-3/4 h-full w-[1px] bg-gray-200" />
                          </div>
                        </div>

                        {/* Current Location Marker */}
                        <div
                          className="absolute group"
                          style={{ left: "50%", top: "50%" }}
                        >
                          <div className="w-4 h-4 bg-blue-500 rounded-full animate-ping" />
                          <div className="w-4 h-4 bg-blue-500 rounded-full absolute top-0" />
                          <div className="hidden group-hover:block absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-blue-500 text-white text-xs rounded whitespace-nowrap">
                            Your Location
                          </div>
                        </div>

                        {/* Shop Location Pins */}
                        {mockEcoShops.map((shop) => (
                          <div
                            key={shop.id}
                            className="absolute group cursor-pointer"
                            style={{ left: `${shop.x}%`, top: `${shop.y}%` }}
                          >
                            <div className="p-2 bg-green-100 rounded-full">
                              <MapPin className="w-4 h-4 text-green-600" />
                            </div>
                            <div className="hidden group-hover:block absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-2 bg-white rounded-lg shadow-lg text-sm z-10">
                              <h4 className="font-medium">{shop.name}</h4>
                              <p className="text-gray-500">
                                {shop.distance} km away
                              </p>
                              <p className="text-green-600">★ {shop.rating}</p>
                              <p className="text-gray-500 text-xs">
                                {shop.type}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <Button className="w-full">Calculate Impact</Button>
                  </div>
                </DialogContent>
              </Dialog>

              <Dialog>
                <DialogTrigger asChild>
                  <Card className="p-6 cursor-pointer hover:shadow-lg transition-all">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-purple-100 rounded-lg">
                        <Recycle className="w-6 h-6 text-purple-500" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Waste</h3>
                        <p className="text-sm text-gray-500">
                          Track your recycling efforts
                        </p>
                      </div>
                    </div>
                  </Card>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Waste Management</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label>Waste Type</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">General Waste</SelectItem>
                          <SelectItem value="recycling">Recycling</SelectItem>
                          <SelectItem value="compost">Compost</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Amount (kg)</Label>
                      <Input type="number" placeholder="Enter amount" />
                    </div>
                    <Button className="w-full">Calculate Impact</Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>

          <div className="w-[300px]">
            <FriendLeaderboard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarbonFootprint;
