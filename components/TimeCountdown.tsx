'use client'
import React from 'react';
import dynamic from "next/dynamic";

const Countdown = dynamic(() => import("react-countdown"), { ssr: false });

const TimeCountdown = () => {
    const endingDate = new Date('10-25-2025')
    return (
        <div>
            <Countdown
                date={endingDate}
            />

        </div>
    );
};

export default TimeCountdown;