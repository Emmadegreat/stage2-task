import React,{ReactNode} from 'react'

interface ButtonProp{
    className: string;
    text: string;
    icon?: ReactNode;
}
const Button: React.FC<ButtonProp> = ({className, text, icon}) => {
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