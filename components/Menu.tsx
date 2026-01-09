'use client'
import Image from 'next/image';
import React, { useState } from 'react';
import OpenImage from '@/public/open.png'
import CloseImage from '@/public/close.png'
import Link from 'next/link';
import CartIcon from './CartIcon';

const navLink = [
    { id: 1, name: 'Home', link: '/' },
    { id: 2, name: 'Menu', link: '/menu' },
    { id: 3, name: 'Working Houre', link: '/' },
    { id: 4, name: 'Contact', link: '/' },
]

const Menu = () => {
    const [isOpen, setIsOpen] = useState(false)
    const user = true
    return (
        <div>

            <div className='select-none transition-all duration-200'>
                {
                    !isOpen ? <Image
                        src={OpenImage}
                        alt=''
                        width={20}
                        height={20}
                        onClick={() => setIsOpen(true)}
                        className='cursor-pointer'
                    /> : <Image
                        src={CloseImage}
                        alt=''
                        width={20}
                        height={20}
                        onClick={() => setIsOpen(false)}
                        className='cursor-pointer'
                    />
                }

            </div>
            {
                isOpen && (

                    <div className='flex flex-col gap-5 text-3xl uppercase items-center justify-center absolute left-0 top-24 bg-red-500 text-white w-full h-[calc(100vh-6rem)] z-10'>
                        {
                            navLink.map((item) => (
                                <Link key={item.id} href={item.link} onClick={() => setIsOpen(false)}>{item.name}</Link>
                            ))
                        }
                        {!user ? <Link href='/login' onClick={() => setIsOpen(false)}>Login</Link> :
                            <Link href='/orders' onClick={() => setIsOpen(false)}>Orders</Link>}
                        <Link href='/cart' onClick={() => setIsOpen(false)}>
                            <CartIcon/>
                        </Link>
                    </div>
                )
            }
        </div>
    );
};

export default Menu;