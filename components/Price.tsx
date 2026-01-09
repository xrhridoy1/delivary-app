'use client'
import React, { useEffect, useState } from 'react';
type Props = {
    price: number;
    id: number;
    options?: { title: string; additionalPrice: number }[];
}

const Price = ({ price,  options }: Props) => {
    const [totalPrice, setTotalPrice] = useState(price)
    const [quantity, setQuatity] = useState(1)
    const [selected, setSelected] = useState(0)


    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setTotalPrice(quantity * (options ? price + options[selected].additionalPrice : price));
    }, [quantity, selected, options, price,])


    return (
        <section className='flex flex-col gap-5'>
            <h1 className='text-2xl font-bold lg:text-3xl '>${totalPrice.toFixed(2)}</h1>
            {/* option container */}
            <div className='flex gap-4'>
                {options?.map((options, idx) => (
                    <button
                        key={options.title}
                        className='py-2 px-4 rounded-md ring-1 ring-red-500'
                        style={{
                            background: selected === idx ? '#fb2c36' : '#fff',
                            color: selected == idx ? '#fff' : '#fb2c36'
                        }}
                        onClick={() => setSelected(idx)}
                    >{options.title}</button>
                ))}
            </div>
            {/* quantity and add button */}
            <div className='flex justify-between items-center  ring-1 ring-red-500'>
                <div className='flex justify-between w-full p-3 '>
                    <span>
                        Quantity
                    </span>
                    <div className='flex gap-4 select-none'>
                        <button className='cursor-pointer'
                            onClick={() => setQuatity((prev) => prev === 1 ? prev : prev - 1)}
                        >{quantity === 1 ? '' : '<'} </button>
                        <span>{quantity}</span>
                        <button className='cursor-pointer'
                            onClick={() => setQuatity((prev) => prev === 10 ? prev : prev + 1)}
                        >{quantity === 10 ? '' : '>'} </button>
                    </div>

                </div>
                <button className='bg-red-500 text-white py-3 px-6  w-56 '>Add To Cart</button>
            </div>
        </section>
    );
};

export default Price;