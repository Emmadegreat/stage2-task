'use client';

import React, { useEffect } from 'react'

import Link from 'next/link';

const Error = () => {

    return (
        <div className='text-center h-[80vh] pt-[6rem]'>
            <h1 className='font-[500] text-[1.2rem] mb-8'>Woops !!! something went wrong, try again later</h1>
            <Link className="border-[#AF0101] border-[1px] rounded  p-2 text-center" href="/">Back to Home</Link>
        </div>
    )
}

export default Error