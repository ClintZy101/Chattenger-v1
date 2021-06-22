import { signIn } from 'next-auth/client'
import React from 'react'

const Login = () => {
    return (
        <div className="grid place-items-center my-56 ">
            <div className="border-purple-500 border-2 grid gap-4 place-items-center p-14 rounded-lg">
            <h1 className="hover:border-purple-500 border-2 rounded-md px-10 ">You are not Signed In</h1>
            <button onClick={signIn} className=" text-white bg-purple-600 hover:bg-purple-700 px-4 py-1 rounded-md">Sign In</button>
            </div>
            
        </div>
    )
}

export default Login
