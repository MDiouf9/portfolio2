"use client";
import React from 'react'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { CiMenuFries } from "react-icons/ci"

const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Services",
    path: "/Services",
  },
  {
    name: "Work",
    path: "/Work",
  },
  {
    name: "Contact",
    path: "/Contact",
  },
]

const MobileNav = () => {
  const pathname = usePathname();
  
  return (
    <Sheet>
      <SheetTrigger className='flex justify-center items-center'>
        <CiMenuFries className='text-[32px] text-accent' />
      </SheetTrigger>
      <SheetContent className='flex flex-col p-4 sm:p-6 md:p-8'>
        <div className='mt-16 mb-20 text-center text-2xl'>
          <h1>
            MOUHAMED<span className='text-accent'>.</span>
            <em className='text-accent'>DIOUF</em>
          </h1>
        </div>
        <nav className='flex flex-col items-center gap-6'>
          {links.map((link, index) => {
            return (
              <Link
                href={link.path}
                key={index}
                className={`${
                  link.path === pathname ? "text-accent border-b-2 border-accent" : ""
                } capitalize font-medium hover:text-accent transition-all`}
              >
                {link.name}
              </Link>
            )
          })}
        </nav>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav;
