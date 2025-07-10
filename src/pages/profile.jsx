// @ts-ignore;
import React from 'react';
// @ts-ignore;
import { Button } from '@/components/ui';
// @ts-ignore;
import { ChevronRight, LogOut } from 'lucide-react';

export default function Profile(props) {
  const {
    $w
  } = props;
  const user = $w.auth.currentUser;
  const handleLogout = () => {
    // TODO: Implement logout logic
    console.log('Logout clicked');
  };
  const handleSettings = () => {
    $w.utils.navigateTo({
      pageId: 'settings',
      params: {}
    });
  };
  return <div className="min-h-screen bg-gray-50 p-6">
          <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-8">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <img className="h-16 w-16 rounded-full" src={user.avatarUrl || 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'} alt="User avatar" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900">{user.nickName || user.name}</h1>
                  <p className="text-gray-500">{user.name}</p>
                </div>
              </div>
              <div className="mt-6 space-y-4">
                <Button variant="ghost" className="w-full justify-between" onClick={handleSettings}>
                  <span>Settings</span>
                  <ChevronRight className="h-5 w-5 text-gray-500" />
                </Button>
                <Button variant="ghost" className="w-full justify-between">
                  <span>Help & Support</span>
                  <ChevronRight className="h-5 w-5 text-gray-500" />
                </Button>
                <Button variant="destructive" className="w-full justify-between" onClick={handleLogout}>
                  <span>Logout</span>
                  <LogOut className="h-5 w-5 text-red-500" />
                </Button>
              </div>
            </div>
          </div>
        </div>;
}