import { AiFillHome } from 'react-icons/ai'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { BsArrowRight } from "react-icons/bs";
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

                <Menu title="Home" address="/" className="hover:text-[#ffecd0] links" />
                <Menu title="Shop" address="/shop" className="mx-4 hover:text-[#ffecd0] links" />
                <Menu title="About Us" address="/about" className="mx-4 hover:text-[#ffecd0] links" />
                <Menu title="Contact" address="contact" className="mr-4 hover:text-[#ffecd0] links" />
            </div>
            <button
                className='hover:text-[#ad5b5b] rounded bg-[#ad5b5b] px-4 items-center py-2 flex gap-2 hover:bg-[#F5E5FF]'
            >
                Get Started
                <BsArrowRight className='font-[500] text-[1.3rem]'/>
            </button>

        </header>
    )
}

export default Header
