```jsx


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

```

#### why couldnt we use useMemo here ?

#### The difference between useCallback and useMemo lies in what they are designed to memoize:

- #### useCallback: Memoizes a function definition, ensuring that the function reference remains the same across re-renders unless its dependencies change. It is specifically useful when you need to pass a function as a prop to child components and avoid unnecessary re-renders of those components.

- #### useMemo: Memoizes the result of a computation (a value) to avoid recomputing it unnecessarily on every render. It is used when you have expensive computations or need to cache computed values.



#### Why useCallback is Appropriate Here
#### In your code:

`returnComment is a function that is passed as a prop to the Child component.`
`Using useCallback ensures that the returnComment function reference remains the same unless the data dependency changes.`
`This avoids re-rendering the Child component unnecessarily when toggle changes.`


#### Why useMemo Wouldn't Work
#### If you used useMemo here, you would end up memoizing the result of the function call rather than the function itself. For example:

``` jsx

const returnComment = useMemo(() => {
  return (name) => data + name;
}, [data]);

```
### This creates a new function each time data changes, but it doesn't prevent Child from re-rendering when returnComment is passed as a prop because the function reference changes.
#### useMemo is not meant to keep function references stable—it’s designed for caching computation results.