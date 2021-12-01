import React from 'react'
type CheckProps ={
    children : React.ReactNode
}
const Example = (props : CheckProps) => {
    return (
        <div>
                {props.children}
        </div>
    )
}

export default Example
