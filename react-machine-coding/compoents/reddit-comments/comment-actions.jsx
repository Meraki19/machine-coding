import React, { useState } from "react";
import "./style.css";
const CommentActions = ({ addComment,parentId }) => {
  const [openCommentBox, setOpenCommentBox] = useState(false);
  const [commentInput, setCommentInput] = useState("");

  return (
    <>
      <div className="actions">
        <span>👍</span>
        <span>🏅</span>
        <span onClick={() => setOpenCommentBox(true)}>↩️</span>
      </div>
      {openCommentBox && (
        <div className="comment-box">
          <textarea
            onChange={(e) => setCommentInput(e.target.value)}
            value={commentInput}
            rows="4"
          />
          <div className="btn-container">
            <button
              role="button"
              className="btn-primary"
              onClick={() => {

                addComment({
                  id: Math.floor(Math.random() * 100000) * Date.now(),
                  parentId:parentId,
                  username: "tech_guy",
                  avatar: `https://i.pravatar.cc/150?img=${Math.floor(Math.random()*100)}`,
                  message: commentInput,
                  children: [],
                })
                setOpenCommentBox(false)
                setCommentInput('')
              }
              }
            >
              Comment
            </button>
            <button
              role="button"
              className="btn-secondary"
              onClick={() => setOpenCommentBox(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
};
export default CommentActions;
