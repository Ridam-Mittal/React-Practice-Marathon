// UseState Hook


// Ex-1
/*
import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  function add(){
    setCount(count+1);
  }

  return (
    <div className='h-screen bg-red-300 flex gap-8 items-center border justify-center'>
      <h1 className='text-4xl font-bold text-black'>{count}</h1>
      <button className='bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700' onClick={add}>
        Increment
      </button>
    </div>
  )
}

export default App
*/


// Ex-2
/*

import { useState } from 'react'
import React from 'react'

function App() {
  const [inputvalue, setInputvalue] = useState('');

  function handleinput(event){
    const value = event.target.value;
    setInputvalue(value);
  }
  return (
    <div>
      <input onChange={handleinput} className='m-4 p-2 bg-blue-950 text-white border'placeholder='enter something..'/>
      {inputvalue}
    </div>
  )
}

export default App
*/



// UseReducer Hook

// In case we are dealing with a situation that single event handle multiple actions so we have to use multiple useState for it instead we can use useReducer hook which will handle multiple actions


/*
import React from 'react'
import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0);
  const [showtext, setShowtext] = useState(1);

  function handleclick(){
    setCount(count+1);
    setShowtext(!showtext);
  }
  return (
    <div className='border-red-600  border items-center flex flex-col m-4 w-80 gap-5 bg-slate-800 rounded-lg h-40 p-2'>
      <h1 className='text-white'>{count}</h1>
      <button className='border border-blue-50 bg-blue-950 text-white text-lg p-2 px-5 rounded-lg'
      onClick={handleclick}
      >Click here
      </button>
      {showtext && <p className='text-white'>This is a text</p>}
    </div>
  )
}

export default App
*/


/*

import React from 'react'
import { useReducer } from 'react';
import { useState } from 'react'

function reducer(state, action){
  switch(action.type){
    case 'Increment':
      return {count: state.count + 1, showtext: state.showtext};
    case 'toggleshowtext':
      return {count: state.count, showtext: !(state.showtext)};
    default:
      return state;
  }
}



function App() {
  const [state, dispatch] = useReducer(reducer, {count: 0, showtext: 1})

  function handleclick(){
    dispatch({type: 'Increment'});
    dispatch({type: 'toggleshowtext'})
  }
  return (
    <div className='border-red-600  border items-center flex flex-col m-4 w-80 gap-5 bg-slate-800 rounded-lg h-40 p-2'>
      <h1 className='text-white'>{state.count}</h1>
      <button className='border border-blue-50 bg-blue-950 text-white text-lg p-2 px-6 rounded-lg'
      onClick={handleclick}
      >Click here
      </button>
      {state.showtext && <p className='text-white'>This is a text</p>}
    </div>
  )
}

export default App

*/


// useEffect hook

/*

import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios';
function App() {
  const [data, setData] = useState('');
  const [count, setCount] = useState(100);

  useEffect(()=>{
    // console.log('Hello World');
    axios.get('https://jsonplaceholder.typicode.com/comments').then((response)=>{
      // console.log(response.data); 
      setData(response.data[0].email);
      console.log('set');
    })
  })


  // here 'set' is console logged 2 times because useEffect hook starts to operate whenever page first renders and then when the state is changed
  // if no specific state is passed then it will operate on every state change as well like here in this case it operate on both state changes 
  // if pass [] then it will not be affected by any state change or we can pass the states on changing of which we want it to operate specifically in [data]



  return (
    <div className='w-[400px] text-lg border absolute left-40 top-40 bg-yellow-300 p-5 rounded-md border-red-900'>
      Hello world
      <p>email : {data}</p>
      <button className='border border-red-800 bg-red-400 p-2 rounded-xl m-2' onClick={()=> setCount(count+1)}>click me: {count}</button>
    </div>
  )
}

export default App

*/



// useRef hook


