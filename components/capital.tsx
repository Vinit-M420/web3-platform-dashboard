"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp, CircleArrowDown  } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu"
import { capitalDurationItems, CapitalPerf } from "@/types/capital_types";



export default function Capital() {
    const [capitalDuration, setcapitalDuration]  = useState<capitalDurationItems>('month');
    return (
    <div className="rounded-lg border dark:border-gray-800 border-gray-200 shadow-2xs p-4 flex flex-col gap-5 w-fit" >
        <div className="flex justify-between">
            <div className="flex flex-col gap-2 text-white">
                <span className='dark:text-gray-400 text-gray-500 text-md'>
                    Capital Perfomance
                </span>
                <span className="flex gap-2 items-center">
                    <p className="font-bold text-3xl dark:text-white text-black">$20,500.15</p>
                    <span className="flex gap-1 bg-green-100 text-green-500 text-sm p-1 items-center rounded-2xl">
                        <CircleArrowDown className="w-3 h-3"/>
                        <p>5.9%</p>
                    </span>
                </span>
            </div>
            
            <div>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                    <Button className="flex gap-2 rounded-lg border dark:border-gray-800 dark:bg-gray-900 
                             w-35 justify-between bg-gray-50 border-gray-300
                            hover:bg-gray-100 dark:text-gray-400 text-gray-500">
                        <p className="">
                                {capitalDuration === 'year' && 'This Year'}
                                {capitalDuration === 'month' && 'This Month'}
                            </p>
                            <ChevronDown />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => setcapitalDuration("month")}>
                            This Month
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setcapitalDuration("year")}>
                            This Year
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        
        </div>
        <div className="flex flex-col gap-1">
        { CapitalPerf[capitalDuration].items.map((item, index) => (
                <div key={index} className="flex flex-col gap-1">
                    <p className="dark:text-gray-400 text-gray-500 text-sm">{item.title}</p>
                    <div className="flex justify-between items-center">
                        <span className={`${item.color} h-7 rounded`} style={{ width: `${item.percent}%` }} />
                        <p className="font-bold text-xl text-gray-700 dark:text-gray-100">{item.percent}%</p>
                    </div>    
                </div>
            ))    
        } 
        </div> 
          
    </div>)
}