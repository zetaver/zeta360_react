import React from 'react';
import { Search, Filter, MoreVertical } from 'lucide-react';
import Button from '../../components/ui/Button';

function ManageProviders() {
  const providers = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      services: 12,
      rating: 4.8,
      status: 'active',
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@example.com',
      services: 8,
      rating: 4.5,
      status: 'active',
    },
    // Add more mock data as needed
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Manage Service Providers</h1>
        <Button variant="primary">Add New Provider</Button>
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="p-4 border-b flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Search className="text-gray-400" />
            <input
              type="text"
              placeholder="Search providers..."
              className="border-none focus:ring-0"
            />
          </div>
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Services
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Rating
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {providers.map((provider) => (
                <tr key={provider.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {provider.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {provider.email}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {provider.services}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {provider.rating}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      {provider.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button className="text-gray-400 hover:text-gray-500">
                      <MoreVertical className="h-5 w-5" />
                    </button>
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

export default ManageProviders;