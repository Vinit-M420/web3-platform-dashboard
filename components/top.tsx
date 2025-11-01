"use client"
import { SunMedium, BellRing, Settings, Moon, Sun, AlertCircleIcon, CheckCircle2Icon } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useState } from 'react';
import Link from 'next/link';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { s } from 'framer-motion/client';

export default function Top() {
    const date = new Date();
    const [notificationOn, setNotificationOn] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const { setTheme } = useTheme();
    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    const handleShowAlert = () => {
        setShowAlert(true);
        setTimeout(() => {
            setShowAlert(false);
        }, 3000);
    }

    return (
        <div className="flex flex-wrap gap-y-4 justify-center sm:justify-between items-center border border-gray-200 dark:border-gray-700 px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 bg-gray-50 dark:bg-black rounded-t-xl">
            <div className="flex flex-col gap-1 dark:text-white text-black min-w-[170px] text-center sm:text-left">
                <span className='flex gap-2 items-center justify-center sm:justify-start'>
                    <p className='font-bold text-lg sm:text-xl md:text-xl lg:text-2xl'>Good Morning, John</p>
                    <SunMedium className='dark:text-yellow-200 dark:fill-yellow-200 text-amber-400 fill-amber-400 w-5 h-5 sm:w-6 sm:h-6 md:w-6 md:h-6' />
                </span>
                <span className='dark:text-gray-400 text-gray-500 text-xs sm:text-sm md:text-base'>
                    {`It's  ${weekday[date.getDay()]}, ${date.getUTCDate()} ${month[date.getMonth()]} ${date.getUTCFullYear()}`}
                </span>
            </div>

            <div className='flex gap-2 sm:gap-3 md:gap-4 items-center dark:text-white text-gray-700 min-w-fit justify-center sm:justify-end w-full sm:w-auto'>
                
                <div className='dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md cursor-pointer h-fit p-1.5 sm:p-2 md:p-2 flex items-center justify-center mx-auto sm:mx-0 hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors duration-200'
                    onClick={() => {setNotificationOn(!notificationOn); handleShowAlert()}}>
                    <BellRing className={`w-5 h-5 sm:w-6 sm:h-6 md:w-6 md:h-6 ${notificationOn ? 'dark:fill-gray-200 fill-gray-700' : ''}`} />
                </div>

                <Link href="/settings" className='dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md cursor-pointer h-fit p-1.5 sm:p-2 md:p-2 flex gap-1.5 sm:gap-2 items-center mx-auto sm:mx-0 hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors duration-200'>
                    <Settings className='w-5 h-5 sm:w-6 sm:h-6 md:w-6 md:h-6' />
                    <p className='text-xs sm:text-sm md:text-base'>Settings</p>
                </Link>
                <div className='dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md cursor-pointer h-fit p-1.5 sm:p-2 md:p-2 dark:flex hidden items-center justify-center mx-auto sm:mx-0 hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors duration-200' 
                    onClick={() => setTheme("light")}> 
                    <Moon className='w-5 h-5 sm:w-6 sm:h-6 md:w-6 md:h-6' /> 
                </div>
                <div className='dark:bg-gray-800 border border-gray-200 rounded-md cursor-pointer h-fit p-1.5 sm:p-2 md:p-2.5 dark:hidden flex items-center justify-center mx-auto sm:mx-0 hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors duration-200' 
                    onClick={() => setTheme("dark")}> 
                    <Sun className='w-5 h-5 sm:w-6 sm:h-6 md:w-6 md:h-6' /> 
                </div>
            </div>
           
            {showAlert && (
            <Alert className='fixed bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-2 z-500 w-fit'>
            <CheckCircle2Icon />
                <AlertTitle>Notification are {notificationOn ? 'On' : 'Off'}</AlertTitle>
            </Alert>
            )}
        </div>
    )
}