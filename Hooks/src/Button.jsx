import React from 'react'
import { useImperativeHandle } from 'react';
import { useState, forwardRef } from 'react'


// useImperative returns an object containing actions to attach
const Button= forwardRef((props, ref)=>{
    const [toggle, setToggle] = useState(false);

    useImperativeHandle(ref, ()=> ({
       altertoggle(){
        setToggle(!toggle);
       }, 
    }));
    return (
        <>
            <button className='border border-black bg-red-800 text-white p-2 rounded-lg'>Button from Child</button>
            {toggle && <span>Toggle</span>}
        </>
    )
})

export default Button
