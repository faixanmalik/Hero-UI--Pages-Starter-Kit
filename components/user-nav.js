'use client';
import { DropdownItem, User } from "@heroui/react";
import { Avatar, AvatarFallback, AvatarImage } from 'components/ui/avatar';
import { Button } from 'components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger
} from 'components/ui/dropdown-menu';
import { useRouter } from 'next/router';
import { IoIosArrowDown } from "react-icons/io";

export function UserNav({ dbUser, logout }) {
  
  const router = useRouter();
  
  if (!dbUser) {
    return null; // Prevent rendering if dbUser is null
  }

  const { businessName, email, src } = dbUser;
  
  return (
    <DropdownMenu>

      <DropdownMenuTrigger asChild>
        <div className="flex text-xs rounded-md hover:bg-accent mx-1 px-2 items-center space-x-3 cursor-pointer">
          <User
            as="button"
            avatarProps={{
              src: src,
              className: "object-contain bg-transparent cursor-pointer w-8 h-8 p-1 rounded-full", // Custom avatar styles
            }}
            description={<span className="text-xs text-gray-600 dark:text-gray-500 leading-snug">{email}</span>}
            name={<span className="text-sm leading-snug">{businessName}</span>}
          />
          <IoIosArrowDown className="text-foreground" /> {/* Arrow icon with custom styling */}
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-60 py-3 bg-background" align="end" forceMount >
        <DropdownMenuLabel className="flex space-x-3 items-center font-normal">

          <div className="flex flex-col space-y-1">
            <p className="text-sm tracking-wide font-semibold leading-snug">
              {businessName}
            </p>
            <p className="text-xs tracking-wide leading-snug text-muted-foreground">
              {email}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        
        <DropdownMenuItem className='cursor-pointer' onClick={ ()=> router.push('/website/myaccount?type=companySettings')}>
          Company Settings
          <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
        </DropdownMenuItem>

        <DropdownMenuItem className='cursor-pointer' onClick={ ()=> router.push('/panel/billing')}>
          Billing
          <DropdownMenuShortcut>⇧⌘B</DropdownMenuShortcut>
        </DropdownMenuItem>

        <DropdownMenuItem className='cursor-pointer'>
          Help & Feedback
          <DropdownMenuShortcut>⇧⌘H</DropdownMenuShortcut>
        </DropdownMenuItem>

        <DropdownMenuSeparator className='border'/>
        
        <DropdownMenuItem className='cursor-pointer' onClick={() => logout()}>
          Log out
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>

      </DropdownMenuContent>
    </DropdownMenu>
  );
}
