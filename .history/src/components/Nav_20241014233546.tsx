"use client"
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'



const links =[
        {
            name: "Home",
            path: "/",
        },
        {
            name: "Services",
            path: "/Services",
        },
        {
            name: "Resume",
            path: "/Resume",
        },
        {
            name: "work",
            path: "/Work",
        },
        {
            name: "Contact",
            path: "/ontact",
        },
    ]
 const Nav = () => {
  const  pathname = usePathname(); 
  return (
    <nav className=' flex gap-8'>
        {links.map((link,index) => {
            return (
                <Link href={link.path} key={index} className={`${link.path === pathname && "text-accent border-b-2 border-accent"} capitalize font-medium hover:text-accent transition-all`}>
                    {link.name}
                </Link>
            );
        })}

    </nav>
  );
}
export default Nav  