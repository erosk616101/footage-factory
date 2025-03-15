
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const AdminSettings = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Platform Settings</CardTitle>
        <CardDescription>
          Configure global settings for the platform
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium">General Settings</h3>
            <div className="mt-4 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">Platform Name</h4>
                  <p className="text-sm text-muted-foreground">The name of your stock platform</p>
                </div>
                <input 
                  type="text" 
                  className="w-64 px-4 py-2 border border-gray-300 rounded-md"
                  defaultValue="Habibi Stock"
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">Commission Rate</h4>
                  <p className="text-sm text-muted-foreground">Percentage taken from each sale</p>
                </div>
                <div className="w-64 flex items-center">
                  <input 
                    type="number" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md"
                    defaultValue="30"
                  />
                  <span className="ml-2">%</span>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium">Email Settings</h3>
            <div className="mt-4 space-y-4">
              <div className="flex items-center gap-2">
                <input 
                  type="checkbox" 
                  id="sales-emails" 
                  className="h-4 w-4 rounded border-gray-300"
                  defaultChecked
                />
                <label htmlFor="sales-emails" className="text-sm">
                  Send sales notification emails
                </label>
              </div>
              
              <div className="flex items-center gap-2">
                <input 
                  type="checkbox" 
                  id="content-emails" 
                  className="h-4 w-4 rounded border-gray-300"
                  defaultChecked
                />
                <label htmlFor="content-emails" className="text-sm">
                  Send content approval emails
                </label>
              </div>
            </div>
          </div>
          
          <div>
            <Button>Save Settings</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AdminSettings;
