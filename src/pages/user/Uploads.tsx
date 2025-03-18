
import React from 'react';
import UserLayout from '@/layouts/UserLayout';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Eye, Edit, Trash2, Plus, MoreHorizontal, Share, Download } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

// Mock data with thumbnail URLs added
const uploads = [
  { 
    id: '1', 
    title: 'Beach Sunset', 
    type: 'photo', 
    date: '2023-05-15', 
    downloads: 12, 
    earnings: 24.99,
    thumbnail: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
  },
  { 
    id: '2', 
    title: 'City Traffic', 
    type: 'video', 
    date: '2023-06-02', 
    downloads: 35, 
    earnings: 87.50,
    thumbnail: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
  },
  { 
    id: '3', 
    title: 'Mountain View', 
    type: 'photo', 
    date: '2023-06-12', 
    downloads: 8, 
    earnings: 16.00,
    thumbnail: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
  },
  { 
    id: '4', 
    title: 'Office Meeting', 
    type: 'video', 
    date: '2023-07-01', 
    downloads: 20, 
    earnings: 50.00,
    thumbnail: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
  },
];

const Uploads = () => {
  const navigate = useNavigate();

  const handleRowClick = (id: string) => {
    navigate(`/detail/${id}`);
  };

  const handleUploadNew = () => {
    navigate('/user-dashboard/uploads/new');
  };

  return (
    <UserLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">My Uploads</h1>
            <p className="text-gray-500 mt-1">Manage your content uploads</p>
          </div>
          
          <Button className="flex items-center gap-2" onClick={handleUploadNew}>
            <Plus size={18} />
            Upload New Content
          </Button>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Preview</TableHead>
                  <TableHead>Title</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Upload Date</TableHead>
                  <TableHead>Downloads</TableHead>
                  <TableHead>Earnings</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {uploads.map((item) => (
                  <TableRow 
                    key={item.id} 
                    onClick={() => handleRowClick(item.id)}
                    className="cursor-pointer hover:bg-gray-50"
                  >
                    <TableCell onClick={(e) => e.stopPropagation()}>
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
                    <TableCell>{item.downloads}</TableCell>
                    <TableCell>${item.earnings.toFixed(2)}</TableCell>
                    <TableCell className="text-right" onClick={(e) => e.stopPropagation()}>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-4 w-4" />
                            <span className="sr-only">Open menu</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-[160px]">
                          <DropdownMenuItem 
                            className="cursor-pointer"
                            onClick={() => navigate(`/detail/${item.id}`)}
                          >
                            <Eye className="mr-2 h-4 w-4" />
                            <span>View Details</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem className="cursor-pointer">
                            <Edit className="mr-2 h-4 w-4" />
                            <span>Edit</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem className="cursor-pointer">
                            <Share className="mr-2 h-4 w-4" />
                            <span>Share</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem className="cursor-pointer">
                            <Download className="mr-2 h-4 w-4" />
                            <span>Stats</span>
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="cursor-pointer text-red-600">
                            <Trash2 className="mr-2 h-4 w-4" />
                            <span>Delete</span>
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

export default Uploads;
