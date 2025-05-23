import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {App} from './App.jsx'
import React from 'react'


// const reactElement = {
//   type: 'a',
//   props:{
//       href: 'https://google.com',
//       target: '_blank'
//   },
//   children: 'Click me to visit google'
// }


// function Myapp(){
//   return(
//     <button>CLick me</button>
//   )
// }


const greet = 'Hello';

const reactelement = (
  <h1> Hello, {greet} </h1>               // variable inject   (evaluated expression)
)

const anotherElement = React.createElement(
    'a',
    {href : 'https://google.com', target : '_blank'},
    'Click me to open google',
    greet
)

createRoot(document.getElementById('root')).render(
    anotherElement
)


