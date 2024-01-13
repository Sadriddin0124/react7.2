import React, { useState } from "react";
import { useEffect } from "react";
const Posts = ({ handleNext, nextPage, handlePrev}) => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetchData();
  }, [nextPage]);
  const fetchData = () => {
    fetch(
      `https://jsonplaceholder.typicode.com/posts?_page=${nextPage}&_limit=4`
    ).then(async (response) => {
      const link = response.headers.get("link"); // link to next page (REST)
      const json = await response.json(); // data payload
      setPosts(json);
    });
  };
  return (
    <div className="container">
        <h1 className="text-center">Posts</h1>
      <div className="row my-3">
        <div className="col-4 d-flex gap-2">
          <button className="btn btn-primary fs-5" onClick={handleNext}>
            &laquo;
          </button>
          <h2 className="w-100 text-center">{nextPage}</h2>
          <button className="btn btn-primary fs-5" onClick={handlePrev}>
            &raquo;
          </button>
        </div>
      </div>
      <div className="row">
        {posts.map((item, index) => {
          return (
            <div className="col-3" key={index}>
              <div className="card">
                <div className="card-header">
                  <h4>{item.title}</h4>
                </div>
                <div className="card-body">
                  <p>{item.body}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Posts;
