
import React from 'react';
import UserLayout from '@/layouts/UserLayout';
import { Button } from '@/components/ui/button';
import { AlertCircle, ArrowDownCircle, Calendar, Download, FileText } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const Payouts = () => {
  // Mock payout data
  const payoutStats = {
    availableBalance: 125.99,
    pendingEarnings: 52.50,
    totalPaidOut: 450.75
  };
  
  // Mock payout history
  const payoutHistory = [
    { id: 1, date: '2023-07-15', amount: 120.50, method: 'PayPal', status: 'completed', reference: 'PAY-123456' },
    { id: 2, date: '2023-06-15', amount: 85.25, method: 'PayPal', status: 'completed', reference: 'PAY-789012' },
    { id: 3, date: '2023-05-15', amount: 145.00, method: 'Bank Transfer', status: 'completed', reference: 'PAY-345678' },
    { id: 4, date: '2023-04-15', amount: 100.00, method: 'PayPal', status: 'completed', reference: 'PAY-901234' },
  ];
  
  return (
    <UserLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-2xl font-bold">Payout History</h1>
          <p className="text-gray-500 mt-1">Manage your earnings and payouts</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-gray-500 text-sm">Available Balance</p>
                <h3 className="text-3xl font-bold mt-1">${payoutStats.availableBalance.toFixed(2)}</h3>
              </div>
              <Button size="sm">Request Payout</Button>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
            <p className="text-gray-500 text-sm">Pending Earnings</p>
            <h3 className="text-3xl font-bold mt-1">${payoutStats.pendingEarnings.toFixed(2)}</h3>
            <p className="text-xs text-gray-500 mt-2">Will be available in 7 days</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
            <p className="text-gray-500 text-sm">Total Paid Out</p>
            <h3 className="text-3xl font-bold mt-1">${payoutStats.totalPaidOut.toFixed(2)}</h3>
            <p className="text-xs text-gray-500 mt-2">Lifetime earnings</p>
          </div>
        </div>
        
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="px-6 py-4 flex items-center justify-between border-b">
            <h2 className="font-medium">Payout History</h2>
            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm" className="flex items-center gap-1">
                <Calendar size={14} />
                Filter
              </Button>
              <Button variant="outline" size="sm" className="flex items-center gap-1">
                <Download size={14} />
                Export
              </Button>
            </div>
          </div>
          
          {payoutHistory.length > 0 ? (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Method</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Reference</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {payoutHistory.map((payout) => (
                  <TableRow key={payout.id}>
                    <TableCell>{payout.date}</TableCell>
                    <TableCell className="font-medium">${payout.amount.toFixed(2)}</TableCell>
                    <TableCell>{payout.method}</TableCell>
                    <TableCell>
                      <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                        {payout.status}
                      </span>
                    </TableCell>
                    <TableCell className="text-gray-500">{payout.reference}</TableCell>
                    <TableCell>
                      <Button variant="ghost" size="icon-sm">
                        <FileText size={16} />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ) : (
            <div className="p-8 text-center">
              <div className="mx-auto w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-3">
                <AlertCircle className="h-6 w-6 text-gray-400" />
              </div>
              <h3 className="text-lg font-medium">No payout history</h3>
              <p className="text-gray-500 mt-1">Once you receive payouts, they will appear here</p>
            </div>
          )}
        </div>
        
        <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
          <h2 className="text-lg font-medium mb-4">Payout Schedule</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <input 
                type="radio" 
                id="schedule-monthly" 
                name="schedule"
                className="h-4 w-4 rounded border-gray-300"
                defaultChecked
              />
              <label htmlFor="schedule-monthly" className="text-gray-700">
                Monthly (Automatic payout on the 15th)
              </label>
            </div>
            
            <div className="flex items-center gap-2">
              <input 
                type="radio" 
                id="schedule-threshold" 
                name="schedule"
                className="h-4 w-4 rounded border-gray-300"
              />
              <label htmlFor="schedule-threshold" className="text-gray-700">
                When balance reaches $100
              </label>
            </div>
            
            <div className="flex items-center gap-2">
              <input 
                type="radio" 
                id="schedule-manual" 
                name="schedule"
                className="h-4 w-4 rounded border-gray-300"
              />
              <label htmlFor="schedule-manual" className="text-gray-700">
                Manual payouts only
              </label>
            </div>
            
            <div className="pt-2">
              <Button>Save Preferences</Button>
            </div>
          </div>
        </div>
      </div>
    </UserLayout>
  );
};

export default Payouts;
