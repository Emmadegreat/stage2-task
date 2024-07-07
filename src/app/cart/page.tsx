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

            <div className='md:px-[6rem] px-8 mb-2 flex justify-between py-4'>
                <div className='flex items-center justify-between'>
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

                <div className='flex justify-between items-center text-center pl-[3rem]'>
                    <p>₦80, 000</p>
                    <div className='flex items-center mx-4 bg-[#D9D9D9] py-1 px-4'>
                        <button>-</button>
                        <span className='mx-2'>1</span>
                        <button>+</button>
                    </div>
                    <p>₦80, 000</p>
                </div>

            </div>

            <hr className='mx-8 border-[0.05rem] border-[#F5E5FF]' />

            <div className="md:px-[6rem] px-8 flex justify-between items-center py-4 mb-[8rem]">
                <textarea name="" id="" className='bg-[#D9D9D980] rounded p-2 h-[90px] w-[250px]'>
                    Add a comment...
                </textarea>
                <Link href="/">Continue Shopping</Link>
                <div className='rounded p-3 border-2 border-[#F5E5FF] pb-[1.3rem]'>
                    <p className='mb-4'>Sub Total ₦80, 000</p>
                    <Link href="/checkout" className='bg-[#AF0101] rounded p-2 text-sm text-[#fff]'>Proceed to checkout</Link>
                </div>
            </div>


        </div>
    )
}

export default Cart