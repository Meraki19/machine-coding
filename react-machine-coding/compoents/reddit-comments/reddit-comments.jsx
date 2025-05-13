import React, { useEffect, useState } from "react";
import Comments from "./Comments";
import "./style.css";
const RedditNestedComments = () => {
  const [commentData, setCommentData] = useState([]);
  const fetchComments = async () => {
    const res = await fetch("http://localhost:3005/getNestedComment");
    const comments = await res.json();
    setCommentData(comments);
  };
  const insertNode = (data, node) => {
    return data.map((item) => {
      if (item.id == node.parentId) {
        let p = [...item.children, node];
        return {
          ...item,
          children: [...p],
        };
      } else if (item.children && item.children.length > 0) {
        return {
          ...item,
          children: insertNode(item.children, node),
        };
      } else {
        return item;
      }
    });
  };
  const addComment = (node) => {
    let updatedData = insertNode(commentData, node);
    setCommentData((prevComments) => updatedData);
  };

  useEffect(() => {
    fetchComments();
  }, []);
  return (
    <>
      <div className="post-container">
        <div className="post" style={{ marginBottom: "30px" }}>
          <h2>What is Lorem Ipsum? Where can I get some?</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries,{" "}
          </p>
        </div>
        <Comments data={commentData} addComment={addComment} />
      </div>
    </>
  );
};
export default RedditNestedComments;
