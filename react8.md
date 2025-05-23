### useRef Hook

##### Example usecase-1 of useRef hook 

```javascript


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
```


### 1. What is Re-render?
- A re-render happens in React when:

- State changes: Any change to a useState variable triggers React to re-render the component.
- Props change: If a component receives new props, React re-renders it.
- Parent component re-renders: If a parent re-renders, child components also re-render unless optimized with techniques like React.memo.

### In this code:
- Clicking the "Re-render" button triggers a re-render because it updates the render state using setRender.


### 2. useRef vs useState in Re-renders
useRef:

- It stores a value (like countRef.current) that persists between renders.
Changing countRef.current does NOT trigger a re-render of the component. It quietly updates the value in the background.
useState:

- It also stores a value (like render).
But changing a useState value triggers a re-render of the component. React will re-run the component function and update the UI based on the new state.




#### **5. Why is useRef Useful?**
- #####  useRef is ideal when you need to store a value that changes but don't want to re-render the component every time it changes. 
- ##### In this example: countRef is used to track a value that doesn't need to trigger UI updates. render (state) is used to explicitly control and show re-renders. 



## useRef and the Real DOM:

#### When you use useRef to reference a DOM element (e.g., an input field), it gives you a direct pointer to the real DOM element.
- #### This does not involve React's Virtual DOM but is necessary when you need to perform tasks that React doesn’t handle, such as:
- Focusing an input.
- Manually scrolling an element.
- Measuring dimensions of an element.
- useRef is not replacing React’s Virtual DOM system; it’s a way to interact with the real DOM in a controlled manner when needed.