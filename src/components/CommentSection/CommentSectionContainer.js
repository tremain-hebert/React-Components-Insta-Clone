// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";
import dummyData from "/Users/truman/Documents/Lambda/React-Components-Insta-Clone/src/dummy-data.js";

const CommentSection = props => {
  const [data, setData] = useState(props);
  console.log(data);
  // Add state for the comments

  return (
    <div>
      {data.comments.map(c => (
        <Comment key={c.postId} comment={c} />
      ))}
      <CommentInput />
    </div>
  );
};

export default CommentSection;
