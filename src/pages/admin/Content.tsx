
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { CheckCircle, XCircle } from 'lucide-react';

const AdminContent = () => {
  // Mock data for pending content
  const pendingContent = [
    { id: '1', title: 'Mountain Landscape', author: 'Jane Smith', type: 'photo', submitDate: '2023-06-15' },
    { id: '2', title: 'Urban Life Documentary', author: 'Alex Johnson', type: 'video', submitDate: '2023-06-18' },
    { id: '3', title: 'Wildlife Collection', author: 'Mark Davis', type: 'photo', submitDate: '2023-06-20' },
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Content Approval</CardTitle>
          <CardDescription>
            Review and approve new content submissions
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Author</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Submit Date</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {pendingContent.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="font-medium">{item.title}</TableCell>
                  <TableCell>{item.author}</TableCell>
                  <TableCell className="capitalize">{item.type}</TableCell>
                  <TableCell>{item.submitDate}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Button size="sm" variant="outline" className="h-8">
                        Preview
                      </Button>
                      <Button size="sm" variant="success" className="h-8">
                        <CheckCircle className="mr-1 h-4 w-4" />
                        Approve
                      </Button>
                      <Button size="sm" variant="destructive" className="h-8">
                        <XCircle className="mr-1 h-4 w-4" />
                        Reject
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Content Analytics</CardTitle>
          <CardDescription>
            Track performance of content across the platform
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-80 flex items-center justify-center border border-dashed border-gray-300 rounded-lg">
            <p className="text-gray-500">Content analytics chart will be displayed here</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminContent;
