import React from 'react';
import { User, Mail, Phone, MapPin, CreditCard } from 'lucide-react';
import Button from '../../components/ui/Button';

function Profile() {
  const profile = {
    name: 'Alex Johnson',
    email: 'alex.johnson@example.com',
    phone: '+1 (555) 987-6543',
    address: '123 Main St, New York, NY 10001',
    memberSince: 'January 2024',
    paymentMethods: [
      {
        id: 1,
        type: 'Visa',
        last4: '4242',
        expiry: '12/25',
      },
    ],
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-semibold mb-6">My Profile</h1>

      <div className="bg-white rounded-lg shadow">
        <div className="p-6 border-b">
          <div className="flex items-center space-x-4">
            <div className="h-20 w-20 rounded-full bg-gray-200 flex items-center justify-center">
              <User className="h-10 w-10 text-gray-500" />
            </div>
            <div>
              <h2 className="text-xl font-semibold">{profile.name}</h2>
              <p className="text-gray-500">Member since {profile.memberSince}</p>
            </div>
          </div>
        </div>

        <div className="p-6 space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-4">Contact Information</h3>
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
                <span>{profile.address}</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Payment Methods</h3>
            {profile.paymentMethods.map((method) => (
              <div
                key={method.id}
                className="flex items-center justify-between p-4 border rounded-lg"
              >
                <div className="flex items-center space-x-3">
                  <CreditCard className="h-6 w-6 text-gray-400" />
                  <div>
                    <p className="font-medium">
                      {method.type} ending in {method.last4}
                    </p>
                    <p className="text-sm text-gray-500">
                      Expires {method.expiry}
                    </p>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  Edit
                </Button>
              </div>
            ))}
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