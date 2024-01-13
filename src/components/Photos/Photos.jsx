import { useEffect, useState } from "react";
import React from "react";

const Photos = ({ handleNext, nextPage, handlePrev }) => {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    fetchData();
  }, [nextPage]);
  const fetchData = () => {
    fetch(
      `https://jsonplaceholder.typicode.com/photos?_page=${nextPage}&_limit=4`
    ).then(async (response) => {
      const link = response.headers.get("link"); // link to next page (REST)
      const json = await response.json(); // data payload
      console.log(json);
      setPhotos(json);
    });
  };
  return (
    <div className="container">
      <h1 className="text-center">Photos</h1>
      <div className="row my-3">
        <div className="col-4 d-flex gap-2">
          <button className="btn btn-primary fs-5" onClick={handleNext}>
            &laquo;
          </button>
          <h2 className="w-25 text-center">{nextPage}</h2>
          <button className="btn btn-primary fs-5" onClick={handlePrev}>
            &raquo;
          </button>
        </div>
      </div>
      <div className="row d-flex flex-wrap">
        {photos.map((item, index) => {
          return (
            <div className="col-3" key={index}>
              <div className="card">
                <div className="card-header">
                  <h3>№{item.id}</h3>
                </div>
                <div className="card-body">
                  <img className="w-100" src={item.url} alt={item.id} />
                </div>
                <div className="card-footer">
                  <h6>{item.title}</h6>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Photos;