// ex-1 
/*

import React, { useRef, useState } from 'react';

function Counter() {
  const countRef = useRef(0); // Ref to hold the count
  const [render, setRender] = useState(0); // For showing renders

  const increment = () => {
    countRef.current += 1; // Update the count in the ref
    console.log('Current Count:', countRef.current);
  };

  return (
    <div className='border bg-slate-900 text-white w-40 h-50 mx-7 my-7 flex flex-col items-center p-4 gap-4'>
      <button className='border border-white p-2 text-lg' onClick={increment}>Increment Count</button>
      <button className='border border-white p-2 text-lg' onClick={() => setRender((r) => r + 1)}>Re-render</button>
      <p>Count stored in useRef: {countRef.current}</p>
      <p>Re-renders: {render}</p>
    </div>
  );
}

export default Counter;

*/


// ex-2
/*

import React, { useRef, useEffect } from 'react';

function App() {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus(); // Directly focus the input on mount
  }, []);

  return <input className='border border-black m-5' placeholder="Type here..."  ref={inputRef}/>;
}

export default App

*/


// useLayoutEffect hook

/*

import React from 'react'
import { useRef, useLayoutEffect, useEffect } from 'react';

function App() {
  const inputref = useRef(null);

  useLayoutEffect(()=>{
    console.log(inputref.current.value);
  }, []);

  useEffect(()=>{
    inputref.current.value = 'Hello';
  }, []);

  return (
    <div>
      <input readOnly ref={inputref} value='PEDRO' style={{width: 100, height: 200, border: 'solid black', margin: 50, padding:10, borderRadius: 10, backgroundColor: 'darkblue', color: 'white'}}/>
    </div>
  )
}

export default App

*/

// also used for handling effects but is operated before even DOM gets painted that's why even whem useEffect changed the value to Hello on rendering. useLayoutEffect still console logged Pedro which was set before



// useImperativeHandle hook

/*

import React from 'react'
import Button from './Button'
import { useRef } from 'react'

function App() {
  const buttonRef = useRef(null);

  return (
    <div className='border p-6 flex flex-col items-center gap-3 bg-green-300 m-20 border-black w-48'>
      <button onClick={()=> { buttonRef.current.altertoggle()}} className='border border-black bg-red-800 text-white p-2 rounded-lg'>Button from Parent</button>
      <Button ref={buttonRef}/>
    </div>
  )
}

export default App

*/


// useContext hook
/*

import React from 'react'
import { useState, createContext } from 'react'
import User from './User';
import Login from './Login';


export const Appcontext = createContext(null);

function App() {
  const [username, setUsername] = useState('');
  return (
    <div className='border m-10 p-4 bg-emerald-600'>
      <Appcontext.Provider value={{username, setUsername}}>
      <Login/>
      <User/>
      </Appcontext.Provider>
    </div>
  )
}

export default App

*/


// useMemo hook

/*

import axios from "axios";
import { useEffect, useState, useMemo } from "react";

export default function MemoTutorial() {
  const [data, setData] = useState(null);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setData(response.data);
      });
  }, []);

  const findLongestName = (comments) => {
    if (!comments) return null;

    let longestName = "";
    for (let i = 0; i < comments.length; i++) {
      let currentName = comments[i].name;
      if (currentName.length > longestName.length) {
        longestName = currentName;
      }
    }

    console.log("THIS WAS COMPUTED");

    return longestName;
  };

  const getLongestName = useMemo(() => findLongestName(data), [toggle]);

  return (
    <div className="App">
      <div> {getLongestName} </div>

      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        {" "}
        Toggle
      </button>
      {toggle && <h1> toggle </h1>}
    </div>
  );
}

*/


// useCallback hook

/*

import axios from "axios";
import { useCallback, useState } from "react";
import Child from "./Child";

export default function CallBackTutorial() {
  const [toggle, setToggle] = useState(false);
  const [data, setData] = useState("Yo, pls sub to the channel!");

  const returnComment = useCallback(
    (name) => {
      return data + name;
    },
    [data]
  );

  return (
    <div className="App">
      <Child returnComment={returnComment} />

      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        {" "}
        Toggle
      </button>
      {toggle && <h1> toggle </h1>}
    </div>
  );
}

*/