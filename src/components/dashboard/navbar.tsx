'use client';

import React from 'react';
import { 
  Bell,  
  Menu,
  ChevronDown,
  Moon
} from 'lucide-react';
import { useAppDispatch } from '@/lib/redux/hooks';
import { toggleSidebar } from '@/lib/redux/slices/dashboardSlice';
import { Button } from '@/components/ui/button';

export default function Navbar() {
  const dispatch = useAppDispatch();

  return (
    <header className="sticky top-0 z-30 flex h-20 w-full items-center justify-between border-b bg-background/95 px-6 backdrop-blur supports-backdrop-filter:bg-background/60 lg:px-10">
      <div className="flex items-center gap-4 flex-1">
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={() => dispatch(toggleSidebar())}
          className="lg:hidden"
        >
          <Menu className="h-6 w-6" />
        </Button>
      </div>

      <div className="flex items-center gap-3 md:gap-6">
        <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
          <Moon className="h-5 w-5" />
        </Button>

        <Button variant="ghost" size="icon" className="relative text-muted-foreground hover:text-foreground">
          <Bell className="h-5 w-5" />
          <span className="absolute top-2 right-2.5 flex h-2 w-2 rounded-full bg-primary" />
        </Button>

        <div className="h-8 w-px bg-border mx-1 hidden md:block" />

        <button className="flex items-center gap-3 rounded-lg p-1.5 transition-colors hover:bg-accent/50 group">
          <div className="h-10 w-10 rounded-full bg-linear-to-tr from-[#8B8E63] to-[#B2B58E] flex items-center justify-center text-primary-foreground font-bold text-sm shadow-sm">
            NA
          </div>
          <div className="hidden text-left md:block">
            <p className="text-sm font-bold leading-none text-foreground group-hover:text-primary transition-colors">Naim Almas</p>
            <p className="text-[11px] text-muted-foreground mt-1 font-medium uppercase tracking-wider">Owner</p>
          </div>
          <ChevronDown className="h-4 w-4 text-muted-foreground hidden md:block group-hover:translate-y-0.5 transition-transform" />
        </button>
      </div>
    </header>
  );
}
