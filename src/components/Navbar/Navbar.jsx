import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";

const Navbar = ({ setNextPage }) => {
  const [active, setActive] = useState(1)
  const [link, setLink] = useState([
    {id: 1, title: "Products", path: "/"},
    {id: 2, title: "Users2", path: "/users2"},
    {id: 3, title: "Posts", path: "/posts"},
    {id: 4, title: "Comments", path: "/comments"},
    {id: 5, title: "Albums", path: "/albums"},
    {id: 6, title: "Photos", path: "/photos"},
    {id: 7, title: "Todos", path: "/todos"},
    {id: 8, title: "Users", path: "/users"},
  ])
  const activeBtn =(id)=> {
    console.log(id);
    setActive(id)
    localStorage.setItem("value", active)
  }
  useEffect(()=> {
    let value = +localStorage.getItem("value")
    if(value) {
      setActive(value)
    } else {
      setActive(1)
    }
  }, [])
  return (
    <nav className="navbar">
      <div className="navbar__items">
        <ul className="navbar__list">
          {
            link.map((item,index)=> {
              return (
                <li key={index} onClick={()=>activeBtn(item.id)} className={item.id == active ? "active__link" : ""}>
                  <Link className="navbar__link" to={item.path}>{item.title}</Link>
                </li>
              )
            })
          }
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
