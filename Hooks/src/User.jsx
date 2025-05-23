import React from 'react'
import { useContext } from 'react'
import { Appcontext } from './App'

function User() {

    const {username} = useContext(Appcontext)
    return (
        <div>
            <h1>User: {username}</h1>
        </div>
    )
}

export default User
