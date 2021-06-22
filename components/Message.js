import React from 'react'

const Message = ({ time, name, text, avatar }) => {
    return (
        <div className="grid relative  mx-10 my-2 ">

            <div className="rounded-xl bg-white flex items-center px-2  space-x-2 justify-between p-2 shadow-md ">
                <img src={avatar} className="float-right h-10 rounded-full " />
                <p className="float-left  break-all">{text}</p>
                

            </div>
            <p className="justify-self-end text-xs">{new Date(time?.toDate()).toLocaleString()}</p>
            <hr className="mx-3" />

        </div>
    )
}

export default Message
