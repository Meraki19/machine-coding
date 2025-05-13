import React, { useState } from "react";
import CommentActions from "./comment-actions";
import "./style.css";

const Comments = ({ data, addComment }) => {
  return (
    <>
      <div className="comment-container">
        {data?.map((commentItem) => {
          return (
            <div key={commentItem.id}>
              <div className="comment-item">
                <div className="user-details">
                  <img src={`${commentItem.avatar}`} />
                  <h3>{commentItem.username}</h3>
                </div>
                <p>{commentItem.message}</p>
                <CommentActions addComment={addComment} parentId={commentItem.id}/>
              </div>
              {commentItem.children ? (
                <Comments data={commentItem.children} addComment={addComment} />
              ) : null}
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Comments;
