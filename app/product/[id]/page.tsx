import Price from '@/components/Price';
import { singleProduct } from '@/data';
import Image from 'next/image';
import React from 'react';

const SignleProductPage = () => {
    return (
        <div className='flex flex-col h-screen md:flex-row items-center justify-around p-4 lg:px-15 xl:px-40 gap-5 text-red-500'>
            {singleProduct.img && (
                <div className='relative w-full h-1/2 md:h-[70%] '>
                    <Image
                        src={singleProduct.img}
                        alt={singleProduct.title}
                        fill
                        className='object-contain'
                    />
                </div>

            )}
            <div className='w-full'>
                <h1 className='text-3xl font-bold uppercase xl:text-5xl'>{singleProduct.title}</h1>
                <p className='my-5'>{singleProduct.desc}</p>
                <Price price={singleProduct.price} id={singleProduct.id} options={singleProduct.options} />
            </div>
        </div>
    );
};

export default SignleProductPage;