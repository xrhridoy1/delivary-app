
import React from 'react';
import { Highlight } from '../ui/hero-highlight';
import { ContainerTextFlip } from '../ui/container-text-flip';
// import HeroDock from './HeroDock';


const HeroContent = () => {
    const words = ["Web developer", "Web designer"];
    return (
        <div className='text-neutral-700 dark:text-neutral-100  text-2xl md:text-4xl font-bold relative  gap-2 flex  flex-col items-start '>
            <p className="text-black dark:text-white">
                Hey,
            </p>
            <span className="inline-block ">
                This is Hridoy <ContainerTextFlip words={words} />
            </span>
            <p className='text-xl text-neutral-500'>I am a junior web developer
                with a strong interest in building&nbsp;
                <Highlight>modern</Highlight>, &nbsp;
                <Highlight>responsive</Highlight>,&nbsp;
                <Highlight>websites</Highlight>
            </p>
            <div >
                {/* <HeroDock/> */}
            </div>
        </div>
    );
};

export default HeroContent;