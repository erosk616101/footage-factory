
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const AdminSales = () => {
  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Today's Sales</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$1,429.00</div>
            <p className="text-xs text-muted-foreground mt-1">+22.5% from yesterday</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Monthly Sales</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$42,567.89</div>
            <p className="text-xs text-muted-foreground mt-1">+8.2% from last month</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Annual Sales</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$365,789.12</div>
            <p className="text-xs text-muted-foreground mt-1">+32.1% from last year</p>
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Sales Trends</CardTitle>
          <CardDescription>
            Monthly sales data for the past year
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-80 flex items-center justify-center border border-dashed border-gray-300 rounded-lg">
            <p className="text-gray-500">Sales trend chart will be displayed here</p>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Top Sellers</CardTitle>
          <CardDescription>
            Best performing content by revenue
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Item</TableHead>
                <TableHead>Creator</TableHead>
                <TableHead>Sales</TableHead>
                <TableHead>Revenue</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Aerial City View</TableCell>
                <TableCell>Jane Smith</TableCell>
                <TableCell>243</TableCell>
                <TableCell>$9,712.57</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Business Meeting</TableCell>
                <TableCell>Alex Johnson</TableCell>
                <TableCell>198</TableCell>
                <TableCell>$8,910.00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Nature Collection</TableCell>
                <TableCell>Mark Davis</TableCell>
                <TableCell>152</TableCell>
                <TableCell>$7,648.00</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminSales;
