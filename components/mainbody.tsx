'use client';
import Collateral from "./collateral";
import Top from "./top";

interface MainProps {
    isSidebarOpen: boolean;
}

export default function Main({ isSidebarOpen }: MainProps) {
    return (
        <div className={`flex-1 flex flex-col transition-all duration-200 bg-gray-50 p-4 dark:bg-black ${isSidebarOpen ? 'ml-80' : 'ml-20'}`}>
            <Top />
            <div className="grid grid-cols-4 gap-2 p-4">
                <div className="grid col-span-2">
                    <Collateral />
                </div>
            </div>
        </div>
    )
}