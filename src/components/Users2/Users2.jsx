import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Navbar/Navbar.scss";
const Users2 = () => {
  const [Users, setUsers] = useState([]);
  useEffect(() => {
    axios.get(`https://fakestoreapi.com/users`).then((res) => {
      console.log(res.data);
      setUsers(res.data);
    });
  }, []);
  return (
    <div className="container position-relative mt-5">
      <div className="row">
        <div className="col-12 ">
          <table className="table table-bordered table-hovered table-striped">
            <thead>
              <tr>
                <th>T/R</th>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Username</th>
                <th>Password</th>
                <th>Phone</th>
                <th>Address (City)</th>
              </tr>
            </thead>
            <tbody>
              {Users.map((item, index) => {
                return <tr key={index}>
                  <td>{index+1}</td>
                  <td>{item.name.firstname}</td>
                  <td>{item.name.lastname}</td>
                  <td>{item.username}</td>
                  <td>{item.password}</td>
                  <td>{item.phone}</td>
                  <td>{item.address.city}</td>
                </tr>;
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users2;
