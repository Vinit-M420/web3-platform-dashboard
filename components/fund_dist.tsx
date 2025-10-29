"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp, CircleArrowDown  } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu"

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
        { label: 'Deployed in Loans', percent: 48.0, color: 'bg-blue-600', stroke: '#165DFF' },
        { label: 'Stablecoins', percent: 31.0, color: 'bg-sky-500', stroke: '#29A3FF' },
        { label: 'Fiat Balances', percent: 21.0, color: 'bg-sky-300', stroke: '#93D2FF' },
    ],
};

function polarToCartesian(cx: number, cy: number, r: number, angleInDegrees: number) {
    const angleInRadians = (angleInDegrees - 90) * (Math.PI / 180);
    return {
        x: cx + r * Math.cos(angleInRadians),
        y: cy + r * Math.sin(angleInRadians)
    };
}

function describeDonutSlice(
    cx: number,
    cy: number,
    outerR: number,
    innerR: number,
    startAngle: number,
    endAngle: number
) {
    const startOuter = polarToCartesian(cx, cy, outerR, endAngle);
    const endOuter = polarToCartesian(cx, cy, outerR, startAngle);
    const startInner = polarToCartesian(cx, cy, innerR, endAngle);
    const endInner = polarToCartesian(cx, cy, innerR, startAngle);
    const largeArcFlag = endAngle - startAngle <= 180 ? 0 : 1;

    return [
        `M ${startOuter.x} ${startOuter.y}`,
        `A ${outerR} ${outerR} 0 ${largeArcFlag} 0 ${endOuter.x} ${endOuter.y}`,
        `L ${endInner.x} ${endInner.y}`,
        `A ${innerR} ${innerR} 0 ${largeArcFlag} 1 ${startInner.x} ${startInner.y}`,
        'Z',
    ].join(' ');
}

export default function FundDistribution() {
    const [duration, setDuration]  = useState<DistributionDuration>('month');
    const items = DistributionData[duration];

    const size = 220; // svg size
    const cx = size / 2;
    const cy = size / 2;
    const outerR = 90;
    const innerR = 55;
    const gapDegrees = 2; // visual gap between slices

    let currentAngle = 0;

    return (
    <div className="rounded-lg border dark:border-gray-700 border-gray-200 p-4 flex flex-col justify-between gap-5 w-fit" >
        
        <div className="flex justify-between">
            <div className="flex flex-col gap-2 text-white">
                <span className='dark:text-gray-400 text-gray-500 text-md'>
                    Total Fund Distribution
                </span>
                <span className="flex gap-2 items-center">
                    <p className="font-bold text-3xl dark:text-white text-black">$20,500.15</p>
                    <span className="flex gap-1 bg-green-50 text-green-500 text-sm p-1 items-center rounded-2xl">
                        <CircleArrowDown className="w-3 h-3"/>
                        <p>5.9%</p>
                    </span>
                </span>
            </div>
            
            <div>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                    <Button className="flex gap-2 rounded-lg border dark:border-gray-700 dark:bg-gray-900 
                             w-35 justify-between bg-gray-50 border-gray-300
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
        <div className="flex gap-1 items-center justify-between">
            <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="-rotate-90">
                {items.map((item, idx) => {
                    const sweep = (item.percent / 100) * 360 - gapDegrees;
                    const start = currentAngle + gapDegrees / 2;
                    const end = start + Math.max(0, sweep);
                    currentAngle += (item.percent / 100) * 360;
                    const d = describeDonutSlice(cx, cy, outerR, innerR, start, end);
                    return (
                        <path key={idx} d={d} fill={item.stroke} />
                    );
                })}
                <circle cx={cx} cy={cy} r={innerR - 1} fill="white" className="dark:fill-black" />
            </svg>

            <div className="flex flex-col gap-4">
                {items.map((item, idx) => (
                    <div key={idx} className="flex flex-col gap-1">
                        <div className="flex gap-1 items-center">
                            <span className={`w-3 h-3 rounded-full ${item.color}`} />
                            <p className="dark:text-gray-400 text-gray-500 text-sm">{item.label}</p>
                        </div>
                        <p className="font-bold text-xl text-gray-700 dark:text-gray-100 ml-5">{item.percent}%</p>
                    </div>
                ))}
            </div>
        </div>
        
    </div>)
}