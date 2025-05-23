```javascript
import React from 'react'
import { useEffect } from 'react'

function App() {
  useEffect(()=>{
    console.log('Hello World');
  })
  return (
    <></>
  )
}

export default App
```

### why does it printed twice ?

- #### The reason why console.log('Hello World') is printed twice in your useEffect is likely due to React's Strict Mode during development.



- When running your app in development mode, React’s Strict Mode intentionally double invokes certain lifecycle methods and effects (like useEffect) to help identify potential issues in your code. This behavior does not happen in production builds.

- This double invocation occurs in the following scenarios:

- Initial render: The useEffect will run on the first render of the component.
- Re-run of the effect: React will intentionally re-run the effect after the component has been cleaned up. This helps identify side effects that might cause bugs or unexpected behavior when components are unmounted and remounted.


### Why does this happen?
- #### React Strict Mode does this as a safety mechanism to detect and alert developers about side effects that might cause problems, such as memory leaks, uncleaned resources, or unnecessary updates. It’s designed to help ensure that your app works correctly even when components are unmounted and remounted during updates.


