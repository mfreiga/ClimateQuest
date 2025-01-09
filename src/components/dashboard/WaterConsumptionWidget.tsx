import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Droplet, Users } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface WaterConsumptionWidgetProps {
  monthlyUsage?: number;
  targetUsage?: number;
  residents?: number;
  points?: number;
}

const WaterConsumptionWidget = ({
  monthlyUsage = 150,
  targetUsage = 200,
  residents = 3,
  points = 120,
}: WaterConsumptionWidgetProps) => {
  const progress = (monthlyUsage / targetUsage) * 100;

  return (
    <Card className="w-[400px] bg-white">
      <CardHeader>
        <CardTitle className="text-xl flex items-center justify-between">
          Water Consumption
          <span className="text-sm text-gray-500">{points} points</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="relative pt-4">
          <Progress value={progress} className="h-3" />
          <div className="mt-2 text-sm text-gray-500 text-center">
            {monthlyUsage} of {targetUsage} m³ used
          </div>
        </div>

        <Dialog>
          <DialogTrigger asChild>
            <div className="flex items-center justify-between cursor-pointer hover:bg-gray-50 p-4 rounded border">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-100 rounded-full">
                  <Droplet className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <div className="font-medium">Monthly Usage</div>
                  <div className="text-sm text-gray-500 flex items-center gap-1">
                    <Users className="w-4 h-4" /> {residents} residents
                  </div>
                </div>
              </div>
              <Button variant="outline" size="sm">
                Update
              </Button>
            </div>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Update Water Consumption</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Number of Residents</Label>
                <Input type="number" placeholder="Enter number of residents" />
              </div>
              <div className="space-y-2">
                <Label>Monthly Water Usage (m³)</Label>
                <Input type="number" placeholder="Enter monthly water usage" />
              </div>
              <Button className="w-full">Save Changes</Button>
            </div>
          </DialogContent>
        </Dialog>

        <div className="text-sm text-gray-500">
          Click the card above to update your household water consumption
          details
        </div>
      </CardContent>
    </Card>
  );
};

export default WaterConsumptionWidget;
