import Image from 'next/image';
import React from 'react';
import { featuredProducts } from '@/data';

const Featured = () => {
    return (

        <div className='max-w-screen overflow-x-scroll text-red-500 '>
            {/* wrapper */}
            <div className='w-max flex '>
                {/* signle item */}
                {featuredProducts.map((item) => (

                    <div key={item.id} className='w-screen md:w-[50vw] lg:w-[33vw] xl:w-[25vw] h-[80vh] flex flex-col  items-center justify-center p-4 hover:bg-fuchsia-50 transition-all duration-300'>
                        {/* image container  */}
                        <div className='flex-1 w-full relative hover:rotate-90 transition-all duration-300'>
                            {item.img && <Image
                                src={item.img}
                                alt=''
                                className='object-contain'
                                fill
                            />}
                        </div>
                        {/* text-conteainer */}
                        <div className=' flex-1 flex flex-col items-center justify-center text-center gap-4'>
                            <p className='text-center text-xl font-bold  uppercase'>{item.title}</p>
                            <span className='text-center'>{item.desc}</span>
                            <h4 className=' text-xl font-bold  uppercase text-center'>${item.price}</h4>
                            <button className='bg-red-500 py-2 px-4 rounded-sm text-white'>Add to Cart</button>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
};

export default Featured;