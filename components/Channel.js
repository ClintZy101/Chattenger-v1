import React, { useEffect, useState } from 'react'
import { db } from '../firebase'
import Message from './Message';

const Channel = () => {

    const [displayMessage, setDisplayMessage] = useState([]);

    useEffect(()=> {
        db.collection('message')
        .orderBy('time','desc')
        .limit(100)
        .onSnapshot((snapshot) => (
            setDisplayMessage(snapshot.docs.map((doc)=>(
                doc.data()
            )))
        ))
    }, []);


    return (
        <div>
            {displayMessage.map(message=>
                (
                    <Message 
                        key={message.id}
                        avatar={message.avatar}
                        text={message.text}
                        time={message.time}
                        name={message.name}
                    />
                )
                )}
            

        </div>
    )
}

export default Channel
