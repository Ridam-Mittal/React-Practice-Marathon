### What is React Context?
- #### React Context provides a way to share values (like data or functions) between components without having to pass props manually down through every level of the component tree.


#### 1. UserContext
- #### This is the Context object created using `React.createContext()`

```javascript
const UserContext = React.createContext();
```

#### It acts as a container for the data you want to share.


### 2. UserContextProvider
#### This is a Provider component:


```jsx
const UserContextProvider = ({ children }) => {
    const [user, setUser] = React.useState(null); // Shared state
    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};
```


### Purpose: It wraps the part of your app that needs access to user data.
### How it works:
- #### useState creates the user state and a function to update it (setUser).
- #### The UserContext.Provider provides the user and setUser as a shared value (value={{ user, setUser }}) to all child components.

#### `In the context of your UserContextProvider component, children represents any JSX or components nested within <UserContextProvider> when it is used.`
#### The children prop lets the UserContextProvider act as a wrapper for other components and allows them to be rendered inside it.

```jsx
<UserContextProvider>
    <h1>React with Chai and share is important</h1>
    <Login />
    <Profile />
</UserContextProvider>

```

##### Here, the children of UserContextProvider are:

```jsx
<>
    <h1>React with Chai and share is important</h1>
    <Login />
    <Profile />
</>
```

#### `This ensures that Login and Profile components (and their descendants) can access the shared user state and setUser function via the Context.`


### login Component

#### Purpose: Allows the user to log in and update the shared user state

```jsx
const { setUser } = useContext(UserContext); // Access shared setUser function
```

##### useContext(UserContext) gives access to the shared value (here: { user, setUser }) from the UserContext.Provider.

```jsx
setUser({ username, password }); // Updates the shared state
```

##### When the user submits the form, This change is stored in the user state of the UserContextProvider and becomes accessible to all components using UserContext.


### 5. Profile Component
- ##### Purpose: Displays the username of the logged-in user.



