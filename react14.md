### Custom Hooks 

- #### No, it's not necessary for a custom hook in React to return an array with two items ([value, setValue]) like the useState or useReducer hooks. Custom hooks are just reusable JavaScript functions that use React hooks internally. They can return anything—an object, a function, an array, or even nothing, depending on what the hook is supposed to do.


```jsx
import { useEffect, useState } from "react";


function useCurrencyInfo(currency){
    const [data, setData] = useState({})

    useEffect(()=>{
        fetch(https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json
)
        .then((response)=> response.json())
        .then((res)=> setData(res[currency]))  
    }, [currency])

    return data;
}

export default useCurrencyInfo; 
```

#### React's primary focus is rendering components and managing state. However, interacting with external systems (like APIs) or performing asynchronous operations is considered a side effect. These side effects should not be performed directly during rendering because they may block or interfere with React's reconciliation process.

#### `useEffect is designed to manage such side effects safely.`


#### Without useEffect, the fetch logic would run every time the function is called, which is undesirable in React because:

- #### It leads to redundant API calls.
- #### It can cause performance issues or even infinite render loops.
- #### It makes your application less efficient and harder to debug.
