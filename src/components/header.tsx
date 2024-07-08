import { AiFillHome } from 'react-icons/ai'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { BsFillInfoCircleFill } from 'react-icons/bs'
import Button from '@/components/button'
import Image from 'next/image'
import Link from 'next/link'
import Menu from './menu'
import React from 'react'

const Header:React.FC = () => {
    return (
        <header className='fixed flex items-center justify-between sm:px-[3rem] px-6  bg-[#AF0101] text-white w-full h-[70px] z-[1000]'>
            <Link href="/">
                <Image
                    alt='alt'
                    src="https://res.cloudinary.com/dbnxbly1r/image/upload/v1720269412/timbu-shop/Group_1171275219_d4mkt4.svg"
                    className=''
                    width="70"
                    height="70"
                />
            </Link>
            <div className='flex justify-between'>

                <Menu title="Home" address="/" className="" />
                <Menu title="Shop" address="/shop" className="mx-4" />
                <Menu title="About Us" address="/about" className="mx-4" />
                <Menu title="Contact" address="contact" className="mr-4" />
                <Menu title="Checkout" address="/checkout" className="" />
            </div>

            <Button
                className='rounded bg-[#ad5b5b] px-4 items-center py-2 flex gap-2'
                text='Get Started'
                icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.43 5.93005L20.5 12.0001L14.43 18.0701" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M3.5 12H20.33" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                </svg>}

            />
        </header>
    )
}

export default Header
