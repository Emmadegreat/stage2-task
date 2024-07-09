import Link from 'next/link'
import React from 'react'

const Menu = ({title, address, className, onClick}) => {
    return (
        <Link href={address} className={className} onClick={onClick} >
            <p>{title}</p>

        </Link>
    )
}

export default Menu
