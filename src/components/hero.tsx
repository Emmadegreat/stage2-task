import { AiOutlineArrowRight } from 'react-icons/ai'
import { BsArrowRight } from 'react-icons/bs'
import Button from '@/components/button'
import Image from 'next/image'
import React from 'react'

const   Hero = () => {
    return (
        <div className='md:flex md:flex-row md:pt-[2rem] flex-col px-6 sm:px-8 sm:pt-6 pt-[5rem] pb-4 justify-between items-center gap-4'>
            <div className='flex items-start flex-col basis-[46%]'>
                <h1 className='hidden sm:block font-[Poppins] text-[#4E2020] font-bold text-[46px] leading-[56px]'>
                    Effortless Elegance. <br />Instant Gratification.
                </h1>
                <h1 className='sm:hidden block text-center font-[Poppins] text-[#4E2020] font-bold m-auto text-[34px] leading-[50px]'>
                    Effortless Elegance. <br />Instant  <br/> Gratification.
                </h1>
                <p className="sm:block hidden text-[#AD5B5B] font-[400] text-[18px] leading-[25px] mt-6 font-[inter]">
                    Seamless Shopping for the discerning customer. Fast finds & instant gratification. Shop Happy!
                </p>
                <Button
                    className='sm:flex hidden bg-[#EBADAD] hover:bg-[#AF0101] hover:text-[#fff] text-[#4E2020] rounded font-[500] px-6 mt-7 items-center py-2 gap-2'
                    text='Shop Now'
                    icon={

                        <BsArrowRight className='font-[500] text-[1.3rem]'/>
                    }
                />
            </div>
            <div className='basis-[46%] sm:mt-0 mt-[4rem]'>
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