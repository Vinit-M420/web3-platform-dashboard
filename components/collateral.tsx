"use client";
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useState } from "react";

type collateralDurationItems = 'month' | "day" | "last 3 month" | "last 6 month";

type collateralContent = {
    title : string,
    color: string,
    percent: number,
    growth: number
}

const Content : collateralContent[] = [
    {
        title: 'Tokenized Real Estate',
        color: 'bg-blue-600',
        percent: 60,
        growth: 3.4,
    },
    {
        title: 'Crypto Collateral',
        color: 'bg-blue-400',
        percent: 25,
        growth: 3.4,
    },
    {
        title: 'Fiat-backed Notes/Bonds',
        color: 'bg-sky-300',
        percent: 10,
        growth: 3.4,
    },
    {
        title: 'Other RWAs',
        color: 'bg-sky-200',
        percent: 5,
        growth: 3.4,
    }
] 

export default function Collateral() {
    const [collateralDuration, setCollateralDuration]  = useState<collateralDurationItems>('month');

    return (
    <div className="rounded-lg border border-gray-800 p-4 flex flex-col gap-5" >
        <div className="flex justify-between items-center ">
            <div className="flex flex-col gap-2 text-white">
                <span className='text-gray-400'>
                    Collateral Composition
                </span>
                <p className="font-bold text-4xl">$10,234.23</p>
            </div>
            <div>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button className="flex gap-2 rounded-lg border border-gray-800 dark:bg-gray-900 dark:text-white text-black w-fit">
                            <p className="">
                                {collateralDuration === 'day' && 'This Day'}
                                {collateralDuration === 'month' && 'This Month'}
                                {collateralDuration === 'last 3 month' && 'Last 3 Months'}
                                {collateralDuration === 'last 6 month' && 'Last 6 Months'}
                            </p>
                            <ChevronDown />
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
        
        <div className="flex gap-2 h-3">
            <div className="bg-blue-600 w-[60%] rounded-2xl" />
            <div className="bg-blue-400 w-[25%] rounded-2xl" /> 
            <div className="bg-sky-300 w-[10%] rounded-2xl" /> 
            <div className="bg-sky-200 w-[5%] rounded-2xl" /> 
        </div>
        <div className="grid grid-cols-2 gap-2">
            <div className="rounded-lg border border-gray-800 p-2 flex flex-col gap-2">
                <span className="flex gap-2 items-center">
                    <span className="bg-blue-600 rounded-full w-4 h-4" />
                    <p className="dark:text-gray-400">Tokenized Real Estate</p>
                </span>
                
                <span className="flex gap-2 ml-1">
                    <p className="font-bold text-3xl">60%</p>
                </span>
            </div>
            <div className="rounded-lg border border-gray-800 p-2">
                <span className="flex gap-2 items-center">
                    <span className="bg-blue-400 rounded-full w-4 h-4" />                    
                    <p className="dark:text-gray-400">Cyprto Collateral</p>
                </span>
            </div>
        </div>
    </div>)
}