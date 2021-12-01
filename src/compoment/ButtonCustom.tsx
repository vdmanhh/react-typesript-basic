import React from 'react'
type ButtonProps ={
    children : string
} & Omit<React.ComponentProps<'button'>,'children'>
const ButtonCustom = ({children,...rest}:ButtonProps) => {
    return (
        <div>
            <button {...rest}>
                    {children}
            </button>
        </div>
    )
}

export default ButtonCustom
