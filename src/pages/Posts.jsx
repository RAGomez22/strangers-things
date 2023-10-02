import React, { useEffect, useState } from "react"
import { fetchPosts } from "../components/API";
import { deletePost } from "../components/API";
import { Link } from "react-router-dom";

const Posts =({token})=> {
    const [posts, setPosts] = useState([]);
    const [togglePosts, setToggledPosts] = useState([]);
    
    
    useEffect(() => {
        async function fetchData(){
            const posts = await fetchPosts(token);
            setPosts(posts);
            //setToggle is within the useEFFECT clause because fetchData isn't defined outside of function 
            setToggledPosts(Array(fetchData.length).fill(false));
        }
         fetchData();
       

    },[])
   
    async function handleDelete(postId) {
        try {
          await deletePost(postId, token);
          // If delete is successful, update the list of posts to remove the deleted post
          setPosts((prevPosts) => prevPosts.filter((post) => post._id !== postId));
        } catch (error) {
          console.error("Error deleting post:", error);
    
        }
    }
   
    const toggle = (index) => {
        const updatedToggle = [...togglePosts];
        updatedToggle[index] = !updatedToggle[index];
        setToggledPosts(updatedToggle);
    }

    return(
        <div className="PostInfo">
            <h1> Stranger's Post</h1>
            {token && <h2><Link to="/create"> Add A Post</Link></h2> }            
            {posts.map(({ _id, author, title, description, price, location, messages, isAuthor}, index) => (
            <div key={_id}>
                <h2>{title}</h2>
                <p>From: {author.username}</p>
                <div className="Toggle">
                    {togglePosts[index] && (
                        <>
                            <p>{description}</p>
                            <p>Price: {price}</p>
                            <p>Location: {location}</p>
                            {token&& !isAuthor&&<button>Message {messages}</button>}
                            {token && isAuthor &&<button onClick={() => handleDelete(_id)}>Delete </button>}

                        </>
                    )}
                    <button onClick={() => toggle(index)} className="DetailsButton">
                        {togglePosts[index] ? "Hide Details" : "Show Details"}
                    </button>
                </div>
            </div>
            ))}
        
        </div>
    )
};
export default Posts;