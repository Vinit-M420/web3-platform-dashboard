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
    <div className="rounded-lg border border-gray-800 p-4 flex flex-col justify-between" >
        <div className="flex justify-between">
            <div className="flex flex-col gap-2 text-white">
                <span className='text-gray-400'>
                    Collateral Composition
                </span>
                <span className="flex gap-2 items-center">
                    <p className="font-bold text-3xl">$10,234.23</p>
                    <span className="flex gap-1 bg-red-50 text-red-500 text-sm p-1 items-center rounded-2xl">
                        <CircleArrowDown className="w-3 h-3"/>
                        <p>11.8%</p>
                    </span>
                </span>
            </div>
            <div>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button className="flex gap-2 rounded-lg border border-gray-800 dark:bg-gray-900 dark:text-white text-black w-35 justify-between">
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
            
          
        </div>
        <div className="flex flex-col gap-5">
        <div className="flex gap-2 h-3">
            {collateralCompositions[collateralDuration].items.map((item, index) => (
                <div
                    key={index}
                    className={`${item.color} rounded-2xl`}
                    style={{ width: `${item.percent}%` }}
                />
            ))}
        </div>  

        <div className="grid grid-cols-2 gap-2">
            {collateralCompositions[collateralDuration].items.map((con, index) => (  
                <div key={index} className="rounded-lg border border-gray-800 p-2 flex flex-col gap-2">
                    <span className="flex gap-2 items-center">
                        <span className={`${con.color} rounded-full w-4 h-4`} />
                        <p className="dark:text-gray-400">{con.title}</p>
                    </span>
                    
                    <span className="flex gap-2 ml-1 items-center">
                        <p className="font-bold text-3xl">
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