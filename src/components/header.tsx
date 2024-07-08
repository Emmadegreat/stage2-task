
"use client"

import React, { useState } from 'react'

import { BsArrowRight } from "react-icons/bs";
import Button from '@/components/button'
import Image from 'next/image'
import Link from 'next/link'
import Menu from './menu'
import { TfiMenu } from "react-icons/tfi";
import logo from "@/assest/images/logo.jpg"
import logo2 from '@/assest/images/logo2.png'

const Header: React.FC = () => {


    const [show, setShow] = useState<boolean>(false);

    const Showbtn = () => setShow(true);
    const Closebtn = () => setShow(false);


    return (
        <>

        <header className='bg-[#fff] fixed sm:flex hidden items-center justify-between sm:px-8 px-6  sm:bg-[#AF0101] text-white w-full h-[70px] z-[1000]'>
            <Link href="/">
                <Image
                    alt='alt'
                    src="https://res.cloudinary.com/dbnxbly1r/image/upload/v1720269412/timbu-shop/Group_1171275219_d4mkt4.svg"
                    className='sm:block hidden'
                    width="70"
                    height="70"
                />
            </Link>
            <div className='sm:flex hidden justify-between'>

                <Menu title="Home" address="/" className="hover:text-[#ffecd0] links" />
                <Menu title="Shop" address="/shop" className="mx-4 hover:text-[#ffecd0] links" />
                <Menu title="About Us" address="/about" className="mx-4 hover:text-[#ffecd0] links" />
                <Menu title="Contact" address="contact" className="mr-4 hover:text-[#ffecd0] links" />
            </div>
            <button
                className='hover:text-[#ad5b5b] rounded bg-[#ad5b5b] px-4 items-center py-2 hidden sm:flex gap-2 hover:bg-[#F5E5FF]'
            >
                Get Started
                <BsArrowRight className='font-[500] text-[1.3rem]' />

            </button>



        </header>
        <div className='navbar sm:hidden w-full py-4 flex justify-between items-center fixed bg-[#fff] h-[70px px-6'>
                <TfiMenu
                    onClick={Showbtn}
                    className='text-[#707070] font-[600] text-[1.2rem]'
                />

                <Image
                    src={logo2}
                    alt="data"
                    className=''
                />


                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.994 8.62538H9.59517C9.25535 8.62538 8.97069 8.50271 8.7412 8.25737C8.51172 8.01202 8.39658 7.70875 8.39578 7.34755C8.39498 6.98635 8.51012 6.68307 8.7412 6.43773C8.97229 6.19239 9.25694 6.06971 9.59517 6.06971H11.994V3.51404C11.994 3.15199 12.1091 2.84872 12.3394 2.60423C12.5697 2.35973 12.8543 2.23706 13.1934 2.23621C13.5324 2.23536 13.8174 2.35803 14.0485 2.60423C14.2796 2.85042 14.3944 3.1537 14.3928 3.51404V6.06971H16.7916C17.1314 6.06971 17.4164 6.19239 17.6467 6.43773C17.877 6.68307 17.9917 6.98635 17.9909 7.34755C17.9901 7.70875 17.875 8.01245 17.6455 8.25864C17.416 8.50484 17.1314 8.62709 16.7916 8.62538H14.3928V11.1811C14.3928 11.5431 14.2776 11.8468 14.0473 12.0921C13.817 12.3375 13.5324 12.4597 13.1934 12.4589C12.8543 12.458 12.5697 12.3354 12.3394 12.0909C12.1091 11.8464 11.994 11.5431 11.994 11.1811V8.62538ZM7.19638 29.0707C6.53671 29.0707 5.9722 28.8207 5.50283 28.3206C5.03347 27.8206 4.79839 27.2187 4.79759 26.5151C4.79679 25.8114 5.03187 25.21 5.50283 24.7108C5.9738 24.2116 6.53831 23.9611 7.19638 23.9594C7.85445 23.9577 8.41937 24.2081 8.89113 24.7108C9.36289 25.2134 9.59757 25.8148 9.59517 26.5151C9.59278 27.2153 9.35809 27.8172 8.89113 28.3206C8.42416 28.8241 7.85925 29.0741 7.19638 29.0707ZM19.1903 29.0707C18.5307 29.0707 17.9662 28.8207 17.4968 28.3206C17.0274 27.8206 16.7924 27.2187 16.7916 26.5151C16.7908 25.8114 17.0258 25.21 17.4968 24.7108C17.9678 24.2116 18.5323 23.9611 19.1903 23.9594C19.8484 23.9577 20.4133 24.2081 20.8851 24.7108C21.3569 25.2134 21.5915 25.8148 21.5891 26.5151C21.5867 27.2153 21.3521 27.8172 20.8851 28.3206C20.4181 28.8241 19.8532 29.0741 19.1903 29.0707ZM2.3988 6.06971H1.1994C0.859571 6.06971 0.574915 5.94704 0.34543 5.7017C0.115946 5.45635 0.000803733 5.15308 4.13585e-06 4.79188C-0.000795462 4.43068 0.114347 4.12741 0.34543 3.88206C0.576514 3.63672 0.861171 3.51404 1.1994 3.51404H3.1784C3.39829 3.51404 3.60819 3.57794 3.80809 3.70572C4.00799 3.8335 4.15791 4.01453 4.25786 4.2488L9.02546 15.0146H17.4212L21.769 6.70863C21.869 6.49566 22.0089 6.33593 22.1888 6.22944C22.3687 6.12296 22.5686 6.06971 22.7885 6.06971C23.2483 6.06971 23.5933 6.27757 23.8236 6.6933C24.0539 7.10902 24.0587 7.52943 23.838 7.95452L19.5502 16.2285C19.3303 16.6544 19.0356 16.9845 18.6662 17.2188C18.2968 17.4531 17.8918 17.5702 17.4512 17.5702H8.51572L7.19638 20.1259H20.3897C20.7296 20.1259 21.0146 20.2486 21.2449 20.4939C21.4752 20.7393 21.5899 21.0425 21.5891 21.4037C21.5883 21.7649 21.4732 22.0686 21.2437 22.3148C21.0142 22.561 20.7296 22.6833 20.3897 22.6816H7.19638C6.29683 22.6816 5.61198 22.2663 5.14182 21.4357C4.67165 20.6051 4.65686 19.7638 5.09744 18.9119L6.71662 15.7813L2.3988 6.06971Z" fill="black"/>
                    <path d="M25 10C27.7614 10 30 7.76142 30 5C30 2.23858 27.7614 0 25 0C22.2386 0 20 2.23858 20 5C20 7.76142 22.2386 10 25 10Z" fill="#EBADAD"/>
                    <path d="M24.2226 3.8V3.385H25.1626V7H24.7026V3.8H24.2226Z" fill="black"/>
                </svg>

                <ul className={show ? "nav-menu active" : "nav-menu"}>
                    <div className='toggler'>

                        <div className='basis-[95%]'>
                            <Link href="/" className=''>
                                <Image
                                    src={logo}
                                    className='cursor-pointer h-[20px w-[20px]'
                                    alt="logo"
                                />
                            </Link>
                        </div>
                        <div className='basis-[5%] mr-3'>
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none"
                                onClick={Closebtn}
                                className='font-[600] '
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M18 6L6 18" stroke="#020202" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M6 6L18 18" stroke="#020202" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                    </div>
                    <div className='flex flex-col mt-1'>

                        <Menu title="Home" address="/" className="my-6" />
                        <Menu title="Products" address="/" className="" />
                        <Menu title="Contact" address="/" className="my-6" />
                    </div>
                </ul>

            </div>

         </>
    )
}

export default Header
