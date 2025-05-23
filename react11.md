# What is useContext?

The `useContext` hook in React allows you to access **context values** directly in functional components. It simplifies sharing data (like a theme, user info, or settings) across multiple components **without needing to pass props manually through every level of the component tree**.

---

## Breaking it Down Simply

Imagine you have:

- **A parent component** that holds some data (e.g., user details).
- Multiple **nested child components** that need this data.
- Passing props through every component in the chain is tedious.

`useContext` solves this problem by allowing **direct access** to the data from any component in the tree.

---

## How It Works

### 1. **Create a Context:**
- A context is like a container to hold shared data.
- Use `React.createContext()` to create it.

### 2. **Provide the Context:**
- Wrap your component tree with a `Context.Provider` and supply the data.

### 3. **Consume the Context:**
- Use the `useContext` hook in any child component to access the data.

---

## Basic Example

### Without `useContext` (Props Drilling Problem)

```jsx
function App() {
  const user = { name: "John Doe", age: 30 };

  return (
    <Parent user={user} />
  );
}

function Parent({ user }) {
  return <Child user={user} />;
}

function Child({ user }) {
  return <p>{user.name}</p>;
}
```

- The `user` object is passed as props through every component in the hierarchy, even if intermediate components don’t use it.

### With `useContext`

```jsx
import React, { createContext, useContext } from "react";

// 1. Create Context
const UserContext = createContext();

function App() {
  const user = { name: "John Doe", age: 30 };

  return (
    // 2. Provide Context
    <UserContext.Provider value={user}>
      <Parent />
    </UserContext.Provider>
  );
}

function Parent() {
  return <Child />;
}

function Child() {
  // 3. Consume Context
  const user = useContext(UserContext);
  return <p>{user.name}</p>;
}
```

- No props drilling! The `Child` component directly accesses the `user` data from the `UserContext`.

---

## When to Use `useContext`

### **Avoid Props Drilling:**
- Use `useContext` when data needs to be shared deeply in the component tree, and passing props through many levels becomes cumbersome.

### **Shared State or Configurations:**
- Themes (e.g., dark mode).
- Authenticated user data (e.g., username, permissions).
- Global settings (e.g., language, app preferences).

### **Cross-Cutting Concerns:**
- Centralized state management for small-scale applications (like Redux alternatives).

---

## Key Advantages

- Simplifies access to shared data.
- Reduces repetitive props drilling.
- Keeps components cleaner and easier to maintain.

---

## Advanced Example: Theme Toggle

### App with a Light/Dark Theme

```jsx
import React, { createContext, useContext, useState } from "react";

// Create Context
const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar() {
  return <ThemeButton />;
}

function ThemeButton() {
  // Consume Context
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      style={{
        backgroundColor: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#000" : "#fff",
      }}
      onClick={toggleTheme}
    >
      Switch to {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  );
}

export default App;
```

---

## Key Points to Remember

1. **Scope**:
   - The context value is only available to components wrapped by its `Provider`.

2. **Re-renders**:
   - All components using the `useContext` hook will re-render if the context value changes.

3. **Use Sparingly**:
   - Avoid overusing contexts for managing all application states. For complex state management, use tools like Redux, Zustand, or React Query.

---

## When NOT to Use `useContext`

- When only a few components need the data (props are simpler in such cases).
- For deeply nested state updates or large applications—dedicated state management libraries like Redux might be a better fit.

