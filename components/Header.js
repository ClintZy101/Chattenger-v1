import { signOut } from 'next-auth/client'
import React from 'react'


const Header = () => {

    return (
        <div className="bg-white flex justify-between items-center p-3 border-b-1 shadow-md top-0 z-20 sticky">
            <div className="items-center flex space-x-2 ">
                <img className="h-10" src="https://facebookbrand.com/wp-content/uploads/2020/10/Logo_Messenger_NewBlurple-399x399-1.png?w=399&h=399" alt="" />
                <h1 className="text-xl font-extrabold font-serif text-purple-700">ChaTTengger</h1>
            </div>

            <button onClick={signOut} className="bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 shadow-md p-2 rounded-lg text-white cursor-pointer">Sign Out</button>
        </div>
    )
}

export default Header
