import React from 'react'
import { useContext } from 'react';
import { Appcontext } from './App';


function Login() {

    const {setUsername} = useContext(Appcontext)
    return (
        <div>
            <input onChange={(event)=>{
                setUsername(event.target.value);
            }}/>
        </div>
    )
}

export default Login
