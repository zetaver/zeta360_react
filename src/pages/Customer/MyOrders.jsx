import React from 'react';
import { CheckCircle, XCircle, Clock } from 'lucide-react';

function MyOrders() {
  const orders = [
    {
      id: 1,
      service: 'Home Cleaning',
      date: '2024-03-15',
      time: '14:00',
      provider: 'Clean Pro Services',
      status: 'completed',
      amount: '$160',
    },
    {
      id: 2,
      service: 'Plumbing Repair',
      date: '2024-03-20',
      time: '10:30',
      provider: 'Quick Fix Plumbing',
      status: 'pending',
      amount: '$200',
    },
    {
      id: 3,
      service: 'Electrical Work',
      date: '2024-03-25',
      time: '09:00',
      provider: 'PowerTech Solutions',
      status: 'cancelled',
      amount: '$180',
    },
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'cancelled':
        return <XCircle className="h-5 w-5 text-red-500" />;
      case 'pending':
        return <Clock className="h-5 w-5 text-yellow-500" />;
      default:
        return null;
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6">My Orders</h1>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Service
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date & Time
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Provider
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {orders.map((order) => (
                <tr key={order.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="font-medium text-gray-900">
                      {order.service}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {order.date}
                    </div>
                    <div className="text-sm text-gray-500">
                      {order.time}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {order.provider}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {order.amount}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      {getStatusIcon(order.status)}
                      <span
                        className={`ml-2 ${
                          {
                            completed: 'text-green-800',
                            cancelled: 'text-red-800',
                            pending: 'text-yellow-800',
                          }[order.status]
                        }`}
                      >
                        {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default MyOrders;