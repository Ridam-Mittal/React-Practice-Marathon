import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('');

  const inputref = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*-_+=~"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length)
      pass += str.charAt(char)
    }
    setPassword(pass)
  }, [length, numberAllowed, charAllowed, setPassword])


  const copypasswordtoClip = useCallback(()=>{
    inputref.current?.select(); 
    inputref.current?.setSelectionRange(0, 3);
    window.navigator.clipboard.writeText(password);
  }, [password])


  
  useEffect(()=> {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <>
      <div className='max-w-md mx-auto my-28 shadow-md rounded-lg px-4 py-3 my-8 text-yellow-300 border-white border bg-gray-900'>
        <h1 className='text-center text-white text-3xl my-2 mb-7'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4 border border-white'>
          <input
            type='text'
            value={password}
            className='outline-none w-full py-1 px-3 text-black'
            placeholder='Password'
            readOnly
            ref={inputref}
          />
          <button onClick={copypasswordtoClip}
          className='outline-none bg-green-700 text-white px-3 py-1.5 shrink-0'>Copy</button>
        </div>
        <div className='flex text-md gap-x-12'>
          <div className='flex items-center gap-x-1 flex-col'>
            <input 
              type='range'
              min ={8}
              max ={100}
              value={length}
              className='cursor-pointer'
              onChange={(e)=> {setLength(e.target.value)}}
            />
            <label >Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-2'>
            <input 
            type="checkbox"
            defaultChecked={numberAllowed}
            id='numberInput'
            onChange={()=> {
              setNumberAllowed((prev)=> !prev);
            }} 
            />
            <label>Numbers</label>
          </div>
          <div className='flex items-center gap-x-2'>
            <input 
            type="checkbox"
            defaultChecked={charAllowed}
            id='charInput'
            onChange={()=> {
              setCharAllowed((prev)=> (!prev));
            }} 
            />
            <label>Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App







/*

Component Renders:
React executes the component function, including any logic inside it.
During this process:
useCallback evaluates whether to return the same function reference or create a new one.
State and props are read to determine how the UI should look.
React Commits Changes to the DOM:
React updates the UI based on the render output.
useEffect Runs:
After the DOM is updated, useEffect runs its callback function.

*/

//  👉 React renders the component → Decides what to update → Updates the UI → Runs useEffect if needed.