import React, { useState } from 'react'
import { Tracing } from 'trace_events'
type AuthUser ={
    name :string,
    age : string

}
const Login = () => {
    const [name,setName] = useState<AuthUser | null>(null)
    const btnlogin= (e:React.MouseEvent<HTMLButtonElement>)=>{
        e.preventDefault()
        console.log('aa');
        
            setName({
                name:'manhducvu',
                age:'20'
            })
    }
    const btnlogout= (e:React.MouseEvent<HTMLButtonElement>)=>{
        setName(null)
    }
    return (
        <div>
            <button onClick={btnlogin}>login</button>
            <button onClick={btnlogout}>logout</button>
            <h2>{name ?.name}</h2>
        </div>
    )
}

export default Login
