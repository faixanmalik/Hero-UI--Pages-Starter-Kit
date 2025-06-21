import React, { useState } from 'react';
import { DashboardNav } from 'components/dashboard-nav';
import { ChevronLeft } from 'lucide-react';
import { useSidebar } from '../hooks/useSidebar';
import { cn } from 'lib/utils';
import { Avatar } from "@heroui/react";


export default function Sidebar({ className }) {
  const { isMinimized, toggle } = useSidebar();

  const handleToggle = () => {
    toggle();
  };

  return (
    <aside
      className={cn(
        `relative hidden min-h-screen bg-sidebar flex-none border-r transition-[width] duration-500 md:block`,
        ! isMinimized ? 'w-[16rem]' : 'w-[85px]',
        className
      )}
    >
      <div className="hidden px-5 pt-8 pb-5 lg:block">

        {/* Replace with actual logo */}
        <Avatar name="Joe" src="https://images.unsplash.com/broken" />
      </div>
      
      <ChevronLeft
        className={cn(
          'absolute -right-1 top-10 z-50 cursor-pointer rounded-full text-3xl text-foreground',
          isMinimized && 'rotate-180'
        )}
        onClick={handleToggle}
      />
      <div className="px-3 py-5"> 
        <DashboardNav />
      </div>
    </aside>
  );
}
