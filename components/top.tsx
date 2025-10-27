"use client"
import { SunMedium, BellRing, Settings, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import * as React from "react"

export default function Top() {
    const date = new Date();
    const { setTheme } = useTheme();
    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    return (
        <div className="flex justify-between items-center border border-gray-200 dark:border-gray-800 px-8 py-4 
        bg-gray-100 dark:bg-black rounded-t-xl">
            <div className="flex flex-col gap-2 text-white">
                <span className='flex gap-2 items-center'>
                    <p className='font-bold text-xl'>Good Morning, John</p>
                    <SunMedium className='text-yellow-200 h-6 w-6' />
                </span>
                <span className='text-gray-400'>
                    {`It's  ${weekday[date.getDay()]}, ${date.getUTCDate()} ${month[date.getMonth()]} ${date.getUTCFullYear()}`}
                </span>
            </div>

            <div className='flex gap-2 items-center'>
                <div className='bg-gray-800 rounded-md cursor-pointer h-fit p-2'>
                <BellRing className='h-6 w-6 fill-gray-200' />
                </div>
                <div className='bg-gray-800 rounded-md cursor-pointer h-fit p-2 flex gap-2'>
                <Settings className='h-6 w-6' />
                <p>Settings</p>
                </div>

                <div className='bg-gray-800 rounded-md cursor-pointer h-fit p-2 dark:block hidden' 
                    onClick={() => setTheme("light")}>
                    <Moon className='h-6 w-6 ' />
                </div>
                <div className='bg-gray-800 rounded-md cursor-pointer h-fit p-2 block dark:hidden' 
                    onClick={() => setTheme("dark")}>
                    <Sun className='h-6 w-6 ' />
                </div>
            </div>
        </div>
    )

}