import Link from 'next/link'
import React from 'react'

const Menu = ({title, address, className}) => {
    return (
        <Link href={address} className={className}>
            <p>{title}</p>

        </Link>
    )
}

export default Menu
