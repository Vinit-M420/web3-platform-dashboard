'use client';
import DigitalAssets from "./assets";
import Capital from "./capital";
import Collateral from "./collateral";
import FundDistribution from "./fund_dist";
import Top from "./top";

interface MainProps {
    isSidebarOpen: boolean;
}

export default function Main({ isSidebarOpen }: MainProps) {
    
    return (
        <div className={`flex-1 flex flex-col transition-all duration-200 bg-gray-50 p-4 mx-auto dark:bg-black shadow-md z-10
                        w-screen `}>
                <Top />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr] gap-5 p-4 border border-gray-200 dark:border-gray-700 border-t-0 border-b-0">
                <Collateral />
                <Capital />
                <FundDistribution className="md:col-span-2 md:mx-auto lg:col-span-1 lg:mx-0" />
            </div>
            <div className="border border-gray-200 dark:border-gray-700 border-t-0 px-4 pb-4">
                <DigitalAssets />
            </div>      
        </div>
    )
}