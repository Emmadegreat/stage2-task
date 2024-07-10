'use client'

import React, { FC, useEffect, useState } from 'react'

import { FaArrowLeftLong } from "react-icons/fa6";
import Link from 'next/link'
import ProductCard from '@/components/productcard';
import { ProductList } from '@/productlist';

const MoreProducts: React.FC = () => {
    const [ismobile, setIsmobile] = useState<boolean>(false)

    const ScrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
       })
    }

    useEffect(() => {
        const handleResize = () => {
          setIsmobile(window.innerWidth <= 640);
        }
        handleResize();
        window.addEventListener("resize", handleResize);

        return()=>window.removeEventListener("resize", handleResize);

    }, [])

    const RemainProducts = ProductList.slice(6, 15)

    return (
        <>
            <div className='pb-[2rem] pt-[3rem] '>
                <div className='h-[40px]'></div>
                <Link href="/" className='font-[500] block sm:hidden w-[100px] p-2 ml-[4rem] mt-3 text-sm text-[#000] text-center rounded
                   '>
                    <FaArrowLeftLong className='font-[600] text-[1.2rem] '/>
                </Link>
                <h2 className='text-center font-[Poppins]  text-[#4E2020] font-bold text-[25px] leading-[40px]'>
                View More Products
                </h2>
            </div>
            <div className='px-8 py-4 grid grid-cols-1 place-items-center sm:grid-cols-2
                    lg:grid-cols-3 xl:grid-cols-3 xl:gap-5 mb-[10rem] gap-y-10 gap-x-2'>
                {ismobile && RemainProducts.length > 0 ? (
                    RemainProducts.map((item) => (
                        <ProductCard
                            key={item.id}
                            imgUrl={item.imgUrl}
                            name={item.name}
                            price={item.price}
                        />
                    ))
                ) :
                    ProductList.length > 0 ? (

                        ProductList.slice(6,15).map((item) => (
                            <ProductCard
                                key={item.id}
                                imgUrl={item.imgUrl}
                                name={item.name}
                                price={item.price}

                            />

                        ))
                    ) : (
                    <p className="m-auto text-center">Woops 🤭 ! product not available</p>
                )}
            </div>
            <div className='mb-[5rem] m-auto flex justify-center items-center'>
                    <button onClick={ScrollUp}
                        className='font-[500] block sm:hidden w-[200px] p-2 text-sm text-[#000] text-center rounded
                        border-[1px] border-[#B2A9A9]'>
                        Go Up
                    </button>
                </div>
        </>
    );
};

export default MoreProducts