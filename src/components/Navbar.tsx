'use client'

import React from 'react';
import Link from 'next/link';
import { Button } from './ui/button';
import { useAuth } from '@/app/context/AuthContext';


function Navbar() {
  const { logout, isAuthenticated } = useAuth();

  const handleClick = () => {
    logout()
  }

  return (
    <nav className="p-4 md:p-6 shadow-md bg-blue-900 text-white">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
      <Link href="/"><div className="text-xl font-bold mb-4 md:mb-0">
          Blogsite
        </div></Link>
        {!isAuthenticated() ? (<Link href="/signin">
            <Button className="w-full md:w-auto bg-slate-100 text-black" variant={'outline'}>Login</Button>
          </Link>)
          : ( <div><Link href="/">
          <Button onClick={handleClick} className="w-full md:w-auto bg-slate-100 text-black" variant={'outline'}>Logout</Button>
        </Link></div> )
          }
          
       
      </div>
    </nav>
  );
}

export default Navbar;
