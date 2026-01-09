import Image from 'next/image';
import React from 'react';
import cartImage from '@/public/cart.png';

const CartIcon = () => {
    return (
        <div className='flex  items-center justify-center gap-2 md:gap-1'>
            <div className='h-10 w-10 md:h-5 md:w-5'>
                <Image src={cartImage} alt='' />
            </div>
            <span>Cart (3)</span>
        </div>
    );
};

export default CartIcon;