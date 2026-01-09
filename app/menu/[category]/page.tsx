import { pizzas } from '@/data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const CategoryyPage = () => {
    return (
        <div className='flex flex-wrap'>
            {pizzas.map(item => (
                <Link key={item.id} href={`/product/${item.id}`} className='border-l-2 border-b-2 border-r-2 border-red-500 h-[60vh] w-screen sm:w-1/2 lg:w-1/3 p-4 group flex flex-col justify-between font-bold text-red-500 even:bg-fuchsia-50'>
                    {item.img && (
                        <div className='relative h-[80%] '>
                            <Image src={item.img} alt={item.title} fill className='object-contain' />
                        </div>
                    )}
                    <div className='flex justify-between items-center'>
                        <h2 className='text-2xl  uppercase p-2'>{item.title}</h2>
                        <p className='group-hover:hidden text-base'>${item.price}</p>
                        <button className='bg-red-500 text-white py-2 px-5 rounded-sm hidden group-hover:block'>Add to cart</button>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default CategoryyPage;