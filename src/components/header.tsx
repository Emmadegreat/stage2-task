import { AiFillHome } from 'react-icons/ai'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { BsArrowRight } from "react-icons/bs";
import Button from '@/components/button'
import Image from 'next/image'
import Link from 'next/link'
import Menu from './menu'
import React from 'react'
import { TfiMenu } from "react-icons/tfi";

const Header: React.FC = () => {
    return (
        <>

        {/*<header className='bg-[#fff] fixed flex items-center justify-between sm:px-8 px-6  sm:bg-[#AF0101] text-white w-full h-[70px] z-[1000]'>
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

            </button>*



        </header> */}
        <div className='sm:hidden w-full py-2 flex justify-between items-center fixed bg-[#fff] h-[70px px-6'>
                <TfiMenu
                    className='text-[#707070] font-[600] text-[1.1rem]'
                />

                <svg width="63" height="18" viewBox="0 0 63 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.958 0.973V3.921H8.448V17H4.73V3.921H0.22V0.973H12.958ZM18.0099 5.593V17H14.5999V5.593H18.0099ZM18.4059 2.469C18.4059 2.74033 18.3509 2.997 18.2409 3.239C18.1309 3.47367 17.9806 3.68267 17.7899 3.866C17.5993 4.042 17.3756 4.185 17.1189 4.295C16.8696 4.39767 16.6019 4.449 16.3159 4.449C16.0373 4.449 15.7769 4.39767 15.5349 4.295C15.2929 4.185 15.0766 4.042 14.8859 3.866C14.7026 3.68267 14.5559 3.47367 14.4459 3.239C14.3433 2.997 14.2919 2.74033 14.2919 2.469C14.2919 2.19033 14.3433 1.93 14.4459 1.688C14.5559 1.446 14.7026 1.23333 14.8859 1.05C15.0766 0.866666 15.2929 0.723666 15.5349 0.620999C15.7769 0.518333 16.0373 0.467 16.3159 0.467C16.6019 0.467 16.8696 0.518333 17.1189 0.620999C17.3756 0.723666 17.5993 0.866666 17.7899 1.05C17.9806 1.23333 18.1309 1.446 18.2409 1.688C18.3509 1.93 18.4059 2.19033 18.4059 2.469ZM20.7634 17V5.593H22.8754C23.088 5.593 23.264 5.64067 23.4034 5.736C23.55 5.83133 23.6527 5.97433 23.7114 6.165L23.8984 6.781C24.089 6.583 24.287 6.40333 24.4924 6.242C24.6977 6.07333 24.9177 5.93033 25.1524 5.813C25.3944 5.68833 25.651 5.593 25.9224 5.527C26.201 5.45367 26.5054 5.417 26.8354 5.417C27.5247 5.417 28.093 5.59667 28.5404 5.956C28.995 6.308 29.3397 6.781 29.5744 7.375C29.765 7.023 29.996 6.72233 30.2674 6.473C30.546 6.22367 30.843 6.022 31.1584 5.868C31.481 5.714 31.8184 5.60033 32.1704 5.527C32.5297 5.45367 32.8854 5.417 33.2374 5.417C33.89 5.417 34.4694 5.516 34.9754 5.714C35.4814 5.90467 35.903 6.187 36.2404 6.561C36.585 6.92767 36.8454 7.38233 37.0214 7.925C37.1974 8.46033 37.2854 9.069 37.2854 9.751V17H33.8754V9.751C33.8754 8.57033 33.3694 7.98 32.3574 7.98C31.8954 7.98 31.5104 8.134 31.2024 8.442C30.9017 8.74267 30.7514 9.179 30.7514 9.751V17H27.3414V9.751C27.3414 9.09833 27.213 8.64 26.9564 8.376C26.6997 8.112 26.322 7.98 25.8234 7.98C25.5154 7.98 25.222 8.04967 24.9434 8.189C24.672 8.32833 24.4154 8.51533 24.1734 8.75V17H20.7634ZM39.7126 17V0.532999H43.1226V6.803C43.5479 6.385 44.0282 6.05133 44.5636 5.802C45.1062 5.54533 45.7406 5.417 46.4666 5.417C47.0606 5.417 47.6106 5.54533 48.1166 5.802C48.6226 6.05867 49.0589 6.43633 49.4256 6.935C49.7922 7.42633 50.0782 8.03133 50.2836 8.75C50.4962 9.46867 50.6026 10.2863 50.6026 11.203C50.6026 12.061 50.4816 12.853 50.2396 13.579C50.0049 14.305 49.6712 14.9357 49.2386 15.471C48.8132 16.0063 48.2999 16.4243 47.6986 16.725C47.1046 17.0257 46.4446 17.176 45.7186 17.176C45.3812 17.176 45.0769 17.143 44.8056 17.077C44.5416 17.011 44.2959 16.9193 44.0686 16.802C43.8486 16.6773 43.6432 16.5307 43.4526 16.362C43.2692 16.1933 43.0896 16.01 42.9136 15.812L42.7926 16.384C42.7412 16.6187 42.6459 16.78 42.5066 16.868C42.3746 16.956 42.1986 17 41.9786 17H39.7126ZM45.2786 7.98C45.0292 7.98 44.8019 8.00567 44.5966 8.057C44.3986 8.101 44.2116 8.167 44.0356 8.255C43.8669 8.343 43.7092 8.45667 43.5626 8.596C43.4159 8.728 43.2692 8.882 43.1226 9.058V13.898C43.3792 14.184 43.6579 14.3857 43.9586 14.503C44.2592 14.613 44.5746 14.668 44.9046 14.668C45.2199 14.668 45.5096 14.6057 45.7736 14.481C46.0376 14.3563 46.2649 14.1583 46.4556 13.887C46.6536 13.6083 46.8076 13.249 46.9176 12.809C47.0276 12.369 47.0826 11.8337 47.0826 11.203C47.0826 10.6017 47.0386 10.0957 46.9506 9.685C46.8626 9.27433 46.7379 8.94433 46.5766 8.695C46.4226 8.43833 46.2356 8.255 46.0156 8.145C45.7956 8.035 45.5499 7.98 45.2786 7.98ZM55.6643 5.593V12.831C55.6643 13.3957 55.7926 13.832 56.0493 14.14C56.306 14.448 56.6836 14.602 57.1823 14.602C57.5563 14.602 57.9046 14.525 58.2273 14.371C58.5573 14.217 58.8763 14.0007 59.1843 13.722V5.593H62.5943V17H60.4823C60.057 17 59.7783 16.8093 59.6463 16.428L59.4373 15.768C59.2173 15.9807 58.99 16.175 58.7553 16.351C58.5206 16.5197 58.2676 16.6663 57.9963 16.791C57.7323 16.9083 57.4463 17 57.1383 17.066C56.8303 17.1393 56.493 17.176 56.1263 17.176C55.503 17.176 54.9493 17.0697 54.4653 16.857C53.9886 16.637 53.5853 16.3327 53.2553 15.944C52.9253 15.5553 52.676 15.097 52.5073 14.569C52.3386 14.041 52.2543 13.4617 52.2543 12.831V5.593H55.6643Z" fill="black"/>
                </svg>


                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.994 8.62538H9.59517C9.25535 8.62538 8.97069 8.50271 8.7412 8.25737C8.51172 8.01202 8.39658 7.70875 8.39578 7.34755C8.39498 6.98635 8.51012 6.68307 8.7412 6.43773C8.97229 6.19239 9.25694 6.06971 9.59517 6.06971H11.994V3.51404C11.994 3.15199 12.1091 2.84872 12.3394 2.60423C12.5697 2.35973 12.8543 2.23706 13.1934 2.23621C13.5324 2.23536 13.8174 2.35803 14.0485 2.60423C14.2796 2.85042 14.3944 3.1537 14.3928 3.51404V6.06971H16.7916C17.1314 6.06971 17.4164 6.19239 17.6467 6.43773C17.877 6.68307 17.9917 6.98635 17.9909 7.34755C17.9901 7.70875 17.875 8.01245 17.6455 8.25864C17.416 8.50484 17.1314 8.62709 16.7916 8.62538H14.3928V11.1811C14.3928 11.5431 14.2776 11.8468 14.0473 12.0921C13.817 12.3375 13.5324 12.4597 13.1934 12.4589C12.8543 12.458 12.5697 12.3354 12.3394 12.0909C12.1091 11.8464 11.994 11.5431 11.994 11.1811V8.62538ZM7.19638 29.0707C6.53671 29.0707 5.9722 28.8207 5.50283 28.3206C5.03347 27.8206 4.79839 27.2187 4.79759 26.5151C4.79679 25.8114 5.03187 25.21 5.50283 24.7108C5.9738 24.2116 6.53831 23.9611 7.19638 23.9594C7.85445 23.9577 8.41937 24.2081 8.89113 24.7108C9.36289 25.2134 9.59757 25.8148 9.59517 26.5151C9.59278 27.2153 9.35809 27.8172 8.89113 28.3206C8.42416 28.8241 7.85925 29.0741 7.19638 29.0707ZM19.1903 29.0707C18.5307 29.0707 17.9662 28.8207 17.4968 28.3206C17.0274 27.8206 16.7924 27.2187 16.7916 26.5151C16.7908 25.8114 17.0258 25.21 17.4968 24.7108C17.9678 24.2116 18.5323 23.9611 19.1903 23.9594C19.8484 23.9577 20.4133 24.2081 20.8851 24.7108C21.3569 25.2134 21.5915 25.8148 21.5891 26.5151C21.5867 27.2153 21.3521 27.8172 20.8851 28.3206C20.4181 28.8241 19.8532 29.0741 19.1903 29.0707ZM2.3988 6.06971H1.1994C0.859571 6.06971 0.574915 5.94704 0.34543 5.7017C0.115946 5.45635 0.000803733 5.15308 4.13585e-06 4.79188C-0.000795462 4.43068 0.114347 4.12741 0.34543 3.88206C0.576514 3.63672 0.861171 3.51404 1.1994 3.51404H3.1784C3.39829 3.51404 3.60819 3.57794 3.80809 3.70572C4.00799 3.8335 4.15791 4.01453 4.25786 4.2488L9.02546 15.0146H17.4212L21.769 6.70863C21.869 6.49566 22.0089 6.33593 22.1888 6.22944C22.3687 6.12296 22.5686 6.06971 22.7885 6.06971C23.2483 6.06971 23.5933 6.27757 23.8236 6.6933C24.0539 7.10902 24.0587 7.52943 23.838 7.95452L19.5502 16.2285C19.3303 16.6544 19.0356 16.9845 18.6662 17.2188C18.2968 17.4531 17.8918 17.5702 17.4512 17.5702H8.51572L7.19638 20.1259H20.3897C20.7296 20.1259 21.0146 20.2486 21.2449 20.4939C21.4752 20.7393 21.5899 21.0425 21.5891 21.4037C21.5883 21.7649 21.4732 22.0686 21.2437 22.3148C21.0142 22.561 20.7296 22.6833 20.3897 22.6816H7.19638C6.29683 22.6816 5.61198 22.2663 5.14182 21.4357C4.67165 20.6051 4.65686 19.7638 5.09744 18.9119L6.71662 15.7813L2.3988 6.06971Z" fill="black"/>
                    <path d="M25 10C27.7614 10 30 7.76142 30 5C30 2.23858 27.7614 0 25 0C22.2386 0 20 2.23858 20 5C20 7.76142 22.2386 10 25 10Z" fill="#EBADAD"/>
                    <path d="M24.2226 3.8V3.385H25.1626V7H24.7026V3.8H24.2226Z" fill="black"/>
                </svg>

            </div>
         </>
    )
}

export default Header
