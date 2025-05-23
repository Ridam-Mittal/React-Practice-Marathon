import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams()
    return (
        <div className='flex justify-center items-center w-full bg-green-500 text-white text-3xl p-3'>
            User: {userid}
        </div>
    )
}

export default User
// this is about how to take dynamic data from the url