import ProductCard from './productcard'
import { ProductList } from '@/productlist'
import React from 'react'

const Products = () => {
    return (
        <div className="bg-[#F4F4F480] pt-8 md:px-12 px-7">
            <h2 className='sm:hidden block font-[Poppins] text-[#4E2020] font-bold text-center my-6 text-[25px] leading-[50px]'>Our Popular Products</h2>
            <div className=' grid grid-cols-1 place-items-center sm:grid-cols-2
                lg:grid-cols-3 xl:grid-cols-3 xl:gap-5 mb-[10rem] gap-y-10 gap-x-2'>
                {
                    ProductList.map((item) => (
                        <ProductCard
                            key={item.id}
                            imgUrl={item.imgUrl}
                            name={item.name}
                            price={item.price}

                        />

                    ))
                }

            </div>
        </div>
    )
}

export default Products