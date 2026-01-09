import { cn } from '@/lib/utils';
import React from 'react';
import HeroContent from './HeroContent';
import Image from 'next/image';
import tom from '@/public/tom.png'

const HeroSection = () => {
    return (

        <div className='main-width  h-[calc(100vh-65px)] flex-col-reverse flex md:flex-row items-center z-0'>

            <div className='flex-1 z-0'>
                <HeroContent />
            </div>
            <div className='relative flex-1 h-full w-full z-0 '>
                <Image
                    fill
                    src={tom}
                    alt=''
                    className='object-contain'
                    placeholder='blur'
                />
            </div>
        </div>
    );
};

export default HeroSection;