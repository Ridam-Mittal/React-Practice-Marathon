import React from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({children}) => {
    const [user, setUser] = React.useState(null)
    return(
        <UserContext.Provider value={{user, setUser}}>
        {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider


//  what is this children representing is it a fixed key word

// No, children is a special prop name in React that automatically captures nested elements. If you rename it, React won't recognize the nested components.

/*

Yes, exactly! You don’t explicitly pass children as a prop when using a component.

Instead, React automatically places whatever is inside the component as children.

When you write:

<UserContextProvider>
    <Navbar />
    <Dashboard />
</UserContextProvider>

You are not passing children manually, but React automatically assigns:

children = [<Navbar />, <Dashboard />] inside UserContextProvider.



*/


/*

- If you want a global state that many components need → Use Centralized State (Inside Context).
- If only a few components need the state & updates happen frequently → Use Decentralized State (Inside App or another component).
- Both approaches work; it just depends on how often the state changes and where it needs to be accessed. 🚀

*/