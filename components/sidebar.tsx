'use client';
import { Shrink, Expand, Search, FileSearch   } from 'lucide-react';
import { Logout01Icon, GridViewIcon, Note01Icon, SecurityCheckIcon,Money01Icon, Store01Icon, Analytics01Icon } from 'hugeicons-react';
import { useState, useEffect, useRef } from 'react';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"

interface SidebarItem {
    icon: React.ComponentType<any>;
    label: string;
    // href: string;
}

interface SidebarProps {
    onToggle?: (isOpen: boolean) => void;
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


export default function Sidebar({ onToggle }: SidebarProps) {
    const [isOpen, setIsOpen] = useState(false);
    // const [pendingLogout, setPendingLogout] = useState(false);
    const searchRef = useRef<HTMLInputElement>(null);
    const [sidebarOptionActive, setSideOption] = useState(0);
    const [showLabels, setShowLabels] = useState(true);
    
    // Notify parent of initial state on mount
    useEffect(() => {
        if (onToggle) {
            onToggle(isOpen);
        }
    }, []); // Empty dependency array means this runs once on mount

    // const handleLogoutClick = () => {
    //     setIsOpen(false);
    //     setPendingLogout(true);
    //   };
      
    //   // Close alert if sidebar reopens
    //   useEffect(() => {
    //     if (isOpen && pendingLogout) {
    //       setPendingLogout(false);
    //     }
    //   }, [isOpen, pendingLogout])
    
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
        // Notify parent of state change
        if (onToggle) {
            onToggle(!isOpen);
        }
    }


    if (!isOpen){
    return (
        <div className="hidden md:block fixed top-0 left-0 min-h-screen w-[80px] bg-gray-100 font-sans dark:bg-gray-950 border-r dark:border-gray-700
            border-gray-200 transition-all duration-200 shadow-md z-20">
            <div className='flex flex-col gap-4'>
            <div className='border-b dark:border-gray-700 border-gray-200 top-0 flex items-center justify-center p-4 
            dark:text-gray-300 text-gray-500 cursor-pointer group'>      
                <Expand className='w-5 h-5' onClick={toggleSidebar} />
                <div className="absolute left-full ml-2 px-2 py-1 bg-gray-800 text-white text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap 
                    z-150">
                    Expand
                </div>
            </div>

            <div className='mx-5 flex gap-2 items-center justify-center p-2 border dark:border-gray-700 border-gray-300 
                bg-white dark:bg-black rounded-md cursor-pointer'
                onClick={() => {
                    toggleSidebar();  
                    const id = requestAnimationFrame(() => {
                        searchRef.current?.focus();
                    });
                    return () => cancelAnimationFrame(id);  
                }}>      
                <Search className='w-5 h-5' />            
            </div>

            {sidebarItems.map((item, index) => {
                const IconComponent = item.icon;
                const isActive = sidebarOptionActive === index;
                return (
                    <div key={index} className="relative group">
                        <div className={`mx-5 flex gap-2 items-center justify-center p-2 rounded-md cursor-pointer 
                            dark:hover:bg-gray-800 dark:hover:border-gray-700 hover:bg-gray-200 hover:border-gray-300
                            border border-transparent 
                            ${isActive 
                                ?  'dark:bg-gray-800 bg-white dark:border-gray-700 border-black text-blue-600 shadow-xs' 
                                :  'dark:text-gray-300 text-gray-500'}`
                            }
                            onClick={() => setSideOption(index)}>
                            <IconComponent className={`w-5 h-5 `} />
                        </div>
                        {/* Tooltip */}
                        <div className="absolute left-full top-1 ml-2 px-2 py-1 dark:bg-gray-800 bg-gray-100 dark:text-white 
                        text-black text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 
                        pointer-events-none whitespace-nowrap z-150">
                            {item.label}
                        </div>
                    </div>
                );
            })}
            </div>

            <AlertDialog >
            <AlertDialogTrigger asChild>
                <div className='absolute border-t dark:border-gray-700 border-gray-200 bottom-0 left-0 right-0 flex items-center justify-center gap-4 p-4
                        dark:text-gray-300 text-gray-500 hover:text-gray-800 dark:hover:text-gray-50 transition-colors cursor-pointer group'>      
                    <Logout01Icon className='w-5 h-5' />
                    <div className="absolute left-full ml-2 px-2 py-1 bg-gray-800 text-white text-sm rounded-md opacity-0 
                            group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-150">
                        Logout
                    </div>
                </div>
            </AlertDialogTrigger>
            <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Do you want to logout?</AlertDialogTitle>
            <AlertDialogDescription>
              You will be logged out of your account.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction className='bg-red-500 text-white hover:bg-red-600'>Logout</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
            </AlertDialog>
        </div>
    )}

