import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

import { Icons } from 'components/icons';
import { cn } from 'lib/utils';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from './ui/tooltip.js';
import { useSidebar } from 'hooks/useSidebar.js';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { sidebarItems } from 'lib/sidebarItems.js';
import { MdDarkMode } from 'react-icons/md';
import { ArrowUpIcon, Moon, Sun } from 'lucide-react';
import { Switch } from '@heroui/react';
import ThemeToggle from './theme/theme-toggle.js';
import { useTheme } from 'next-themes';



export function DashboardNav({
  setOpen,
  isMobileNav = false
}) {


  const path = usePathname();

  const { isMinimized, toggle } = useSidebar();
  const { theme, setTheme } = useTheme();

  const [isSelected, setIsSelected] = useState(theme === 'dark' ? true : false);


  // Sync Switch state with the current theme
  useEffect(() => {

    if (isSelected === true) {
      setTheme('dark');
    } else { 
      setTheme('light');
    }

  }, [isSelected]);


  useEffect(() => {
    if(theme === 'dark'){
      setIsSelected(true);
    }
    else if(theme === 'light'){
      setIsSelected(false);
    }
  }, [theme])
  



  const [openItem, setOpenItem] = useState(null);
  const handleToggle = (title) => {
    setOpenItem(openItem === title ? null : title);
  };


  const navItems = (items) => {
    
    return items.map((item, index) => {

      const ArrowIcon = Icons['chevronRight'];
      const Icon = Icons[item.icon || 'chevronRight'];

      return (
        <div key={index}>
          {item.items && item.items.length > 0 ? (
            <div>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div
                    className={cn(
                      'flex items-center gap-2 overflow-hidden rounded-md py-2 text-sm font-medium ',
                      path === item.href ? 'bg-foreground text-background' : 'transparent hover:bg-background'
                    )}
                    onClick={() => {
                      if (setOpen) setOpen(false);
                      if (isMinimized === true){
                        toggle()
                      }
                      handleToggle(item.title);
                    }}
                  >
                    <Icon className={`ml-2 size-5 flex-none`} />

                    <span className={`mr-2 ${isMinimized ? 'hidden' : 'inline-block'} truncate`}>{item.title}</span>

                    {!isMinimized && <ArrowIcon
                      className={`ml-auto mr-3 size-4 flex-none ${openItem === item.title ? 'rotate-90' : ''}`}
                    />}
                    
                  </div>
                </TooltipTrigger>
                <TooltipContent
                  align="center"
                  side="right"
                  sideOffset={8}
                  className={!isMinimized ? 'hidden' : 'inline-block'}
                >
                  {item.title}
                </TooltipContent>
              </Tooltip>
              {openItem === item.title && isMinimized === false && (
                <ul className="ml-5 mt-1 space-y-1">
                  {navItems(item.items)} {/* Recursive call for nested items */}
                </ul>
              )}
            </div>
          ) : (
            item.href && (
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={item.disabled ? '/' : item.href}
                    className={cn(
                      'flex items-center gap-2 overflow-hidden rounded-md py-2 text-sm font-medium ',
                      path === item.href ? 'bg-foreground text-background' : 'transparent hover:bg-background',
                      item.disabled && 'cursor-not-allowed opacity-80'
                    )}
                    onClick={() => {
                      if (setOpen) setOpen(false);
                    }}
                  >
                    <Icon className={`ml-2 size-5 flex-none`} />

                    {isMobileNav || (!isMinimized && !isMobileNav) ? (
                      <span className="mr-2 truncate">{item.title}</span>
                    ) : (
                      ''
                    )}
                  </Link>
                </TooltipTrigger>
                <TooltipContent
                  align="center"
                  side="right"
                  sideOffset={8}
                  className={!isMinimized ? 'hidden' : 'inline-block'}
                >
                  {item.title}
                </TooltipContent>
              </Tooltip>
            )
          )}
        </div>
      );

    });

  };


  return (
    <nav className="grid items-start gap-1">
      <TooltipProvider>
        {navItems(sidebarItems)}

        <div
          className={cn(
            'flex justify-between items-center mt-2 gap-2 overflow-hidden rounded-md py-2 text-sm font-medium ',
          )}
          onClick={() => {
            if (setOpen) setOpen(false);
          }}
        >

          <span className='flex items-center gap-2'>
            <Moon className={`ml-2 size-5 flex-none`} />

            {isMobileNav || (!isMinimized && !isMobileNav) ? (
              <span className="mr-2 truncate">Dark Mode</span>
            ) : (
              ''
            )}
          </span>

          {!isMinimized && <Switch
            onValueChange={() => {
              setIsSelected(!isSelected);
            }}
            isSelected={isSelected}
            size="sm"
          />}

        </div>
      </TooltipProvider>
    </nav>
  );
}
