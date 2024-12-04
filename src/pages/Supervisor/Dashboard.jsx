import React from 'react';
import { BarChart, Users, ClipboardList } from 'lucide-react';

function Dashboard() {
  const stats = [
    {
      title: 'Total Service Providers',
      value: '24',
      icon: <Users className="h-6 w-6" />,
      change: '+12%',
    },
    {
      title: 'Active Services',
      value: '156',
      icon: <ClipboardList className="h-6 w-6" />,
      change: '+8%',
    },
    {
      title: 'Monthly Revenue',
      value: '$45,231',
      icon: <BarChart className="h-6 w-6" />,
      change: '+23%',
    },
  ];

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6">Supervisor Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {stats.map((stat) => (
          <div
            key={stat.title}
            className="bg-white rounded-lg shadow p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-blue-50 rounded-lg">
                {stat.icon}
              </div>
              <span className="text-sm text-green-600">{stat.change}</span>
            </div>
            <h3 className="text-gray-600 text-sm">{stat.title}</h3>
            <p className="text-2xl font-semibold mt-2">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Recent Activities</h2>
          {/* Activity list would go here */}
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Performance Overview</h2>
          {/* Performance metrics would go here */}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;