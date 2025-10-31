"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp, CircleArrowDown  } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu"
import { capitalDurationItems, CapitalPerf } from "@/types/capital_types";
import { motion } from "framer-motion";
import CountUp from './CountUp'


export default function Capital() {
    const [capitalDuration, setcapitalDuration]  = useState<capitalDurationItems>('month');
    return (
    <div className="rounded-lg border dark:border-gray-700 border-gray-200 p-4 flex flex-col gap-5 w-full max-w-full">
        <div className="flex flex-col lg:flex-row sm:justify-between     gap-2 lg:gap-0">
            <div className="flex flex-col gap-2 text-white">
                <span className='dark:text-gray-400 text-gray-500 text-xs sm:text-sm md:text-base'>
                    Capital Perfomance
                </span>
                <span className="flex gap-2 items-center">
                    <p className="font-bold text-xl md:text-3xl dark:text-white text-black">$20,500.15</p>
                    <span className="flex gap-1 bg-green-100 text-green-600 text-sm p-1 items-center rounded-2xl hover:bg-green-200">
                        <CircleArrowDown className="w-3 h-3"/>
                        <p className="lg:text-md text-xs">5.9%</p>
                    </span>
                </span>
                <div className="block lg:hidden mt-2">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button className="flex gap-2 rounded-lg border dark:border-gray-700 dark:bg-gray-900 w-35 justify-between bg-gray-50 border-gray-300 cursor-pointer hover:bg-gray-100 dark:text-gray-400 text-gray-500">
                                <p className="flex-1 truncate text-left">
                                    {capitalDuration === 'year' && 'This Year'}
                                    {capitalDuration === 'month' && 'This Month'}
                                </p>
                                <ChevronDown />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem onClick={() => setcapitalDuration("month")}>This Month</DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setcapitalDuration("year")}>This Year</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
            <div className="hidden lg:flex lg:items-start">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button className="flex gap-2 rounded-lg border dark:border-gray-700 dark:bg-gray-900 w-35 justify-between bg-gray-50 border-gray-300 cursor-pointer hover:bg-gray-100 dark:text-gray-400 text-gray-500">
                            <p className="flex-1 truncate text-left">
                                {capitalDuration === 'year' && 'This Year'}
                                {capitalDuration === 'month' && 'This Month'}
                            </p>
                            <ChevronDown />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => setcapitalDuration("month")}>This Month</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setcapitalDuration("year")}>This Year</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
        <div className="flex flex-col gap-1">
        { CapitalPerf[capitalDuration].items.map((item, index) => (
                <div key={index} className="flex flex-col gap-1">
                    <p className="dark:text-gray-400 text-gray-500 lg:text-md md:text-sm text-xs">{item.title}</p>
                    <div className="flex justify-between items-center">
                    <motion.span 
                        className={`${item.color} h-7 rounded`}
                        initial={{ width: "0%" }}
                        animate={{ width: `${item.percent}%` }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    />
                        {/* <span className={`${item.color} h-7 rounded`} 
                            style={{ width: `${item.percent}%` }} /> */}
                        <p className="font-bold text-xl lg:text-2xl  text-gray-700 dark:text-gray-100">
                        <CountUp
                            from={0}
                            to={item.percent}
                            separator=","
                            duration={0.2}
                            className="count-up-text"
                        />%
                        </p>
                    </div>    
                </div>
            ))    
        } 
        </div> 
          
    </div>)
}