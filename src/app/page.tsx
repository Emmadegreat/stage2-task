'use client';
import Products from '@/components/products'
import Hero from "@/components/hero"
import Popularproducts from "@/components/popularproducts";
import Link from 'next/link'
import React from 'react'
const page = () => {
  return (
    <main className="flex flex-col pt-12">
      <Hero />
      {/*<Popularproducts/>*/}
      <Products/>
    </main>
  )
}

export default page
