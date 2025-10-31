'use client';

import Sidebar from "@/components/sidebar";
import Main from "@/components/mainbody"
import { useState } from "react";
import Topbar from "@/components/topbar";

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex min-h-screen bg-zinc-50 font-sans dark:bg-black overflow-x-hidden ">
      <Sidebar onToggle={setIsSidebarOpen} />
      <Topbar />
      <Main isSidebarOpen={isSidebarOpen} />
    </div>
  );
}
