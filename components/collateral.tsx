"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button"
import CountUp from './CountUp'
import { ChevronDown, CircleArrowDown  } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu"
import { collateralCompositions, collateralDurationItems } from "@/types/collateral_types";


export default function Collateral() {
    const [collateralDuration, setCollateralDuration]  = useState<collateralDurationItems>('month');

    return (
    <div className="rounded-lg border dark:border-gray-700 border-gray-200 p-4 flex flex-col justify-between dark:text-gray-400 text-gray-500" >
        <div className="flex justify-between">
            <div className="flex flex-col gap-2 text-white">
                <span className='dark:text-gray-400 text-gray-500 text-md'>
                    Collateral Composition
                </span>
                <span className="flex gap-2 items-center">
                    <p className="font-bold text-3xl dark:text-white text-black">$10,234.23</p>
                    <span className="flex gap-1 bg-red-50 text-red-500 text-sm p-1 items-center rounded-2xl">
                        <CircleArrowDown className="w-3 h-3"/>
                        <p>11.8%</p>
                    </span>
                </span>
            </div>
            <div>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button className="flex gap-2 rounded-lg border dark:border-gray-700 dark:bg-gray-900 
                             w-35 justify-between bg-gray-50 border-gray-300
                            hover:bg-gray-100 dark:text-gray-400 text-gray-500">
                            <p className="flex-1 truncate text-left">
                                {collateralDuration === 'day' && 'This Day'}
                                {collateralDuration === 'month' && 'This Month'}
                                {collateralDuration === 'last 3 month' && 'Last 3 Months'}
                                {collateralDuration === 'last 6 month' && 'Last 6 Months'}
                            </p>
                            <ChevronDown className="shrink-0" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => setCollateralDuration("month")}>
                            This Month
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCollateralDuration("day")}>
                            This Day
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCollateralDuration("last 3 month")}>
                            Last 3 Months
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setCollateralDuration("last 6 month")}>
                            Last 6 Months
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            
        {/* */}
        </div>
        <div className="flex flex-col gap-5">
        <div className="flex gap-2 h-3">
            {collateralCompositions[collateralDuration].items.map((item, index) => (
                <div key={index}
                        className={`${item.color} rounded-2xl cursor-pointer group relative`}
                        style={{ width: `${item.percent}%` }}
                    >
                    <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-800 text-white text-sm w-fit
                        rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none 
                        whitespace-nowrap z-50">
                        {item.title}
                    </div>
                </div>                           
            ))}
        </div>  

        <div className="grid grid-cols-2 gap-2">
            {collateralCompositions[collateralDuration].items.map((con, index) => (  
                <div key={index} className="rounded-lg border dark:border-gray-700 border-gray-200 p-2 flex flex-col gap-2">
                    <span className="flex gap-2 items-center">
                        <span className={`${con.color} rounded-full w-3 h-3`} />
                        <p className="dark:text-gray-400 text-gray-500 text-sm">{con.title}</p>
                    </span>
                    
                    <span className="flex gap-2 ml-1 items-center">
                        <p className="font-bold text-3xl text-gray-700 dark:text-gray-100">
                        <CountUp
                            from={0}
                            to={con.percent}
                            separator=","
                            direction="up"
                            duration={0.2}
                            className="count-up-text"
                            />
                        %</p>
                        <p className="text-green-500">+{con.growth}%</p>
                    </span>
                </div>   
            ))}
        </div>
        </div>
       
        
    </div>)
}