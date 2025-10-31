"use client";
import { Search, EllipsisVertical } from "lucide-react";
import { Button } from "./ui/button";
import { Checkbox } from "@/components/ui/checkbox"
import { useState } from "react";
import { Plus, Trash2, ChevronUp, GripVertical } from "lucide-react";
import { AssetColumnNames, ASSET_TABLE_DATA } from "@/types/asset_types";
import { LoanColumnNames, dummyLoanDetails } from "@/types/loan_types";
import { AnimatePresence, motion, Reorder, useDragControls } from "framer-motion";
import { Table, TableBody, TableCell, TableHeader, TableRow } from "./ui/table";
import React from "react";

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

  
type AssetdropdownExpandType = 'Bonds' | "Crypto" | 'Real Estate' | 'none';
    

export default function DigitalAssets() {
    const [selectedTab, setCurrentTab] = useState<Tabletabs>(1);
    const [assetCategoryOrder, SetAssetCategoryOrder] = useState(Object.keys(ASSET_TABLE_DATA));
    // const [loanCategoryOrder, SetAssetCategoryOrder] = useState(Object.keys(ASSET_TABLE_DATA));
    const [dropdownExpand, setDropDownExpand] = useState<AssetdropdownExpandType>("none");
    const [loanDropDown, setLoanDropDown] = useState(false);
    const dragControls = useDragControls();

    return (
        
            <div className="border border-gray-200 dark:border-gray-700 rounded-md flex flex-col">
                <div className="flex flex-col gap-2 lg:flex-row lg:gap-0 justify-between px-8 py-4 dark:bg-black bg-white rounded-md items-center">
                    <p className='font-semibold md:text-xl text-lg '>Digital Assets</p>
                    <span className="flex gap-1 items-center">
                        <div className='mx-5 flex gap-2 items-center justify-start border dark:border-gray-700 border-gray-300 
                        bg-white dark:bg-black p-2 rounded-md'>      
                            <Search className='w-5 h-5' />
                            <input type="text" placeholder='Search' 
                            className='lg:w-2xs md:w-[200px] w-[150px] bg-transparent outline-none text-sm dark:text-gray-200 text-gray-500 placeholder:text-gray-400' />
                        </div>
                        <EllipsisVertical className='w-5 h-5 cursor-pointer' />
                    </span>
                </div>
                {/* Tabs */}
                <div className="bg-gray-100 dark:bg-gray-950 flex flex-col gap-2 md:flex-row md:gap-0 lg:gap-4 px-8 py-4 border-b border-gray-200 dark:border-gray-700 md:justify-between items-start md:items-center">
                    <div className="grid grid-cols-2 gap-2 lg:flex lg:flex-wrap">                  
                        {TabTitles.map((item, index) => (
                            <Button key={index} className={`cursor-pointer transition-colors duration-200  lg:text-md md:text-sm text-[10px]
                                ${selectedTab === index + 1  
                                ? `bg-blue-600 text-white hover:bg-blue-500` 
                                : `dark:bg-gray-900 bg-gray-50 dark:text-gray-400 text-gray-500
                                dark:hover:bg-gray-700 hover:bg-gray-200`}`}
                                onClick={() => setCurrentTab((index + 1) as Tabletabs)}>
                                {item.title}
                            </Button>
                        ))}
                    </div>
                    <div className="flex w-full justify-center gap-2 md:w-auto md:justify-start">
                        <div className='dark:bg-gray-800 bg-gray-50 border border-gray-200 dark:border-gray-700 rounded-md cursor-pointer h-9 w-9 
                                        flex items-center justify-center dark:text-gray-300 text-gray-600 dark:hover:bg-gray-700 hover:bg-gray-200 transition-colors duration-200'>
                            <Plus className='h-4 w-4 ' />
                        </div>
                        <div className='dark:bg-gray-800 bg-gray-50 border border-gray-200 dark:border-gray-700 rounded-md cursor-pointer h-9 w-9 
                                        flex items-center justify-center dark:text-gray-300 text-gray-600 dark:hover:bg-gray-700 hover:bg-gray-200 transition-colors duration-200'>
                            <Trash2 className='h-4 w-4 ' />
                        </div>
                    </div>
                </div>

                {/* {selectedTab === 1 && 
                <div className="dark:text-gray-400 text-gray-500 flex justify-between px-5 py-2 text-center text-sm border-b border-gray-200 dark:border-gray-700 items-center">
                    <span>Asset</span>
                    <div className="flex gap-10 items-center">
                        {AssetColumnNames.map((item, index) => (
                            <span key={index} className="w-[60px]">
                                {item.column}</span>
                        ))}
                    </div>
                </div>
                }  */}

                {selectedTab === 1 && 
                    <div className="overflow-x-auto w-full">
                        <Table className="min-w-max">
                            <TableHeader>
                                <TableRow className="dark:text-gray-400 text-gray-500 text-center text-sm 
                                border-b border-gray-200 dark:border-gray-700 items-center h-[60px]">
                                    <TableCell className="font-semibold whitespace-nowrap">Assets</TableCell>
                                    {AssetColumnNames.map((item, index) => (
                                        <TableCell key={index} className="font-semibold whitespace-nowrap">
                                            {item.column}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {assetCategoryOrder.map((category) => {
                                    const assets = ASSET_TABLE_DATA[category as keyof typeof ASSET_TABLE_DATA];
                                    return (
                                    <React.Fragment key={category}>
                                        <TableRow className="bg-gray-50 dark:bg-gray-950 dark:hover:bg-gray-900 
                                                            hover:bg-gray-100 border-b group h-[60px]">
                                        <TableCell colSpan={AssetColumnNames.length + 1} className="p-0">
                                            <div className="flex items-center justify-between px-4 py-3">
                                            <div className="flex items-center gap-2">
                                                <GripVertical
                                                className="w-4 h-4 cursor-grab opacity-0 group-hover:opacity-100 transition-opacity"
                                                onPointerDown={(e) => dragControls.start(e)}
                                                />
                                                <span
                                                className="flex items-center gap-2 cursor-pointer font-medium"
                                                onClick={() => {
                                                    setDropDownExpand(prev => prev === category ? "none" : category as AssetdropdownExpandType);
                                                }}
                                                >
                                                <ChevronUp className={`w-4 h-4 transition-transform ${dropdownExpand === category ? "rotate-180" : ""}`} />
                                                {category}
                                                </span>
                                            </div>
                                            <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                                <Checkbox className="border border-gray-500" />
                                                <EllipsisVertical className="w-4 h-4" />
                                            </div>
                                            </div>
                                        </TableCell>
                                        </TableRow>

                                        <AnimatePresence>
                                        {dropdownExpand === category && assets.map((row, i) => (
                                            <motion.tr
                                                key={`${category}-${i}`}
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: "auto" }}
                                                exit={{ opacity: 0, height: 0 }}
                                                className="border-b border-gray-200 dark:border-gray-800"
                                            >
                                            <TableCell className="text-center py-4 font-medium">{row.asset}</TableCell>
                                            {Object.values(row).slice(1).map((val, idx) => (
                                                <TableCell key={idx} className="text-center">
                                                {idx === 1 ? `${val}%` : val}
                                                </TableCell>
                                            ))}
                                            </motion.tr>
                                        ))}
                                        </AnimatePresence>
                                    </React.Fragment>
                                    );
                                })}
                                </TableBody>
                            </Table>
                            </div>
                        }   




                

                {selectedTab === 2 && 
                    <div className="overflow-x-auto w-full">
                        <Table className="min-w-max">
                            <TableHeader>
                                <TableRow className="dark:text-gray-400 text-gray-500 text-center text-sm 
                                border-b border-gray-200 dark:border-gray-700 items-center h-[60px]">
                                    <TableCell className="font-semibold whitespace-nowrap">Loans</TableCell>
                                    {LoanColumnNames.map((item, index) => (
                                        <TableCell key={index} className="font-semibold whitespace-nowrap">
                                            {item.column}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            </TableHeader>
                            
                            <TableBody>
                                {dummyLoanDetails.map((loan, rowIndex) => (
                                    <TableRow key={rowIndex} className="text-sm py-4 h-[60px] dark:text-gray-400 text-gray-500 text-center">
                                        <TableCell className="text-gray-800 dark:text-gray-200 font-medium text-center whitespace-nowrap">
                                            Loan {rowIndex + 1}
                                        </TableCell>
                                        <TableCell className="whitespace-nowrap">{loan.id}</TableCell>
                                        <TableCell className="whitespace-nowrap">{loan.borrower}</TableCell>
                                        <TableCell className="whitespace-nowrap">{loan.asset}</TableCell>
                                        <TableCell className="whitespace-nowrap">{loan.amount}</TableCell>
                                        <TableCell className="whitespace-nowrap">{loan.collateral}</TableCell>
                                        <TableCell className="whitespace-nowrap">{loan.interestRate}%</TableCell>
                                        <TableCell className="whitespace-nowrap">{loan.startDate}</TableCell>
                                        <TableCell className="whitespace-nowrap">{loan.endDate}</TableCell>
                                        <TableCell className="whitespace-nowrap">{loan.status}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                }

            {selectedTab === 3 && 
                <div className="text-center py-4">
                    No data found
                </div>    
            }
            {selectedTab === 4 && 
                <div className="text-center py-4">
                    No data found
                </div>    
            }
            </div>
    )
}