import Image from 'next/image';
import React from 'react';
import oneProduct from '@/public/temporary/p1.png'

const CartPage = () => {
    return (
        <div className='flex flex-col lg:flex-row text-red-500  h-[calc(100vh-9rem)] md:h-[calc(100vh-11rem)]'>
            {/* single product  */}
            <div className='overflow-y-auto h-1/2 flex flex-col  lg:h-full lg:w-2/3 2xl:w-full '>
                <div className='flex justify-between w-full items-center p-4 lg:px-15 xl:px-40 mb-2 hover:bg-fuchsia-50 shrink-0' >
                    <Image
                        src={oneProduct}
                        alt=''
                        width={100}
                        height={100}
                        className='object-contain'
                    />
                    <div>
                        <h1 className='uppercase font-bold text-xl'>name</h1>
                        <p className='font-medium'>Short Details</p>
                    </div>
                    <span className=' font-bold'>$57.54</span>
                    <span className='cursor-pointer font-bold'>X</span>
                </div>
            </div>
            {/* payment system */}
            <div className='w-full bg-fuchsia-50 p-4 lg:px-15 2xl:px-40 flex flex-col justify-center gap-5 h-1/2 lg:h-full lg:w-1/3 2xl:w-full font-bold'>
                <div className='flex justify-between items-center'>
                    <h3>SubTotal (3) items</h3>
                    <p>$75.23</p>
                </div>
                <div className='flex justify-between items-center'>
                    <h3>Service Cost</h3>
                    <p>$00.00</p>
                </div>
                <div className='flex justify-between items-center'>
                    <h3>Delivery </h3>
                    <p className='text-green-500'>FREE!</p>
                </div>
                <hr />
                <div className='flex justify-between items-center'>
                    <h3>TOTAL (INC.VAT)</h3>
                    <p>$75.59</p>
                </div>
                <button className='bg-red-500 text-white rounded-md p-2 w-1/2 self-end'>CheckOut</button>
            </div>
        </div>
    );
};

export default CartPage;