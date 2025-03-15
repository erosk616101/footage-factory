
import React from 'react';
import UserLayout from '@/layouts/UserLayout';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Download } from 'lucide-react';

// Mock data
const purchases = [
  { id: '1', title: 'Aerial City View', type: 'video', date: '2023-05-20', price: 39.99 },
  { id: '2', title: 'Abstract Background', type: 'photo', date: '2023-06-15', price: 15.00 },
  { id: '3', title: 'Nature Landscape', type: 'photo', date: '2023-07-10', price: 12.50 },
  { id: '4', title: 'Business Meeting', type: 'video', date: '2023-08-05', price: 45.00 },
];

const Downloads = () => {
  return (
    <UserLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold">My Downloads</h1>
          <p className="text-gray-500 mt-1">View and download your purchased content</p>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Title</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Purchase Date</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {purchases.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell className="font-medium">{item.title}</TableCell>
                    <TableCell className="capitalize">{item.type}</TableCell>
                    <TableCell>{item.date}</TableCell>
                    <TableCell>${item.price.toFixed(2)}</TableCell>
                    <TableCell>
                      <Button variant="outline" size="sm" className="flex items-center gap-1">
                        <Download size={14} />
                        Download
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </UserLayout>
  );
};

export default Downloads;
