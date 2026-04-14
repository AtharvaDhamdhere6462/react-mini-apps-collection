import { useState } from "react";
import "./Comments.css";
import CommentsForm from "./CommentsForm";

export default function Comment(){
    let [comments , setComments] = useState([{
        username : "John Doe",
        remark : "This is a great product!",
        rating : 5
    }]);

let addNewComment = (comment) => {
        setComments((currComments)=>[...currComments, comment]);
    }

    return(
        <>
        <div>
            <h1>Comment</h1>
            {comments.map((comment,index)=>{
                return(
                    <div className="comment" key={index}>
                        <span>{comment.remark}</span>
                        &nbsp; &nbsp; &nbsp;
                        <span>(Rating = {comment.rating}/5)</span>
                        &nbsp; &nbsp; &nbsp;
                        <p>- {comment.username}</p>
                    </div>
                )
            })}
            
        </div>
        <hr></hr>
        <CommentsForm addNewComment={addNewComment} />
        </>
        
    );
}