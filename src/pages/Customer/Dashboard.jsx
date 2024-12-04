import React from 'react';
import { Clock, CheckCircle, AlertCircle } from 'lucide-react';

function Dashboard() {
  const services = [
    {
      id: 1,
      name: 'Home Cleaning',
      status: 'scheduled',
      date: '2024-03-15',
      time: '14:00',
      provider: 'Clean Pro Services',
    },
    {
      id: 2,
      name: 'Plumbing Repair',
      status: 'completed',
      date: '2024-03-10',
      time: '10:30',
      provider: 'Quick Fix Plumbing',
    },
    {
      id: 3,
      name: 'Electrical Work',
      status: 'pending',
      date: '2024-03-20',
      time: '09:00',
      provider: 'PowerTech Solutions',
    },
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case 'scheduled':
        return <Clock className="h-5 w-5 text-blue-500" />;
      case 'completed':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'pending':
        return <AlertCircle className="h-5 w-5 text-yellow-500" />;
      default:
        return null;
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6">My Dashboard</h1>

      <div className="grid grid-cols-1 gap-6">
        <div className="bg-white rounded-lg shadow">
          <div className="px-6 py-4 border-b">
            <h2 className="text-lg font-semibold">Recent Services</h2>
          </div>
          <div className="divide-y">
            {services.map((service) => (
              <div
                key={service.id}
                className="px-6 py-4 flex items-center justify-between"
              >
                <div className="flex items-center space-x-4">
                  {getStatusIcon(service.status)}
                  <div>
                    <h3 className="font-medium">{service.name}</h3>
                    <p className="text-sm text-gray-500">
                      {service.provider} • {service.date} at {service.time}
                    </p>
                  </div>
                </div>
                <span
                  className={`px-2 py-1 text-xs font-semibold rounded-full ${
                    {
                      scheduled: 'bg-blue-100 text-blue-800',
                      completed: 'bg-green-100 text-green-800',
                      pending: 'bg-yellow-100 text-yellow-800',
                    }[service.status]
                  }`}
                >
                  {service.status.charAt(0).toUpperCase() + service.status.slice(1)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;