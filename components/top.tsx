"use client"
import { SunMedium, BellRing, Settings, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useState } from 'react';

export default function Top() {
    const date = new Date();
    const [notificationOn, setNotificationOn] = useState(false);
    const { setTheme } = useTheme();
    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    return (
        <div className="flex justify-between items-center border border-gray-200 dark:border-gray-800 px-8 py-4 
        bg-gray-50 dark:bg-black rounded-t-xl">
            <div className="flex flex-col gap-2 dark:text-white text-black">
                <span className='flex gap-2 items-center'>
                    <p className='font-bold text-xl'>Good Morning, John</p>
                    <SunMedium className='dark:text-yellow-200 dark:fill-yellow-200 text-amber-400 fill-amber-400 h-6 w-6' />
                </span>
                <span className='dark:text-gray-400 text-gray-500'>
                    {`It's  ${weekday[date.getDay()]}, ${date.getUTCDate()} ${month[date.getMonth()]} ${date.getUTCFullYear()}`}
                </span>
            </div>

            <div className='flex gap-2 items-center dark:text-white text-gray-700'>
                <div className='dark:bg-gray-800 border border-gray-200 dark:border-gray-800 rounded-md cursor-pointer h-fit p-2'
                    onClick={() => setNotificationOn(!notificationOn)}>
                    <BellRing className={`h-6 w-6 ${notificationOn ? `dark:fill-gray-200 fill-gray-700` : ``}`} /> 
                
                </div>
                <div className='dark:bg-gray-800 border border-gray-200 dark:border-gray-800 rounded-md cursor-pointer h-fit p-2 flex gap-2'>
                <Settings className='h-6 w-6' />
                <p>Settings</p>
                </div>

                <div className='dark:bg-gray-800 border border-gray-200 dark:border-gray-800 rounded-md cursor-pointer h-fit p-2 dark:block hidden' 
                    onClick={() => setTheme("light")}>
                    <Moon className='h-6 w-6 ' />
                </div>
                <div className='dark:bg-gray-800 border border-gray-200 rounded-md cursor-pointer h-fit p-2 block dark:hidden' 
                    onClick={() => setTheme("dark")}>
                    <Sun className='h-6 w-6 ' />
                </div>
            </div>
        </div>
    )
}