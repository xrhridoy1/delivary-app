import React from 'react';
import Menu from './Menu';
import Link from 'next/link';
import CartIcon from './CartIcon';
import Image from 'next/image';
import phone from '@/public/phone.png'

const Navbar = () => {
    const user = true
    return (
        <div className='flex justify-between items-center w-full h-12 md:h-20 border-b-2 border-b-red-500 p-4 lg:px-15 xl:px-40'>

            {/* Left side */}
            <div className='hidden md:flex gap-4 text-red-500 uppercase font-medium flex-1'>
                <Link href='/' >Home</Link>
                <Link href='/menu' >Menu</Link>
                <Link href='/' >Contact</Link>
            </div>
            {/* logo */}
            <div className='flex-1 md:text-center'>
                <Link href={"/"} className='uppercase text-2xl md:font-bold lg:text-3xl text-red-500  '>Massimo</Link>
            </div>
            {/* mobile menu */}
            <div className='md:hidden'>
                <Menu />
            </div>
            {/* Right  side */}
            <div className='hidden md:flex gap-4 text-red-500 uppercase font-medium flex-1 justify-end'>
                <div className='md:absolute top-3 lg:static transition duration-300  bg-orange-300 flex gap-2 items-center rounded-md px-2 cursor-pointer'>
                    <Image src={phone} alt='' width={15} height={15} />
                    <span>158 24 545</span>
                </div>
                {!user ? <Link href='/login' >Login</Link> :
                    <Link href='/orders' >Orders</Link>}
                <Link href={'/cart'}>
                    <CartIcon />
                </Link>
            </div>
        </div>
    );
};

export default Navbar;