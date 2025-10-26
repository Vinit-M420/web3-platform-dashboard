'use client';
import { Shrink, Expand, Search, FileSearch   } from 'lucide-react';
import { Logout01Icon, GridViewIcon, Note01Icon, SecurityCheckIcon,Money01Icon, Store01Icon, Analytics01Icon } from 'hugeicons-react';
import { useState } from 'react';

interface SidebarItem {
    icon: React.ComponentType<any>;
    label: string;
    // href: string;
}

const sidebarItems = [
    { icon: GridViewIcon, label: 'Dashboard'},
    { icon: Note01Icon, label: 'Transactions',},
    { icon: SecurityCheckIcon, label: 'Securitization & Transfer',},
    { icon: Money01Icon, label: 'Tokenization Hub', },
    { icon: Store01Icon, label: 'Marketplace', },
    // { icon: <LogoutIcon className='w-5 h-5' />, label: 'Liquid Pools', },
    { icon: FileSearch, label: 'Risk & Compliance', },
    { icon: Analytics01Icon, label: 'Reports & Analytics', },
]


export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(true);
    const [sidebarOptionActive, setSideOption] = useState(0);
    const [showLabels, setShowLabels] = useState(true);
    
    const toggleSidebar = () => {
        if (isOpen) {
            // When closing, hide labels immediately
            setShowLabels(false);
            setTimeout(() => setIsOpen(false), 100);
        } else {
            // When opening, show sidebar first, then labels after delay
            setIsOpen(true);
            setTimeout(() => setShowLabels(true), 200);
        }
    }

    if (!isOpen){
    return (
        <div className="fixed top-0 left-0 min-h-screen w-[80px] bg-zinc-50 font-sans dark:bg-black border-r border-gray-700
            transition-all duration-200">
            <div className='flex flex-col gap-4'>
            <div className='border-b border-gray-700 top-0 flex items-center justify-center p-4 text-gray-400 cursor-pointer'>      
                <Expand className='w-5 h-5' onClick={toggleSidebar} />
            </div>

            <div className='mx-5 flex gap-2 items-center justify-center p-2 border border-gray-700 rounded-md'>      
                <Search className='w-5 h-5' />
            </div>

            {sidebarItems.map((item, index) => {
                const IconComponent = item.icon;
                const isActive = sidebarOptionActive === index;
                return (
                    <div key={index} className={`mx-5 flex gap-2 items-center justify-center p-2 rounded-md cursor-pointer
                        hover:bg-gray-800 
                        ${isActive ? 'bg-gray-800  text-blue-600 ' : 'text-gray-300'}`}
                        onClick={() => setSideOption(index)}>
                        <IconComponent className={`w-5 h-5 
                            `} />
                    </div>
                );
            })}
            </div>

            <div className='absolute border-t border-gray-700 bottom-0 left-0 right-0 flex items-center justify-center gap-4 p-4
            text-gray-400 hover:text-white transition-colors cursor-pointer'>      
                <Logout01Icon className='w-5 h-5' />
            </div>
        </div>
    )}

    return (
      <div className="fixed top-0 left-0 min-h-screen w-xs bg-zinc-50 font-sans dark:bg-black border-r border-gray-700
                    transition-all duration-200">
        <div className='flex flex-col gap-4'>
            <div className='border-b border-gray-700 top-0 flex items-center justify-center p-4 text-gray-400 cursor-pointer'>      
                {isOpen ? <Shrink className='w-5 h-5' onClick={toggleSidebar} /> 
                        : <Expand className='w-5 h-5' onClick={toggleSidebar} />}
            </div>

            <div className='mx-5 flex gap-2 items-center justify-start border border-gray-700 p-2 rounded-md'>      
                <Search className='w-5 h-5' />
                <input type="text" placeholder='Search' className='bg-transparent outline-none text-sm text-gray-200' />
            </div>


            
            {sidebarItems.map((item, index) => {
                const IconComponent = item.icon;
                const isActive = sidebarOptionActive === index;
                return (
                    <div key={index} className={`mx-5 flex gap-2 items-center justify-start p-2 rounded-md cursor-pointer
                        ${isActive ? 'bg-gray-800  text-blue-600 ' : 'text-gray-300'}`}
                        onClick={() => setSideOption(index)}>
                        <IconComponent className={`w-5 h-5`} />
                        {/* ${isActive ? 'fill-blue-600' : ''}` */}
                        <p className={`transition-all duration-300 ease-in-out ${
                            showLabels 
                                ? 'opacity-100 translate-x-0' 
                                : 'opacity-0 -translate-x-2'
                        }`}>{item.label}</p>
                    </div>
                );
            })}

            <div className='absolute border-t border-gray-700 bottom-0 left-0 right-0 flex items-center justify-left gap-4 p-4 ml-2
            text-gray-400 hover:text-white transition-colors cursor-pointer'>      
                <Logout01Icon className='w-5 h-5' />
                <p className={`transition-all duration-300 ease-in-out ${
                    showLabels 
                        ? 'opacity-100 translate-x-0' 
                        : 'opacity-0 -translate-x-2'
                }`}>Logout</p>
            </div>
        </div>
      </div>
    );
  }