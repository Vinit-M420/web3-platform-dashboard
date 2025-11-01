'use client';
import { ArrowLeft, Moon, Sun, Bell, Globe, Lock, Shield, User } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function SettingsPage() {
    const { theme, setTheme } = useTheme();
    const router = useRouter();
    const [notifications, setNotifications] = useState(true);
    const [language, setLanguage] = useState('en');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
    setMounted(true);
    }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black p-4 md:p-8">
      {/* Back Button */}
      <button
        onClick={() => router.back()}
        className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 mb-6"
      >
        <ArrowLeft className="w-5 h-5" />
        <span>Back</span>
      </button>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Settings</h1>

        <div className="space-y-6">
          {/* Theme */}
          <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                 <Moon className="w-5 h-5 hidden dark:block" /> 
                 <Sun className="w-5 h-5 dark:hidden block" /> 
                <div>
                  <p className="font-medium">Theme</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Dark mode</p>
                </div>
              </div>
              <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200 dark:bg-gray-700 transition-colors"
              >
                {!mounted ? (
                    <span className="inline-block h-4 w-4 rounded-full bg-white translate-x-1" />
                    ) : (
                    <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform 
                        ${theme === 'dark' ? 'translate-x-6' : 'translate-x-1'}`}
                    />
                )}
              </button>
            </div>
          </div>

          {/* Notifications */}
          <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Bell className="w-5 h-5" />
                <div>
                  <p className="font-medium">Notifications</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Push alerts</p>
                </div>
              </div>
              <button
                onClick={() => setNotifications(!notifications)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  notifications ? 'bg-blue-600' : 'bg-gray-200 dark:bg-gray-700'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    notifications ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Language */}
          <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <Globe className="w-5 h-5" />
              <p className="font-medium">Language</p>
            </div>
            <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="w-full px-4 py-2 pr-10 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
                    backgroundPosition: 'right 0.75rem center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '1.5em 1.5em',
                }}
                >
                <option value="en">English</option>
                <option value="es">Español</option>
                <option value="fr">Français</option>
                </select>
          </div>

          {/* Security Section */}
          <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm space-y-4">
            <h2 className="font-semibold flex items-center gap-2">
              <Shield className="w-5 h-5" />
              Security
            </h2>
            <button className="w-full text-left p-3 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800 flex items-center justify-between">
              <span>Change Password</span>
              <Lock className="w-4 h-4 text-gray-500" />
            </button>
            <button className="w-full text-left p-3 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800 flex items-center justify-between">
              <span>Two-Factor Authentication</span>
              <Lock className="w-4 h-4 text-gray-500" />
            </button>
          </div>

          {/* Account */}
          <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm space-y-4">
            <h2 className="font-semibold flex items-center gap-2">
              <User className="w-5 h-5" />
              Account
            </h2>
            <button className="w-full text-left p-3 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800">
              Edit Profile
            </button>
            <button className="w-full text-left p-3 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800 text-red-600">
              Delete Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}