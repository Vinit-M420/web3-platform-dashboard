'use client';
import { useState } from "react";
import Sidebar from "@/components/sidebar";
import Main from "@/components/mainbody"
import Topbar from "@/components/topbar";

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex min-h-screen bg-zinc-50 font-sans dark:bg-black overflow-x-hidden ">
      <Sidebar onToggle={setIsSidebarOpen} />
      <Topbar />
      <Main />
    </div>
   
  );
}
