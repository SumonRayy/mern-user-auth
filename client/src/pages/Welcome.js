import React, { useEffect } from 'react'
import jwt from 'jsonwebtoken'

function Welcome() {

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            const user = jwt.decode(token);
            if(!user){
                localStorage.removeItem('token');
                window.location.href = "/";
            }else {

            }
        } 

    }, [])

    return (
        <div>
            <h1>Welcome</h1>
            <h2>Enjoying Ri8?</h2>
            <img src="https://tenor.com/view/swad-aa-gaya-swad-gif-22296166.gif" height="550px" alt="login-meme"/>
        </div>
    )
}

export default Welcome
