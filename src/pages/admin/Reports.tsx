
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

const AdminReports = () => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Financial Reports</CardTitle>
          <CardDescription>
            Generate and download financial reports
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <h3 className="font-medium">Monthly Revenue Report</h3>
                <p className="text-sm text-muted-foreground">Financial summary for the current month</p>
              </div>
              <Button>
                <Download className="mr-2 h-4 w-4" />
                Download
              </Button>
            </div>
            
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <h3 className="font-medium">Creator Payouts</h3>
                <p className="text-sm text-muted-foreground">Payment records for content creators</p>
              </div>
              <Button>
                <Download className="mr-2 h-4 w-4" />
                Download
              </Button>
            </div>
            
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <h3 className="font-medium">Tax Summary</h3>
                <p className="text-sm text-muted-foreground">Tax information for the fiscal year</p>
              </div>
              <Button>
                <Download className="mr-2 h-4 w-4" />
                Download
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>System Analytics</CardTitle>
          <CardDescription>
            Platform usage and performance metrics
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-80 flex items-center justify-center border border-dashed border-gray-300 rounded-lg">
            <p className="text-gray-500">System analytics chart will be displayed here</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminReports;
