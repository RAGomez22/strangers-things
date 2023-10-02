import { useState, useEffect } from "react"
import { profileData } from "../components/API";
import { useNavigate } from "react-router-dom";
import React from "react";

export default function Profile({token}) {
    const [user, setUser] = useState ('');
    const [messages, setMessages] = useState ([]);
    useEffect(()=>{
        async function getUser (){
            const user= await profileData(token);
            setUser(user);
        }
        getUser();
    },[token])
    if(!token){
        Navigate('/login')
    }
    return (
        <div>
        
            <h1>{user.username}'s Profile</h1>
      </div>
    )
}