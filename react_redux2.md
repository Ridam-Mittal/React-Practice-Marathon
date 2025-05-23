



# Why `push` Works in Redux but Not in Context API

## 🔹 Redux (`@reduxjs/toolkit`) with Immer
### ✅ `push` Works in Redux
```js
addTodo: (state, action) => {
    const todo = {
        id: nanoid(),
        text: action.payload
    }
    state.todos.push(todo) // ✅ Allowed because Immer converts it into an immutable update
}
```
- Even though `state.todos.push(todo)` looks like a mutation, **Immer automatically produces a new immutable state behind the scenes**.
- Redux Toolkit simplifies updates by allowing mutations **inside `createSlice` reducers**.

---

## ❌ Context API (React State) – Direct Mutation Fails
```js
const [todos, setTodos] = useState([]);

const addTodo = (text) => {
    const todo = { id: nanoid(), text };
    todos.push(todo); // ❌ Directly mutating state (BAD PRACTICE)
    setTodos(todos);  // ❌ React won't re-render because state isn't changed
};
```
### **Why does this fail?**
- `todos.push(todo)` **mutates the existing array** instead of creating a new one.
- **React requires immutability**, so it **won’t detect the change and won’t re-render**.

✅ **Correct Approach in Context API:**
```js
const addTodo = (text) => {
    const todo = { id: nanoid(), text };
    setTodos([...todos, todo]); // ✅ Creates a new array instead of mutating state
};
```
- Here, we create a **new array** (`[...todos, todo]`) instead of modifying the existing `todos` array.

---

## 🔥 Summary
| Approach  | Can Mutate State? | Why? |
|-----------|----------------|------|
| **Redux Toolkit (`createSlice`)** | ✅ Yes | Uses **Immer** to handle mutations safely |
| **React Context / useState** | ❌ No | React **requires immutability** for re-renders |

Since Redux Toolkit lets you **write mutable code while keeping state immutable**, `push` works there but not in React Context.



***
***

# Redux Toolkit vs Context API: Handling State Mutability

## Why Can We Mutate State Directly in Redux Toolkit?

In Redux with Redux Toolkit (`@reduxjs/toolkit`), state mutations **appear** to be direct, but they are actually **handled immutably** under the hood using Immer.  

### 🔹 Why can we "mutate" state in Redux Toolkit?  
Normally, in Redux, we must **return a new state object** instead of mutating the existing one. However, Redux Toolkit uses **Immer**, which allows us to write "mutating" code, but it actually creates an immutable copy behind the scenes.  

### 🔹 Example:
```js
addTodo: (state, action) => {
    const todo = {
        id: nanoid(),
        text: action.payload
    }
    state.todos.push(todo); // Looks like mutation, but it's immutable internally
}
```

### 🔹 How does it work?  
- The `state.todos.push(todo)` seems like we’re modifying `state.todos` directly.  
- However, **Immer** intercepts this and **produces a new immutable state** behind the scenes.  

### 🔹 What happens in Context API?  
In React's Context API (without Immer), state is immutable, and we **must** return a new object:  
```js
setTodos([...todos, newTodo]) // Must return a new array
```
This is why `push()` wouldn’t work in Context, because it modifies the existing state directly.  

## Redux Toolkit vs Context API in State Updates

### 🔹 How Redux Toolkit Handles State Updates
With Redux Toolkit, we can modify state directly inside reducers:
```js
addTodo: (state, action) => {
    state.todos.push({ id: nanoid(), text: action.payload });
}
```
Here, Immer allows us to write code as if we were modifying `state.todos` directly, but under the hood, Immer creates a **new immutable state**.

### 🔹 How Context API Handles State Updates
Context API follows React’s state immutability rules, so we need to return a new state explicitly:
```js
setTodos(prevTodos => [...prevTodos, { id: nanoid(), text: action.payload }]);
```
In Context API, using `push()` would not work because it tries to mutate the existing array directly, violating React’s immutable state principles.

## 🛠 Conclusion
Redux Toolkit lets us **write mutable-looking code while keeping state immutable**, thanks to Immer. This makes Redux reducers much more readable and concise compared to vanilla Redux or Context API. 🚀

