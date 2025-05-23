### context API

#### context API doesn't exist outside of React. It is only associated to React to solve the problem of `prop drilling`

### What is Prop Drilling?
- #### Prop drilling occurs when you have to pass props down multiple levels of components just to get data to a deeply nested child component, even if intermediate components don't need it.
- #### This makes the code harder to read, maintain, and refactor. 


#### the solutions which solves this problem outside React also are Redux , easier version (Redux toolkit (RTK)) , Zustand .