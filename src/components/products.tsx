import React, { ChangeEvent, useState } from 'react'

import { BsArrowRight } from 'react-icons/bs'
import Button from './button'
import ProductCard from './productcard'
import { ProductList } from '@/productlist'

interface productProps1{
    id: number;
    name: string;
    imgUrl: string;
    price: string;
}
const Products = () => {

    const [search, setSearch] = useState("");

    const findProducts = ProductList.filter(product => {
        return product.name.toLowerCase().includes(search.toLowerCase());
    })

    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    }

    const ScrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
       })
    }


    return (
        <>
            <div>
                <div className='bg-[#FFECD0] text-18px rounded flex-col items-center sm:py-10 pt-10 pb-6 px-8'>
                    <h2 className='font-[Poppins] text-[#4E2020]  text-center font-[600] mb-4 text-[26px] leading-[40px]'>Our Popular Products</h2>
                    <p className='sm:block hidden text-sm sm:text-[16px] leading-[24px] text-[#909090] text-center text-[Poppins]'>
                        Explore Our Collection of Top-Rated Gadgets Designed to
                    </p>
                    <p className='sm:block hidden text-sm sm:text-[16px] leading-[24px] text-[#909090] text-center text-[Poppins]'> Enhance Your Productivity and Entertainment</p>
                    <p className='sm:hidden block text-sm sm:text-[16px] leading-[24px] text-[#909090] text-center text-[Poppins]'>
                        Explore Our Collection of Top-Rated Gadgets Designed to Enhance Your Productivity and Entertainment
                    </p>

                    <div className="relative top-4 flex justify-center">
                        <div className="relative">
                            <svg
                                className='absolute inset-y-0 left-3 top-[0.7rem] flex items-center text-[#BABABA]'
                                width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.16782 16.181C9.94158 16.181 11.5773 15.6128 12.9156 14.666L17.9501 19.6528C18.1838 19.8843 18.4918 20 18.821 20C19.5114 20 20 19.474 20 18.8006C20 18.485 19.8938 18.1799 19.6601 17.959L14.6575 12.9932C15.709 11.6255 16.3356 9.93161 16.3356 8.09048C16.3356 3.64019 12.6606 0 8.16782 0C3.68561 0 0 3.62967 0 8.09048C0 12.5408 3.67499 16.181 8.16782 16.181ZM8.16782 14.4345C4.66277 14.4345 1.76314 11.5623 1.76314 8.09048C1.76314 4.61862 4.66277 1.74645 8.16782 1.74645C11.6729 1.74645 14.5725 4.61862 14.5725 8.09048C14.5725 11.5623 11.6729 14.4345 8.16782 14.4345Z" fill="#909090"/>
                            </svg>
                            <input
                                type="search"
                                name="search"
                                value={search}
                                onChange={handleSearch}
                                placeholder="Search for Products"
                                className='sm:w-[410px] w-full max-w-[300px] h-[42px] bg-[#fff] text-start text-[1rem] pl-9 pr-3 py-1 border
                                border-transparent focus:outline-none focus:ring-0 focus:ring-[#BABABA]'
                            />
                        </div>
                    </div>

                </div>

                {/*<div className='sm:hidden flex items-center text-center flex-col'>

                    <p className="text-[#AD5B5B] font-[400] text-[18px] leading-[25px] mt-4 font-[inter]">
                        Seamless Shopping for the discerning <br/> customer. Fast finds & instant <br/> gratification. Shop Happy!
                    </p>
                    <Button
                    className='mb-12 flex bg-[#EBADAD] hover:bg-[#AF0101] w-[280px] justify-center hover:text-[#fff]  text-center text-[#4E2020] rounded font-[500] px-6 mt-7 items-center py-2 gap-2'
                    text='Shop Now'
                    icon={

                        <BsArrowRight className='font-[500] text-[1.3rem]'/>
                    }
                />
                </div>*/}
            </div >

            <div className="bg-[#F4F4F480] pt-10 md:px-12 px-7">



                <h2 className='hidden font-[Poppins] text-[#4E2020] font-bold text-center my-6 text-[25px] leading-[50px]'>Our Popular Products</h2>
                <div className=' grid grid-cols-1 place-items-center sm:grid-cols-2
                    lg:grid-cols-3 xl:grid-cols-3 xl:gap-5 mb-[10rem] gap-y-10 gap-x-2'>
                    {findProducts.length > 0 ? (

                        findProducts.map((item) => (
                            <ProductCard
                                key={item.id}
                                imgUrl={item.imgUrl}
                                name={item.name}
                                price={item.price}

                            />

                        ))
                    ): (
                        <p className="text-center">Woops 🤭 ! product not available</p>
                    )}

                </div>
                <div className='mb-[5rem] m-auto flex justify-center items-center'>
                    <button onClick={ScrollUp}
                        className='font-[500] block sm:hidden w-[200px] p-2 mt-3 text-sm text-[#000] text-center rounded
                        border-[1px] border-[#B2A9A9]'>
                        Go Up
                    </button>
                </div>
            </div>
        </>
    )
}

export default Products