import React from "react";
import { useState, useEffect } from "react";
import { createPost } from "../components/API";
import { useNavigate } from "react-router-dom";

export default function CreatePost({token}){
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [location, setLocation]=useState('');
    const [willDeliver, setWillDeliver]=useState(false);
    const navigate = useNavigate();

    async function submitForm(e) {
        e.preventDefault();
       
        createPost({ title, description, price, location, willDeliver}, token);
        console.log('new post added');
        navigate('/')
    }

    if(!token){
        navigate('/login');
    }
return(
    <div className="create">
        <h1>Create A New Post</h1>
        <form onSubmit={submitForm}>
        <fieldset>
            <label>Post Title:</label>
            <input
                    className="Cposts"
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e)=>setTitle(e.target.value)} 
                    required
            />
            <label>
                Description:
            </label>
            <input
                required
                value={description}
                placeholder="Information"

                onChange={(e)=>setDescription(e.target.value)}
                className="Cposts"

            />

            <label>
                Price: 
            </label>
            <input
                required
                value={price}
                placeholder="Price"

                onChange={(e)=>setPrice(e.target.value)}
                className="Cposts"

            />  
             <label>
                Location: 
            </label>
            <input
                required
                value={location}
                placeholder="Location"

                onChange={(e)=>setLocation(e.target.value)}
                className="Cposts"

            />  
            <label>Will Deliver:</label>
            <label> 
            <input
                    className="Cposts"
                    type="checkbox"
                    checked={willDeliver}
                    onChange={(e)=>setWillDeliver(e.target.checked)} 
            ></input>
            </label>
            <button type="submit"> Add Post </button>
        </fieldset>
        </form>
    </div>
)
}
