import { useSession } from 'next-auth/client';
import React, { useState } from 'react'
import { db } from '../firebase';
import firebase from 'firebase';
import Image from 'next/image'



const MessageInput = () => {
    const [session] = useSession();
    const [message, setMessage] = useState('');

    const sendMessage = (e) => {
        e.preventDefault();

        db.collection("message").add({
            name: session.user.name,
            text: message,
            avatar: session.user.image,
            time: firebase.firestore.FieldValue.serverTimestamp(),
        });
        setMessage('');
    }

    return (
        <div className="grid gap-3 mt-2 mb-7 mx-7 p-3 bg-purple-100 shadow-md rounded-lg ">

            <div className="flex items-center space-x-2">
                <Image
                    // onClick={signOut}
                    src={session.user.image}
                    height={40}
                    width={40}
                    layout="fixed"
                    className="rounded-full group cursor-pointer duration-200 ease-in transform sm:hover:scale-105 hover:z-50 "
                />
                <p>{session.user.email}</p>
            </div>
            <div className=" flex ">
                <form action="" className=" space-x-2 flex flex-grow "  >
                    <input
                        type="text"
                        placeholder="Say something..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent rounded-lg shadow-md p-2 sm:flex flex-grow"
                    />
                    <button onClick={sendMessage} className="bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 shadow-md p-2 rounded-lg text-white">Send</button>
                </form>
            </div>
        </div>

    )
}

export default MessageInput
