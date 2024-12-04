import React from 'react';
import { User, Mail, Phone, MapPin } from 'lucide-react';
import Button from '../../components/ui/Button';

function Profile() {
  const profile = {
    name: 'Sarah Wilson',
    email: 'sarah.wilson@example.com',
    phone: '+1 (555) 123-4567',
    location: 'New York, NY',
    role: 'Regional Supervisor',
    department: 'Operations',
    joinDate: 'March 2023',
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-semibold mb-6">Profile</h1>

      <div className="bg-white rounded-lg shadow">
        <div className="p-6 border-b">
          <div className="flex items-center space-x-4">
            <div className="h-20 w-20 rounded-full bg-gray-200 flex items-center justify-center">
              <User className="h-10 w-10 text-gray-500" />
            </div>
            <div>
              <h2 className="text-xl font-semibold">{profile.name}</h2>
              <p className="text-gray-500">{profile.role}</p>
            </div>
          </div>
        </div>

        <div className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-2">
                Contact Information
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Mail className="h-5 w-5 text-gray-400" />
                  <span>{profile.email}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-5 w-5 text-gray-400" />
                  <span>{profile.phone}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-gray-400" />
                  <span>{profile.location}</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-2">
                Work Information
              </h3>
              <div className="space-y-2">
                <div>
                  <span className="text-gray-500">Department:</span>
                  <span className="ml-2">{profile.department}</span>
                </div>
                <div>
                  <span className="text-gray-500">Join Date:</span>
                  <span className="ml-2">{profile.joinDate}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t">
            <Button>Edit Profile</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;