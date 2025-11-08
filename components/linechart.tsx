"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react";
import { Line } from "react-chartjs-2";
import { 
  Chart as ChartJS, 
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip, 
  Legend,
  Filler
} from 'chart.js';
import { it } from "node:test";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

type SolanaDuration = 'year' | 'last 3 years';

type SolanaDataPoint = {
  date: string;
  price: number;
};

type MonthNumbers = {
  month: string;
  monthNo: number;
};  

const MonthNumbersData: MonthNumbers[] = [
  { month: 'Jan', monthNo: 1 },
  { month: 'Feb', monthNo: 2 },  
  { month: 'Mar', monthNo: 3 },
  { month: 'Apr', monthNo: 4 },
  { month: 'May', monthNo: 5 }, 
    { month: 'Jun', monthNo: 6 },
    { month: 'Jul', monthNo: 7 },
    { month: 'Aug', monthNo: 8 },
    { month: 'Sep', monthNo: 9 },
    { month: 'Oct', monthNo: 10 },
    { month: 'Nov', monthNo: 11 },
    { month: 'Dec', monthNo: 12 },
];       

const SolanaPriceData: Record<SolanaDuration, SolanaDataPoint[]> = {
  year: [
    { date: '2024-01',  price: 98.50 },
    { date: '2024-02', price: 106.30 },
    { date: '2024-03', price: 187.40 },
    { date: '2024-04', price: 143.20 },
    { date: '2024-05', price: 169.80 },
    { date: '2024-06', price: 144.60 },
    { date: '2024-07', price: 177.30 },
    { date: '2024-08', price: 152.90 },
    { date: '2024-09', price: 143.50 },
    { date: '2024-10', price: 168.20 },
    { date: '2024-11', price: 160.67 },
  ],
  'last 3 years': [
    { date: '2022-01', price: 138.50 },
    { date: '2022-04', price: 108.30 },
    { date: '2022-07', price: 41.20 },
    { date: '2022-10', price: 31.80 },
    { date: '2023-01', price: 23.50 },
    { date: '2023-04', price: 21.40 },
    { date: '2023-07', price: 24.30 },
    { date: '2023-10', price: 31.20 },
    { date: '2024-01', price: 98.50 },
    { date: '2024-04', price: 143.20 },
    { date: '2024-07', price: 177.30 },
    { date: '2024-10', price: 168.20 },
    { date: '2024-11', price: 160.67 },
  ],
};


export default function LineChart() {
    const [duration, setDuration]  = useState<SolanaDuration>('year');
    const items = SolanaPriceData[duration];

    const data = {
        labels: items.map(item => {
                  const monthPart = item.date.split('-')[1];
                  const yearPart = item.date.split('-')[0];
                  const last2DigitsOfYear = yearPart.slice(-2);
                  const monthObj = MonthNumbersData.find(m => m.monthNo === parseInt(monthPart));
                  return monthObj ? monthObj.month.concat("-").concat(last2DigitsOfYear) : '';
                }),
        datasets: [
            {   
                label: 'Solana Price',  
                borderColor: '#165DFF',
                backgroundColor: 'rgba(22, 93, 255, 0.1)',
                borderWidth: 2.5,
                // date: items.map(item => item.date),
                data: items.map(item => item.price),
                fill: true,
                tension: 0.4,
                pointRadius: 4,
                pointBackgroundColor: '#165DFF',
                pointBorderColor: '#fff',
                pointBorderWidth: 2,
                pointHoverRadius: 6,
                pointHoverBackgroundColor: '#165DFF',
                pointHoverBorderColor: '#fff',
                pointHoverBorderWidth: 3,
            }
        ]
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
            display: false,
        },
    };

    return (
        <div className={`rounded-lg border dark:border-gray-700 border-gray-200 p-4 flex flex-col justify-between gap-5 w-full max-w-xl`}>

            <div className="flex flex-col sm:flex-row sm:justify-between gap-2 sm:gap-0">
                <div className="flex flex-col gap-2 text-white ">
                    <span className='dark:text-gray-400 text-gray-500 text-xs sm:text-sm md:text-base'>
                        Solana Price
                    </span>
                    <span className="flex gap-2 items-center">
                        <p className="font-bold text-xl md:text-3xl dark:text-white text-black">$160.67</p>
                        {/* <span className="flex gap-1 bg-green-100 text-green-600 text-sm p-1 items-center rounded-2xl hover:bg-green-200">
                            <CircleArrowDown className="w-3 h-3"/>
                            <p className="lg:text-md text-xs">5.9%</p>
                        </span> */}
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
                                {duration === 'last 3 years' && 'Last 3 Years'}
                            </p>
                            <ChevronDown />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => setDuration("year")}>
                            This Year
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setDuration("last 3 years")}>
                            Last 3 Years
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            </div>

            <div className="w-full h-64 sm:h-80">
                <Line data={data} options={options} />
            </div>

        </div>
    );
};

