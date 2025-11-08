"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp, CircleArrowDown  } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu"
import CountUp from "./CountUp";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend);

type DistributionDuration = 'month' | 'year';

type DistributionItem = {
    label: string;
    percent: number; 
    color: string;   
    stroke: string;  
};

const DistributionData: Record<DistributionDuration, DistributionItem[]> = {
    month: [
        { label: 'Deployed in Loans', percent: 46.4, color: 'bg-blue-600', stroke: '#165DFF' },
        { label: 'Stablecoins', percent: 32.1, color: 'bg-sky-500', stroke: '#29A3FF' },
        { label: 'Fiat Balances', percent: 21.4, color: 'bg-sky-300', stroke: '#93D2FF' },
    ],
    year: [
        { label: 'Deployed in Loans', percent: 54.4, color: 'bg-blue-600', stroke: '#165DFF' },
        { label: 'Stablecoins', percent: 31.0, color: 'bg-sky-500', stroke: '#29A3FF' },
        { label: 'Fiat Balances', percent: 15.6, color: 'bg-sky-300', stroke: '#93D2FF' },
    ],
};


export default function FundDistribution({ className = "" }: { className?: string }) {
    const [duration, setDuration]  = useState<DistributionDuration>('month');
    const items = DistributionData[duration];

    const data = {
        labels: items.map(item => item.label),
        datasets: [
          {
            data: items.map(item => item.percent),
            backgroundColor: items.map(item => item.stroke),
            borderWidth: 0,
            spacing: 4,
            borderRadius: 4,
            // rotation: -0,
          }
        ] 
    };

    const options = {
        responsive: true,
        cutout: '60%',
        // radius : 100,
        plugins: {
          legend: {
            display : false,
          },
          title: {
            display: false,
          },
      },
      
    }

    return (
    <div className={`rounded-lg border dark:border-gray-700 border-gray-200 p-4 flex flex-col justify-between gap-5 w-full max-w-full ${className}`}>
        
        <div className="flex flex-col sm:flex-row sm:justify-between gap-2 sm:gap-0">
            <div className="flex flex-col gap-2 text-white ">
                <span className='dark:text-gray-400 text-gray-500 text-xs sm:text-sm md:text-base'>
                    Total Fund Distribution
                </span>
                <span className="flex gap-2 items-center">
                    <p className="font-bold text-xl md:text-3xl dark:text-white text-black">$20,500.15</p>
                    <span className="flex gap-1 bg-green-100 text-green-600 text-sm p-1 items-center rounded-2xl hover:bg-green-200">
                        <CircleArrowDown className="w-3 h-3"/>
                        <p className="lg:text-md text-xs">5.9%</p>
                    </span>
                </span>
            </div>
            
            <div className="sm:mt-0 mt-2">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                    <Button className="flex gap-2 rounded-lg border dark:border-gray-700 dark:bg-gray-900 
                             w-35 justify-between bg-gray-50 border-gray-300 cursor-pointer
                            hover:bg-gray-100 dark:text-gray-400 text-gray-500">
                            <p className="">
                                {duration === 'year' && 'This Year'}
                                {duration === 'month' && 'This Month'}
                            </p>
                            <ChevronDown />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => setDuration("month")}>
                            This Month
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setDuration("year")}>
                            This Year
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        
        </div>
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            
            <div className="w-[220px] h-[220px]">
                <Doughnut data={data} options={options} />
            </div>

            <div className="flex flex-col gap-4">
                {items.map((item, idx) => (
                    <div key={idx} className="flex flex-col gap-1">
                        <div className="flex gap-1 items-center">
                            <span className={`w-3 h-3 rounded-full ${item.color}`} />
                            <p className="dark:text-gray-400 text-gray-500 text-xs">{item.label}</p>
                        </div>
                        <p className="font-bold text-xl text-gray-700 dark:text-gray-100 ml-5">
                            <CountUp
                            from={0}
                            to={item.percent}
                            separator=","
                            duration={0.2}
                            className="count-up-text"
                            />  
                        %</p>
                    </div>
                ))}
            </div>
        </div>
        
    </div>)
}