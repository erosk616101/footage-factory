
import React from 'react';
import UserLayout from '@/layouts/UserLayout';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Eye, Edit, Trash2, Upload } from 'lucide-react';

// Mock data
const uploads = [
  { id: '1', title: 'Beach Sunset', type: 'photo', date: '2023-05-15', downloads: 12, earnings: 24.99 },
  { id: '2', title: 'City Traffic', type: 'video', date: '2023-06-02', downloads: 35, earnings: 87.50 },
  { id: '3', title: 'Mountain View', type: 'photo', date: '2023-06-12', downloads: 8, earnings: 16.00 },
  { id: '4', title: 'Office Meeting', type: 'video', date: '2023-07-01', downloads: 20, earnings: 50.00 },
];

const Uploads = () => {
  return (
    <UserLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">My Uploads</h1>
            <p className="text-gray-500 mt-1">Manage your content uploads</p>
          </div>
          
          <Button className="flex items-center gap-2">
            <Upload size={18} />
            Upload New Content
          </Button>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Title</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Upload Date</TableHead>
                  <TableHead>Downloads</TableHead>
                  <TableHead>Earnings</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {uploads.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell className="font-medium">{item.title}</TableCell>
                    <TableCell className="capitalize">{item.type}</TableCell>
                    <TableCell>{item.date}</TableCell>
                    <TableCell>{item.downloads}</TableCell>
                    <TableCell>${item.earnings.toFixed(2)}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="icon-sm">
                          <Eye size={16} />
                        </Button>
                        <Button variant="ghost" size="icon-sm">
                          <Edit size={16} />
                        </Button>
                        <Button variant="ghost" size="icon-sm">
                          <Trash2 size={16} />
                        </Button>
                      </div>
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

export default Uploads;
