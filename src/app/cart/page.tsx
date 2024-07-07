import React from 'react'
import Image from 'next/image'
import Button from '@/components/button'
import Link from 'next/link'
const Cart = () => {
    return (
        <div className='flex flex-col pt-[4rem] bg-[#F4F4F499]'>
            <div className='h-[50px]'></div>
            <div className='px-8 mb-2'>
                <h4 className='text-[#4E2020] text-center font-[500] text-[28px] pb-2'>Shopping Cart</h4>
                <hr className='border-[0.05rem] border-[#F5E5FF]' />
            </div>

            <div className='md:px-[4rem] px-8 mb-2 flex md:flex-row flex-col md:justify-between py-4'>
                <div className='flex items-center sm:flex-row sm:justify-center flex-col sm:mb-0 mb-[2rem]'>
                    <Image
                        src="https://res.cloudinary.com/dbnxbly1r/image/upload/v1720285742/timbu-shop/prod1_f1dxpk.svg"
                        alt=''
                        width={100}
                        height={100}
                        className='h-auto w-full max-w-[270px] max-h-[270px]'
                    />
                    <div className='flex flex-col ml-3'>
                        <p className='text-[1.1rem] font-[400]'>Music System Speaker</p>
                        <p className='text-[1rem] font-[400]'>Size: Big</p>
                    </div>
                </div>

                <div className='flex justify-center items-center text-center md:pl-[3rem]'>
                    <p>₦80,000</p>
                    <div className='flex items-center mx-2 py-1 px-4'>
                        <button className='text-[#AF0101] text-[1.2rem] font-[600]'>-</button>
                        <button className='mx-2 rounded text-[#000] py-1 px-2 bg-[#D9D9D9]'>01</button>
                        <button className='text-[#AF0101] text-[1.2rem] font-[600]'>+</button>
                    </div>
                    <p>₦80,000</p>
                </div>

            </div>

            <hr className='mx-8 border-[0.05rem] border-[#F5E5FF]' />

            <div className="md:px-[4rem] px-8 flex md:flex-row flex-col justify-between items-center md:py-4 py-[3rem] mb-[8rem]">
                <textarea name="" id="" className='bg-[#D9D9D980] rounded p-2 md:h-1[30px] h-[120px] basis-[30%] w-full'>
                    Add a comment...
                </textarea>

                <Link href="/" className='text-center md:my-[1rem] my-[2rem] basis-[30%]'>Continue Shopping</Link>

                <div className='flex items-center flex-col rounded p-3 border-2 border-[#F5E5FF] w-full pb-[1.3rem] basis-[30%]'>
                    <p className='mb-4'>Sub Total ₦80, 000</p>
                    <Link href="/checkout" className='bg-[#AF0101] rounded p-2 text-sm text-[#fff]'>Proceed to checkout</Link>
                </div>
            </div>


        </div>
    )
}

export default Cart