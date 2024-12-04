import React from 'react';
import { Download } from 'lucide-react';
import Button from '../../components/ui/Button';

function Reports() {
  const reports = [
    {
      id: 1,
      name: 'Monthly Performance Report',
      date: '2024-03-01',
      type: 'Performance',
      size: '2.4 MB',
    },
    {
      id: 2,
      name: 'Service Provider Analytics',
      date: '2024-03-01',
      type: 'Analytics',
      size: '1.8 MB',
    },
    {
      id: 3,
      name: 'Customer Satisfaction Survey',
      date: '2024-03-01',
      type: 'Survey',
      size: '3.2 MB',
    },
  ];

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6">Reports</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="font-semibold mb-2">Generate New Report</h3>
          <div className="space-y-4">
            <select className="w-full rounded-md border-gray-300">
              <option>Select Report Type</option>
              <option>Performance Report</option>
              <option>Analytics Report</option>
              <option>Survey Report</option>
            </select>
            <Button className="w-full">Generate Report</Button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="px-6 py-4 border-b">
          <h2 className="text-lg font-semibold">Recent Reports</h2>
        </div>
        <div className="divide-y">
          {reports.map((report) => (
            <div
              key={report.id}
              className="px-6 py-4 flex items-center justify-between"
            >
              <div>
                <h3 className="font-medium">{report.name}</h3>
                <p className="text-sm text-gray-500">
                  Generated on {report.date} • {report.type} • {report.size}
                </p>
              </div>
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Download
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Reports;