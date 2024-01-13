import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import Products from "./components/Products/Products";
import Users from "./components/Users/Users";
import Posts from "./components/Posts/Posts";
import Navbar from "./components/Navbar/Navbar";
import Comments from "./components/Comments/Comments";
import Albums from "./components/Albums/Albums";
import Photos from "./components/Photos/Photos";
import Todos from "./components/Todos/Todos";
import Users2 from "./components/Users2/Users2"
const App = () => {
  const [nextPage, setNextPage] = useState(1);
  const handleNext = () => {
    setNextPage((prev) => prev - 1);
  };
  const handlePrev = () => {
    setNextPage((prev) => prev + 1);
  };
  return (
    <div className="m-0">
      <div className=" d-flex gap-5">
        <div className="fixed position-fixed z-3">
          <Navbar setNextPage={setNextPage} />
        </div>
        <div className="position-relative">
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="single_product/:id" element={<SingleProduct />} />
            <Route path="users2" element={<Users2/>}/>
            <Route
              path="posts"
              element={
                <Posts
                  nextPage={nextPage}
                  setNextPage={setNextPage}
                  handleNext={handleNext}
                  handlePrev={handlePrev}
                />
              }
            ></Route>
            <Route
              path="comments"
              element={
                <Comments
                  nextPage={nextPage}
                  setNextPage={setNextPage}
                  handleNext={handleNext}
                  handlePrev={handlePrev}
                />
              }
            ></Route>
            <Route
              path="albums"
              element={
                <Albums
                  nextPage={nextPage}
                  setNextPage={setNextPage}
                  handleNext={handleNext}
                  handlePrev={handlePrev}
                />
              }
            ></Route>
            <Route
              path="photos"
              element={
                <Photos
                  nextPage={nextPage}
                  setNextPage={setNextPage}
                  handleNext={handleNext}
                  handlePrev={handlePrev}
                />
              }
            ></Route>
            <Route
              path="todos"
              element={
                <Todos
                  nextPage={nextPage}
                  setNextPage={setNextPage}
                  handleNext={handleNext}
                  handlePrev={handlePrev}
                />
              }
            ></Route>
            <Route
              path="users"
              element={
                <Users
                  nextPage={nextPage}
                  setNextPage={setNextPage}
                  handleNext={handleNext}
                  handlePrev={handlePrev}
                />
              }
            ></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
