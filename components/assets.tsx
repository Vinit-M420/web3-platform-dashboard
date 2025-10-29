"use client";
import { Search, EllipsisVertical } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import { Plus, Trash2, ChevronUp, GripVertical } from "lucide-react";
import { ASSET_TABLE_DATA } from "@/types/asset_types";
import { devNull } from "os";

type Tabletabs = 1 | 2 | 3 | 4;
type TabTitleType = {
    title: string,
}
const TabTitles : TabTitleType[]  = [
    { title: "Asset Information"},
    { title: "Loan Details"},
    { title: "Risk & Status"},
    { title: "Management & Analytics"},
]

const TableColumnNames = [
	{column: 'Asset ID'},
	{column: 'Share-of-asset'},
	{column: 'Valuation'},
	{column: 'Volume'},
	{column: 'Market Value'},
	{column: 'Loan'},
	{column: 'Chain'},
	{column: 'Issuer'},
	{column: 'Custodian'},
	{column: 'Oracle Source'},
	{column: 'Valuation Date'},
]
  
type dropdownExpandType = 'Bonds' | "Crypto" | 'Real Estate' | 'none';
    

export default function DigitalAssets() {
    const [selectedTab, setCurrentTab] = useState<Tabletabs>(1);
    const [dropdownExpand, setDropDownExpand] = useState<dropdownExpandType>("none");
    return (
        
            <div className="border border-gray-200 dark:border-gray-700 rounded-md flex flex-col ">
                <div className="flex justify-between px-8 py-4 dark:bg-black bg-white rounded-md items-center">
                    <p className='font-bold text-xl'>Digital Assets</p>
                    <span className="flex gap-2 items-center">
                        <div className='mx-5 flex gap-2 items-center justify-start border dark:border-gray-700 border-gray-300 
                        bg-white dark:bg-black p-2 rounded-md'>      
                            <Search className='w-5 h-5' />
                            <input type="text" placeholder='Search' 
                            className='w-2xs bg-transparent outline-none text-sm dark:text-gray-200 text-gray-500 placeholder:text-gray-400' />
                        </div>
                        <EllipsisVertical className='w-5 h-5 cursor-pointer' />
                    </span>
                </div>
                {/* Tabs */}
                <div className="bg-gray-100 dark:bg-gray-950 flex gap-4 px-8 py-4 border-b border-gray-200 dark:border-gray-700 justify-between">
                    <div className="flex gap-2">
                        {TabTitles.map((item, index) => (
                            <Button key={index} className={`cursor-pointer transition-colors duration-200
                                ${selectedTab === index + 1  
                                ? `bg-blue-600 text-white hover:bg-blue-500` 
                                : `dark:bg-gray-900 bg-gray-50 dark:text-gray-400 text-gray-500
                                dark:hover:bg-gray-700 hover:bg-gray-200`}`}
                                onClick={() => setCurrentTab((index + 1) as Tabletabs)}>
                                {item.title}
                            </Button>
                        ))}
                    </div>
                    <div className="flex gap-2">
                        <div className='dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md cursor-pointer h-fit 
                                        p-2 dark:text-gray-400 text-gray-500 dark:hover:bg-gray-700 hover:bg-gray-200 transition-colors duration-200'>
                            <Plus className='h-4 w-4 ' />
                        </div>
                        <div className='dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md cursor-pointer h-fit 
                                        p-2 dark:text-gray-400 text-gray-500 dark:hover:bg-gray-700 hover:bg-gray-200 transition-colors duration-200'>
                            <Trash2 className='h-4 w-4 ' />
                        </div>
                    </div>
                </div>
                <div className="dark:text-gray-400 text-gray-500 flex justify-between px-5 py-2 text-center text-sm border-b border-gray-200 dark:border-gray-700 items-center">
                    <span>Asset</span>
                    <div className="flex gap-10 items-center">
                        {TableColumnNames.map((item, index) => (
                            <span key={index} className="w-[60px]">
                                {item.column}</span>
                        ))}
                    </div>
                </div>
               

                {Object.entries(ASSET_TABLE_DATA).map(([category, assets], index) => (
                    <div key={index}>
                        <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300 font-md p-4
                        border-b border-gray-200 dark:border-gray-700 group dark:hover:bg-gray-900 hover:bg-gray-200" 
                            onClick={() => 
                                {
                                    setDropDownExpand(category as dropdownExpandType)
                                    if (category === dropdownExpand) setDropDownExpand("none");
                                }}>
                                <div className="group-hover:flex hidden gap-2 transition-all duration-100"> 
                                    <GripVertical className={`w-4 h-4 cursor-pointer`} />
                                    <EllipsisVertical className='w-4 h-4 ' /> 
                                </div>
                                <ChevronUp className={`w-4 h-4 transition-all duration-500
                                    ${dropdownExpand === category ? "rotate-180" : ""}`} />
                                <span>{category}</span>
                        </div>
                        
                        {dropdownExpand === category && 
                        <div className="px-5 py-2 divide-y divide-gray-200 dark:divide-gray-800">
                            {assets.map((row, rowIndex) => (
                                <div key={rowIndex} className="flex justify-between items-center py-5 text-sm">
                                    <span className="text-gray-800 dark:text-gray-200 font-medium">{row.asset}</span>
                                    <div className="flex gap-10 dark:text-gray-400 text-gray-500 text-center">
                                        <span className="w-[60px]">{row.assetId}</span>
                                        <span className="w-[60px]">{row.shareOfAsset}</span>
                                        <span className="w-[60px]">{row.valuation}</span>
                                        <span className="w-[60px]">{row.volume}</span>
                                        <span className="w-[60px]">{row.marketValue}</span>
                                        <span className="w-[60px]">{row.loan}</span>
                                        <span className="w-[60px]">{row.chain}</span>
                                        <span className="w-[60px]">{row.issuer}</span>
                                        <span className="w-[60px]">{row.custodian}</span>
                                        <span className="w-[60px]">{row.oracleSource}</span>
                                        <span className="w-[60px]">{row.valuationDate}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                        }
                    </div>
                ))}
                
            </div>
    )
}