import React, {FC} from 'react'

interface buttonProps{
    className: string,
    text: string,
    icon: string
}

const Button:FC<buttonProps> = ({className, text, icon}) => {
    return (
        <div>
            <button className={className}>
                {text}
                {icon}
            </button>
        </div>
    )
}

export default Button