"use client"

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Slider1 from '@/public/slide1.png'
import Slider2 from '@/public/slide2.png'
import Slider3 from '@/public/slide3.jpg'
const data = [
    {
        id: 1,
        title: "always fresh & always crispy & always hot",
        image: Slider1,
    },
    {
        id: 2,
        title: "we deliver your order wherever you are in NY",
        image: Slider2,
    },
    {
        id: 3,
        title: "the best pizza to share with your family",
        image: Slider3,
    },
];

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0)

    useEffect(() => {
        const interval = setInterval(
            () => setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1))
            , 4000);
        return () => clearInterval(interval)
    }, []);

    return (
        <div className='relative'>
            <div className='flex flex-col lg:flex-row  gap-5  h-[calc(100vh-6rem)] md:h-[calc(100vh-8rem)] bg-fuchsia-50'>
                {/* text container */}
                <div className=' text-center flex-1 flex flex-col items-center justify-center '>
                    <p className='text-4xl uppercase p-4 md:p-8 md:text-6xl lg:text-7xl text-red-500 font-bold'>{data[currentSlide].title}</p>
                    <button className='text-white bg-red-500 px-6 py-3 rounded'>Order Now</button>
                </div>
                <div className=' flex-1 w-full relative'>
                    <Image
                        src={data[currentSlide].image}
                        alt=''
                        fill
                        className='object-cover'
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </div>
            </div>
            <div className='absolute bottom-10  w-full flex justify-center  gap-5 transition duration-300' >
                {data.map((item, idx) => (
                    <p key={idx}
                        onClick={() => setCurrentSlide(idx)}
                        className={`h-5 w-5  rounded-full  cursor-pointer ${currentSlide === idx ? ' w-10 bg-red-500' : 'bg-slate-700'}`}
                    ></p>
                ))}
            </div>
            <div className='z-10 text-5xl'>
                <p 
                className='absolute left-0 top-100 cursor-pointer

                '
                >&lt;</p>
                <p 
                className='absolute right-0 top-100 cursor-pointer'

                >&gt;</p>
            </div>
        </div>
    );
};

export default Slider;