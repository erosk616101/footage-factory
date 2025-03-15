
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';

const AdminUsers = () => {
  // Mock data for users
  const users = [
    { id: '101', name: 'Sarah Miller', email: 'sarah@example.com', role: 'buyer', joined: '2023-05-10', status: 'active' },
    { id: '102', name: 'John Doe', email: 'john@example.com', role: 'creator', joined: '2023-04-15', status: 'active' },
    { id: '103', name: 'Lisa Wong', email: 'lisa@example.com', role: 'buyer', joined: '2023-06-01', status: 'active' },
    { id: '104', name: 'Robert Chen', email: 'robert@example.com', role: 'creator', joined: '2023-03-22', status: 'inactive' },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>User Management</CardTitle>
        <CardDescription>
          View and manage user accounts
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Joined</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell className="font-medium">{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell className="capitalize">{user.role}</TableCell>
                <TableCell>{user.joined}</TableCell>
                <TableCell>
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    user.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {user.status}
                  </span>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Button size="sm" variant="outline" className="h-8">
                      Edit
                    </Button>
                    <Button size="sm" variant="ghost" className="h-8 text-red-500 hover:text-red-700">
                      Suspend
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default AdminUsers;
