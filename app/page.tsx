'use client';

import Sidebar from "@/components/sidebar";
import Main from "@/components/mainbody"
import { useState } from "react";

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex w-screen min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <Sidebar onToggle={setIsSidebarOpen} />
      <Main isSidebarOpen={isSidebarOpen} />
    </div>
  );
}
