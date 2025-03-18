
import React from 'react';
import UserLayout from '@/layouts/UserLayout';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Download, MoreHorizontal, Share, Eye, Info } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

// Mock data with image URLs added
const purchases = [
  { 
    id: '1', 
    title: 'Aerial City View', 
    type: 'video', 
    date: '2023-05-20', 
    price: 39.99,
    thumbnail: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
  },
  { 
    id: '2', 
    title: 'Abstract Background', 
    type: 'photo', 
    date: '2023-06-15', 
    price: 15.00,
    thumbnail: 'https://images.unsplash.com/photo-1557682250-33bd709cbe85?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
  },
  { 
    id: '3', 
    title: 'Nature Landscape', 
    type: 'photo', 
    date: '2023-07-10', 
    price: 12.50,
    thumbnail: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
  },
  { 
    id: '4', 
    title: 'Business Meeting', 
    type: 'video', 
    date: '2023-08-05', 
    price: 45.00,
    thumbnail: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
  },
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
                  <TableHead>Preview</TableHead>
                  <TableHead>Title</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Purchase Date</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {purchases.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>
                      <div className="h-14 w-20 rounded-md overflow-hidden">
                        <img 
                          src={item.thumbnail} 
                          alt={item.title} 
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </TableCell>
                    <TableCell className="font-medium">{item.title}</TableCell>
                    <TableCell className="capitalize">{item.type}</TableCell>
                    <TableCell>{item.date}</TableCell>
                    <TableCell>${item.price.toFixed(2)}</TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-4 w-4" />
                            <span className="sr-only">Open menu</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-[160px]">
                          <DropdownMenuItem className="cursor-pointer">
                            <Download className="mr-2 h-4 w-4" />
                            <span>Download</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem className="cursor-pointer">
                            <Eye className="mr-2 h-4 w-4" />
                            <span>Preview</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem className="cursor-pointer">
                            <Share className="mr-2 h-4 w-4" />
                            <span>Share</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem className="cursor-pointer">
                            <Info className="mr-2 h-4 w-4" />
                            <span>Details</span>
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
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
