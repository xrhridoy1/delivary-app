import Image from 'next/image';
import React from 'react';
import offerImage from '@/public/offerProduct.png';
import TimeCountdown from './TimeCountdown';

const Offer = () => {
    return (
        <div className={`flex flex-col md:flex-row justify-center  bg-black py-10 px-4 lg:p-30 md:bg-[url('/offerBg.png')] md:h-[70vh] h-[80vh] bg-no-repeat bg-cover`}>
            {/* text container  */}
            <div className='flex-1 text-white flex flex-col  items-start gap-5 md:gap-10 '>
                <h1 className='text-4xl md:text-5xl xl:text-6xl font-bold '>Delicious Burger & French Fry</h1>
                <p className='xl:text-xl'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum ex, dolorem eius fugiat reprehenderit, </p>
                <h1 className='text-4xl md:text-5xl xl:text-6xl font-bold text-yellow-500'>
                    <TimeCountdown />
                </h1>
                <button className='bg-red-500 py-3 px-6 rounded-sm'>Order Now</button>
            </div>
            {/* image container  */}
            <div className='flex-1 w-full relative md:h-full'>
                <Image
                    src={offerImage}
                    alt=''
                    fill
                    className='object-contain'
                />
            </div>
        </div >
    );
};

export default Offer;