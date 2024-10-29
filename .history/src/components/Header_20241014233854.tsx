import Link from 'next/link';
import { Button } from './ui/button';
import React from 'react';
import Nav from './Nav';
import MobileNav from './MobileNav';

const Header = () => {
  return (
    <header className='bg-dark py-3 xl:py-6 text-white w-full'>
      {/* Wrapper pour le contenu du header */}
      <div className='flex items-center justify-between px-4 md:px-8'>
        {/* Logo */}
        <Link href="/">
          <h1 className='text-3xl md:text-4xl font-semibold'>
            RASSOUL<span className='text-accent'>.</span>
          </h1>
        </Link>

        {/* Menu de navigation pour les grands écrans */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
         /
        </div>

        {/* Menu mobile (uniquement visible sur petits écrans) */}
        <div className='xl:hidden'>
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
