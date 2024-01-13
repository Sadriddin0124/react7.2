import React, { useState } from 'react'
import { useEffect } from 'react';
const Albums = ({handleNext, nextPage, handlePrev}) => {
    const [albums, setAlbums] = useState([])
    useEffect(() => {
        fetchData();
      }, [nextPage]);
      const fetchData = () => {
        fetch(
          `https://jsonplaceholder.typicode.com/albums?_page=${nextPage}&_limit=4`
        ).then(async (response) => {
          const link = response.headers.get("link"); // link to next page (REST)
          const json = await response.json(); // data payload
          console.log(json);
          setAlbums(json);
        });
      };
  return (
    <div className='container'>
        <h1 className="text-center">Albums</h1>
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
      <div className="row">
        {
            albums.map((item,index)=> {
                return(
                    <div className="col-3" key={index}>
                        <div className="card">
                            <div className="card-header">
                                <h2>Albums</h2>
                            </div>
                            <div className="card-body">
                                <h3 className='text-success'>№ {item.id}</h3>
                                <h4 >{item.title}</h4>
                            </div>
                        </div>
                    </div>
                )
            })
        }
      </div>
    </div>
  )
}

export default Albums
