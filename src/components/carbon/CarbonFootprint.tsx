import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Car, Home, ShoppingCart, Recycle } from "lucide-react";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import FriendLeaderboard from "../dashboard/FriendLeaderboard";

function CarbonFootprint() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-slate-900 to-teal-900">
      <nav className="container mx-auto px-4 py-6 flex items-center">
        <Link
          to="/"
          className="text-2xl font-bold text-white hover:text-gray-300"
        >
          CLIMATEQUEST
        </Link>
        <div className="flex-1 flex justify-end items-center gap-8">
          <Link to="/challenges" className="text-white hover:text-gray-300">
            Challenges
          </Link>
          <Link to="/community" className="text-white hover:text-gray-300">
            Community
          </Link>
          <Link to="/about" className="text-white hover:text-gray-300">
            About Us
          </Link>
        </div>
      </nav>

      <div className="container mx-auto py-8 px-4">
        <div className="flex gap-8">
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-white mb-2">
              My Carbon - Footprint
            </h1>
            <p className="text-white/80 mb-6">
              Track and reduce your CO2 emissions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Dialog>
                <DialogTrigger asChild>
                  <Card className="cursor-pointer hover:bg-gray-50 transition-colors">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-blue-100 rounded-lg">
                          <Car className="w-6 h-6 text-blue-500" />
                        </div>
                        <div>
                          <h3 className="font-semibold">Daily Commute</h3>
                          <p className="text-sm text-gray-500">
                            Track your transport emissions
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Daily Commute Details</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label>Mode of Transport</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select transport mode" />
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
                      <Label>Distance (km)</Label>
                      <Input type="number" placeholder="Enter distance" />
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
                        <div className="p-3 bg-orange-100 rounded-lg">
                          <Home className="w-6 h-6 text-orange-500" />
                        </div>
                        <div>
                          <h3 className="font-semibold">Home Equipment</h3>
                          <p className="text-sm text-gray-500">
                            Track home energy usage
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Home Equipment Details</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label>Solar Panels</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Do you have solar panels?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="yes">Yes</SelectItem>
                          <SelectItem value="no">No</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Heat Pump</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Do you have a heat pump?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="yes">Yes</SelectItem>
                          <SelectItem value="no">No</SelectItem>
                        </SelectContent>
                      </Select>
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
                        <div className="p-3 bg-green-100 rounded-lg">
                          <ShoppingCart className="w-6 h-6 text-green-500" />
                        </div>
                        <div>
                          <h3 className="font-semibold">Supermarket Choices</h3>
                          <p className="text-sm text-gray-500">
                            Track shopping impact
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Shopping Details</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label>Organic Products (%)</Label>
                      <Input type="number" placeholder="Enter percentage" />
                    </div>
                    <div className="space-y-2">
                      <Label>Local Products (%)</Label>
                      <Input type="number" placeholder="Enter percentage" />
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
                            Track recycling impact
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Recycling Details</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label>Recycling Rate (%)</Label>
                      <Input type="number" placeholder="Enter percentage" />
                    </div>
                    <div className="space-y-2">
                      <Label>Composting</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Do you compost?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="yes">Yes</SelectItem>
                          <SelectItem value="no">No</SelectItem>
                        </SelectContent>
                      </Select>
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
