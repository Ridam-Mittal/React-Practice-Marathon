## `useSelector` and `useDispatch` Explained for Beginners

### 🔹 What is `useSelector`?

`useSelector` is a hook provided by Redux that allows components to access data from the Redux store.

#### ✅ How to Use `useSelector`

Example:

```javascript
import { useSelector } from 'react-redux';

const MyComponent = () => {
    const todos = useSelector(state => state.todo.todos); // Accessing todos from Redux store
    
    return (
        <div>
            {todos.map(todo => (
                <p key={todo.id}>{todo.text}</p>
            ))}
        </div>
    );
};
```

#### 🔍 What’s Happening Here?

- `useSelector` takes a function that selects a part of the Redux state.
- `state.todo.todos` accesses the `todos` array from the `todo` slice in the Redux store.
- Whenever the `todos` state updates, the component automatically re-renders.

---

### 🔹 What is `useDispatch`?

`useDispatch` is a hook that allows components to send actions to the Redux store.

#### ✅ How to Use `useDispatch`

Example:

```javascript
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';

const AddTodoComponent = () => {
    const dispatch = useDispatch();
    
    const handleAddTodo = () => {
        dispatch(addTodo("New Task")); // Dispatching an action
    };
    
    return (
        <button onClick={handleAddTodo}>Add Todo</button>
    );
};
```

#### 🔍 What’s Happening Here?

- `useDispatch()` gives access to the Redux `dispatch` function.
- `dispatch(addTodo("New Task"))` sends an action to the store to add a new todo.

---

### 🔥 Using `useSelector` and `useDispatch` Together

Example:

```javascript
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, removeTodo } from '../features/todo/todoSlice';

const TodoApp = () => {
    const todos = useSelector(state => state.todo.todos);
    const dispatch = useDispatch();
    
    return (
        <div>
            {todos.map(todo => (
                <div key={todo.id}>
                    <p>{todo.text}</p>
                    <button onClick={() => dispatch(removeTodo(todo.id))}>Delete</button>
                </div>
            ))}
            <button onClick={() => dispatch(addTodo("New Task"))}>Add Todo</button>
        </div>
    );
};
```

#### 🔍 What’s Happening Here?

- `useSelector(state => state.todo.todos)` retrieves todos from the Redux store.
- `useDispatch()` allows us to dispatch actions like `addTodo` and `removeTodo`.
- Clicking the **Add Todo** button dispatches `addTodo("New Task")`.
- Clicking the **Delete** button dispatches `removeTodo(todo.id)` to remove a todo.

---

### ✅ Summary

| Hook          | Purpose                                       | Example Usage                            |
| ------------- | --------------------------------------------- | ---------------------------------------- |
| `useSelector` | Selects data from Redux store for a component | `useSelector(state => state.todo.todos)` |
| `useDispatch` | Sends actions to Redux store to modify state  | `dispatch(addTodo("New Task"))`          |





