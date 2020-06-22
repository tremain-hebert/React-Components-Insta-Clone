//Complete the necessary code in this file
// import useState
import React, { useState } from "react";
import Post from "./Post";
import "./Posts.css";
import dummyData from "/Users/truman/Documents/Lambda/React-Components-Insta-Clone/src/dummy-data.js";
// import data 

const PostsPage = () => {
  const [data, setData] = useState(dummyData);
  console.log(data);

  return (
    <div className="posts-container-wrapper">
      {data.map(p => (
        <Post key={p.username} post={p} />
      ))}
    </div>
  );
};

export default PostsPage;
