import React from "react";
function PostDetail(props){
    const { title, description, author } = props.post;
    return(
        <div>
            <h2>{title}</h2>
            <p>{description}</p>
            <p>Created by: {author.username}</p>
        </div>
    );
}
export default PostDetail;