import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Products.scss";
const Products = () => {
  const [products, setProducts] = useState([]);
  const [nextPage, setNextPage] = useState(1);
  const [categories, setCategories] = useState({
    men: "men's clothing",
    women: "women's clothing",
    electronics: "electronics",
    jewelery: "jewelery",
  });
  const [classes, setClasses] = useState({
    all: "btn-primary",
    men: "btn-outline-primary",
    women: "btn-outline-primary",
    electronics: "btn-outline-primary",
    jewelery: "btn-outline-primary",
  });
  const [active1, setActive1] = useState(false);
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false);
  const [active4, setActive4] = useState(false);
  const [active5, setActive5] = useState(false);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products?limit=20`).then((res) => {
      setProducts(res.data);
      console.log(res.data);
    });
  }, []);
  const handleAll = () => {
    setActive5(true);
    classes.all = "btn-primary";
    classes.men = "btn-outline-primary";
    classes.women = "btn-outline-primary";
    classes.electronics = "btn-outline-primary";
    classes.jewelery = "btn-outline-primary";
    setClasses({ ...classes });
    if (active5 == true) {
      let payload = {
        men: "men's clothing",
        women: "women's clothing",
        electronics: "electronics",
        jewelery: "jewelery",
      };
      setCategories({ ...payload });
    }
  };
  const HandleMen = () => {
    setActive1(true);
    classes.all = "btn-outline-primary";
    classes.men = "btn-primary";
    classes.women = "btn-outline-primary";
    classes.electronics = "btn-outline-primary";
    classes.jewelery = "btn-outline-primary";
    setClasses({ ...classes });
    if (active1 == true) {
      let payload = {
        men: "men's clothing",
        women: "",
        electronics: "",
        jewelery: "",
      };
      setCategories({ ...payload });
    }
  };
  const handleWomen = () => {
    setActive2(true);
    classes.all = "btn-outline-primary";
    classes.women = "btn-primary";
    classes.men = "btn-outline-primary";
    classes.electronics = "btn-outline-primary";
    classes.jewelery = "btn-outline-primary";
    setClasses({ ...classes });
    if (active2 == true) {
      let payload = {
        men: "",
        women: "women's clothing",
        electronics: "",
        jewelery: "",
      };
      setCategories({ ...payload });
    }
  };
  const handleElectronics = () => {
    setActive3(true);
    classes.all = "btn-outline-primary";
    classes.electronics = "btn-primary";
    classes.men = "btn-outline-primary";
    classes.women = "btn-outline-primary";
    classes.jewelery = "btn-outline-primary";
    setClasses({ ...classes });
    if (active3 == true) {
      let payload = {
        men: "",
        women: "'",
        electronics: "electronics",
        jewelery: "",
      };
      setCategories({ ...payload });
    }
  };
  const handleJewelery = () => {
    setActive4(true);
    classes.all = "btn-outline-primary";
    classes.jewelery = "btn-primary";
    classes.men = "btn-outline-primary";
    classes.women = "btn-outline-primary";
    classes.electronics = "btn-outline-primary";
    setClasses({ ...classes });
    if (active4 == true) {
      let payload = {
        men: "",
        women: "",
        electronics: "",
        jewelery: "jewelery",
      };
      setCategories({ ...payload });
    }
  };

  return (
    <div className="container">
      <div className="row">
        <h1 className="text-center title">Products</h1>
      </div>
      <marquee>Categoriyani tanlash uchun 2 marta bosing</marquee>
      <div className="category">
        <h4
          className={`category__btn btn ${classes.all} m-2`}
          onClick={handleAll}
        >
          Hammasi
        </h4>
        <h4
          className={`category__btn btn ${classes.men} m-2`}
          onClick={HandleMen}
        >
          Men's clothing
        </h4>
        <h4
          className={`category__btn btn ${classes.women} m-2`}
          onClick={handleWomen}
        >
          Women's clothing
        </h4>
        <h4
          className={`category__btn btn ${classes.electronics} m-2`}
          onClick={handleElectronics}
        >
          Electronics
        </h4>
        <h4
          className={`category__btn btn ${classes.jewelery} m-2`}
          onClick={handleJewelery}
        >
          Jewelery
        </h4>
        {/* <div className={`category__menu ${menuToggle == true ? "menu__toggle" : ""}`}>
            <input type="checkbox" name="category"  id="men" onChange={()=>changeActive1()}  checked={active.active1} />
          <label htmlFor="men"  >
            Men's clothing
          </label>
            <input type="checkbox" name="category" id="women" />
          <label htmlFor="women">
            Women's clothing
          </label>
            <input type="checkbox" name="category" id="jewelery" />
          <label htmlFor='jewelery'>
            Jewelery
          </label>
            <input type="checkbox" name="category" id="electronics" />
          <label htmlFor='electronics'>
            Electronics
          </label>
        </div> */}
      </div>
      <div className="row">
        {products
          .filter((item) => item.category == categories.men)
          .map((item, index) => {
            return (
              <div className="col-3" key={index}>
                <div className="products__card">
                  <div className="products__card-body">
                    <img src={item.image} alt="products" />
                  </div>
                  <div className="products__card-footer">
                    <h5>{item.title}</h5>
                    <h3>Price: ${item.price}</h3>
                    <h4>Rating: {item.rating.rate}</h4>
                    <Link
                      className="btn btn-outline-primary"
                      to={`/single_product/${item.id}`}
                    >
                      View more
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        {products
          .filter((item) => item.category == categories.jewelery)
          .map((item, index) => {
            return (
              <div className="col-3" key={index}>
                <div className="products__card">
                  <div className="products__card-body">
                    <img src={item.image} alt="products" />
                  </div>
                  <div className="products__card-footer">
                    <h5>{item.title}</h5>
                    <h3>Price: ${item.price}</h3>
                    <h4>Rating: {item.rating.rate}</h4>
                    <Link
                      className="btn btn-outline-primary"
                      to={`/single_product/${item.id}`}
                    >
                      View more
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        {products
          .filter((item) => item.category == categories.electronics)
          .map((item, index) => {
            return (
              <div className="col-3" key={index}>
                <div className="products__card">
                  <div className="products__card-body">
                    <img src={item.image} alt="products" />
                  </div>
                  <div className="products__card-footer">
                    <h5>{item.title}</h5>
                    <h3>Price: ${item.price}</h3>
                    <h4>Rating: {item.rating.rate}</h4>
                    <Link
                      className="btn btn-outline-primary"
                      to={`/single_product/${item.id}`}
                    >
                      View more
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        {products
          .filter((item) => item.category == categories.women)
          .map((item, index) => {
            return (
              <div className="col-3" key={index}>
                <div className="products__card">
                  <div className="products__card-body">
                    <img src={item.image} alt="products" />
                  </div>
                  <div className="products__card-footer">
                    <h5>{item.title}</h5>
                    <h3>Price: ${item.price}</h3>
                    <h4>Rating: {item.rating.rate}</h4>
                    <Link
                      className="btn btn-outline-primary"
                      to={`/single_product/${item.id}`}
                    >
                      View more
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Products;
