'use client';

import React, { FC, useState } from 'react'

import Button from '@/components/button'
import Image from 'next/image'
import Link from 'next/link'

const Cart: React.FC = () => {
    const initialPrice: number = 80000
    const [count, setCount] = useState<number>(1);
    const [price, setprice] = useState<number>(initialPrice);

    const IncreaseCount = () => {
        const newCount = count + 1
        setCount(newCount);
        setprice(newCount * initialPrice);
    }
    const DecreaseCount = () => {
        const newCount = count - 1
        if (newCount > 0) {
            setCount(newCount);
            setprice(newCount * initialPrice);
        }
    }

    return (
        <div className='flex flex-col pt-[4rem] bg-[#F4F4F499]'>
            <div className='h-[50px]'></div>
            <div className='sm:px-[3rem] px-8 mb-2'>
                <h4 className='text-[#4E2020] text-center font-[500] text-[23px] sm:text-[28px] pb-6 sm:pb-2'>Shopping Cart</h4>
                <hr className='border-[0.05rem] border-[#F5E5FF]' />
            </div>

            <section className='sm:px-[2rem] px-6 mb-2 md:flex md:flex-row flex-col md:justify-around py-4'>
                <div className='flex items-center sm:mb-0 mb-[2rem]'>
                    <div className='basis-[48%]'>
                        <Image
                            src="https://res.cloudinary.com/dbnxbly1r/image/upload/v1720285742/timbu-shop/prod1_f1dxpk.svg"
                            alt=''
                            width={100}
                            height={100}
                            className='w-[100%] md:max-w-[250px] md:max-h-[250px]'
                        />
                    </div>
                    <div className='flex flex-col items-start basis-[48%]'>
                        <div className='flex flex-col ml-3'>
                            <p className='sm:text-[1rem] text-[0.8rem] font-[500]'>Music System Speaker</p>
                            <p className='sm:text-[1rem] text-[0.8rem] font-[400]'>Size: Big</p>
                        </div>

                        <div className='flex md:hidden flex-col justify-center items-center text-center md:pl-[3rem]'>
                            <div className='flex items-center mx-2 py-3 px-4'>
                                <button onClick={DecreaseCount} className='text-[#AF0101] text-[1.2rem] font-[600]'>-</button>
                                <button className='mx-2 rounded text-[#000] py-1 px-2 bg-[#D9D9D9]'>0{count}</button>
                                <button onClick={IncreaseCount} className='text-[#AF0101] text-[1.2rem] font-[600]'>+</button>
                            </div>
                            <p className='text-sm'>₦{price}</p>
                        </div>
                    </div>
                </div>

                <div className='hidden md:flex justify-center items-center text-center md:pl-[3rem]'>
                    <p>₦{price}</p>
                    <div className='flex items-center mx-2 py-1 px-4'>
                        <button onClick={DecreaseCount} className='text-[#AF0101] text-[1.2rem] font-[600]'>-</button>
                        <button className='mx-2 rounded text-[#000] py-1 px-2 bg-[#D9D9D9]'>0{ count }</button>
                        <button onClick={IncreaseCount} className='text-[#AF0101] text-[1.2rem] font-[600]'>+</button>
                    </div>

                </div>

            </section>

            <hr className='sm:mx-[3rem] mx-6 border-[0.05rem] border-[#F5E5FF]' />
            <Link href="/" className='sm:px-[4rem] px-8 block md:hidden text-start mt-2 mb-[4rem] basis-[30%]'>Continue Shopping</Link>

            <section className="sm:px-[5rem] px-8 flex md:flex-row flex-col justify-around items-center md:py-4 py-[3rem] mb-[8rem]">

                <textarea name="message" placeholder=" Add a comment..." className='bg-[#D9D9D980] rounded p-2 h-[100px] lg:ml-8 ml-0 basis-[30%] w-full'>

                </textarea>

                <Link href="/" className='hidden md:block text-center md:my-[1rem] my-[2rem] basis-[15%]'>Continue Shopping</Link>

                <div className='flex items-center flex-col rounded md:mt-0 mt-[4rem] p-3 border-2 border-[#F5E5FF] w-full pb-[1.3rem] basis-[30%]'>
                    <p className='mb-4'>Sub Total ₦80, 000</p>
                    <Link href="/checkout" className='bg-[#AF0101] hover:bg-[#ad5b5b] rounded p-2 text-sm text-[#fff]'>Proceed to checkout</Link>
                </div>
            </section>


        </div>
    )
}

export default Cart