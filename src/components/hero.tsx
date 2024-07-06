
import { AiOutlineArrowRight } from 'react-icons/ai'
import Button from '@/components/button'
import Image from 'next/image'
import React from 'react'

const   Hero = () => {
    return (
        <div className='md:flex md:flex-row flex-col px-8 pt-6 pb-4 justify-between items-center gap-4'>
            <div className='flex items-start flex-col basis-[46%]'>
                <h1 className='font-[Poppins] text-[#4E2020] font-bold text-[46px] leading-[56px]'>
                    Effortless Elegance. <br />Instant Gratification.
                </h1>
                <p className="text-[#AD5B5B] font-[400] text-[18px] leading-[25px] mt-6 font-[inter]">
                    Seamless Shopping for the discerning customer. Fast finds & instant gratification. Shop Happy!
                </p>
                <Button
                    className='bg-[#EBADAD] text-[#4E2020] rounded font-[500] px-6 mt-7 items-center py-2 flex gap-2'
                    text='Shop Now'
                    icon={
                        <svg className='text-[#4E2020]' width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.93 5.93005L21 12.0001L14.93 18.0701" stroke="#4E2020" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M4 12H20.83" stroke="#4E2020" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    }
                />
            </div>
            <div className='basis-[46%]'>
                <Image
                    src="https://res.cloudinary.com/dbnxbly1r/image/upload/v1720272389/timbu-shop/Frame_1171275109_klagtf.svg"
                    alt='hero image'
                    className='w-full h-auto'
                    width={100}
                    height={100}
                />
            </div>

        </div>
    )
}

export default Hero