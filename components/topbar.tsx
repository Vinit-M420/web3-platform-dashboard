'use client';
import { Menu, X, Search, FileSearch } from 'lucide-react';
import { Logout01Icon, GridViewIcon, Note01Icon, SecurityCheckIcon, Money01Icon, Store01Icon, Analytics01Icon } from 'hugeicons-react';
import { useState, useRef } from 'react';

interface TopbarProps {
  onToggle?: (isOpen: boolean) => void;
}

const sidebarItems = [
  { icon: GridViewIcon, label: 'Dashboard' },
  { icon: Note01Icon, label: 'Transactions' },
  { icon: SecurityCheckIcon, label: 'Securitization & Transfer' },
  { icon: Money01Icon, label: 'Tokenization Hub' },
  { icon: Store01Icon, label: 'Marketplace' },
  { icon: FileSearch, label: 'Risk & Compliance' },
  { icon: Analytics01Icon, label: 'Reports & Analytics' },
];

export default function MobileTopbar({ onToggle }: TopbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
//   And the search input ref
  const searchRef = useRef<HTMLInputElement>(null);

  const toggle = () => {
    setIsOpen(!isOpen);
    onToggle?.(!isOpen);
  };

  return (
    <>
      {/* Mobile Topbar - Always visible */}
      <div className="md:hidden fixed top-0 left-0 right-0 h-16 bg-gray-50 dark:bg-black border-b border-gray-200 dark:border-gray-700 z-50 flex items-center justify-between px-4">
        <button onClick={toggle} className="p-2">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
        <div className="flex-1 mx-4">
          <div className="flex items-center gap-2 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 rounded-md p-2">
            <Search className="w-5 h-5 text-gray-500" />
            <input
              ref={searchRef}
              type="text"
              placeholder="Search"
              className="bg-transparent outline-none text-sm flex-1"
              onFocus={() => setIsOpen(false)}
            />
          </div>
        </div>
      </div>

      {/* Dropdown Menu - Slides from top */}
      <div className={`md:hidden fixed top-16 left-0 right-0 bg-gray-50 dark:bg-black border-b border-gray-200 dark:border-gray-700 z-40 transition-transform duration-300 ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="py-2">
          {sidebarItems.map((item, i) => {
            const Icon = item.icon;
            const isActive = activeIndex === i;
            return (
              <button
                key={i}
                onClick={() => {
                  setActiveIndex(i);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-colors ${
                  isActive
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </button>
            );
          })}
          <div className="border-t border-gray-200 dark:border-gray-700 mt-2 pt-2">
            <button className="w-full flex items-center gap-3 px-4 py-3 text-left text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20">
              <Logout01Icon className="w-5 h-5" />
              <span className="font-medium">Logout</span>
            </button>
          </div>
        </div>
      </div>

      {/* Push content down */}
      <div className="md:hidden h-16" />
    </>
  );
}