import { useRouter } from 'next/router';
import { Bell, PlusCircle, Search } from 'lucide-react';
import { Button } from './ui/button';
import { Avatar } from "@heroui/react";

export default function Header() {

  const router = useRouter();


  // Logout function
  const logout = ()=>{
    localStorage.removeItem("currentUser");
    router.push(`/`);
  }


  return (
  <header className="z-20 rounded-3xl bg-sidebar border top-0 w-full">
    <div className="px-4 py-2 flex justify-between items-center">


      <div className='flex items-center w-full justify-end'>

        <div className='flex space-x-1 items-center'>
          <Button variant={'link'} className="px-1">
            <PlusCircle />
          </Button>
          <Button variant={'link'} className="px-1">
            <Search />
          </Button>
          <Button variant={'link'} className="px-1">
            <Bell />
          </Button>
          
          <Button variant={'link'} className="px-1">
            <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
          </Button>

        </div>
      </div>

    </div>
  </header>
  );
}