    return (
      <div className="hidden md:block fixed top-0 left-0 min-h-screen w-70 bg-gray-100 font-sans dark:bg-gray-950 border-r dark:border-gray-700
            border-gray-200 transition-all duration-200 text-gray-500 dark:text-gray-300 z-100"> 
        <div className='flex flex-col gap-4'>
            <div className='border-b dark:border-gray-700 border-gray-200 top-0 flex items-center justify-center p-4 cursor-pointer group'>      
                <Shrink className='w-5 h-5' onClick={toggleSidebar} />
                <div className="absolute left-full ml-2 px-2 py-1 dark:bg-gray-800 bg-gray-100 dark:text-white text-black text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-150">
                    Collapse
                </div>
            </div>

            <div className='mx-5 flex gap-2 items-center justify-start border dark:border-gray-700 border-gray-300 
            bg-white dark:bg-black p-2 rounded-md cursor-pointer'>      
                <Search className='w-5 h-5' />
                <input ref={searchRef} type="text" placeholder='Search' 
                className='bg-transparent outline-none text-sm dark:text-gray-200 text-gray-500 placeholder:text-gray-400' />
            </div>

            {sidebarItems.map((item, index) => {
                const IconComponent = item.icon;
                const isActive = sidebarOptionActive === index;
                return (
                    <div key={index} className={`mx-5 flex gap-2 items-center justify-start p-2 rounded-md cursor-pointer
                        dark:hover:bg-gray-800 hover:bg-gray-50 
                        ${isActive ? 
                            'dark:bg-gray-800 bg-white border dark:border-gray-700 border-gray-300 text-blue-600' 
                            : 'dark:text-gray-300 text-gray-500 border border-transparent'}`}
                        onClick={() => setSideOption(index)}>
                        <IconComponent className={`w-5 h-5`} />
                        <p className={`transition-all duration-300 ease-in-out font-semibold ${
                            showLabels 
                                ? 'opacity-100 translate-x-0' 
                                : 'opacity-0 -translate-x-2'
                        }`}>{item.label}</p>
                    </div>
                );
            })}

            <AlertDialog>
            <AlertDialogTrigger>
            <div className='absolute border-t dark:border-gray-700 border-gray-200 bottom-0 left-0 right-0 flex items-center    
            justify-left gap-4 p-4 ml-2 dark:text-gray-300 dark:hover:text-gray-50 transition-colors cursor-pointer group'
            >      
                <Logout01Icon className='w-5 h-5' />
                <p className={`transition-all duration-300 ease-in-out font-semibold ${
                    showLabels 
                        ? 'opacity-100 translate-x-0' 
                        : 'opacity-0 -translate-x-2'
                }`}>Logout</p>
            </div>
            </AlertDialogTrigger>
            <AlertDialogContent className='z-300'>
          <AlertDialogHeader>
            <AlertDialogTitle>Do you want to logout?</AlertDialogTitle>
            <AlertDialogDescription>
              You will be logged out of your account.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction className='bg-red-500 text-white hover:bg-red-600'
                onClick={() => {setIsOpen(false)}}>Logout</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
        </AlertDialog>
        </div>
      </div>
    );
  }