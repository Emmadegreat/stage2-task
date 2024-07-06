import React from 'react'
import { ProductList } from '@/productlist'
import ProductCard from './productcard'


const Products = () => {
    return (
        <div className="bg-[#F4F4F480] pt-8 md:px-12 px-7">
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