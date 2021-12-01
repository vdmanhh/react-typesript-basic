import React from 'react'
type CheckProps ={
    name :'manh'|'linh',
    age?:string
}
const Code = (props : CheckProps) => {
    return (
        <div>
                {props.age}
        </div>
    )
}

export default Code