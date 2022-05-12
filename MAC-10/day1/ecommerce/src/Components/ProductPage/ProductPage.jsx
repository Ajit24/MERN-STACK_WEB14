import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import "./ProductPage.css";
import { Link, useNavigate } from "react-router-dom";

export const ProductPage = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const res = axios({
        method: "GET",
        url: "http://localhost:3000/products",
      }).then((res) => {
        setData(res.data);
      });
      console.log(res);
      // setData(d);
    } catch (e) {
      console.log("error", e);
    }
  };

  //    sort by price
  const handleSort = (e) => {
    // dispach handle sort action to the store
  };

  return (
    <>
      <div className="mainIndiv">
      <h2>Products For Shop</h2>
      <select onChange={handleSort}>
        <option>--sort by --</option>
        <option value="asc">low to high</option>
        <option value="desc">high to low</option>
      </select>


      <div className="products-list">


        {/* map throught th products  list and display the results */}
        {data &&
          data.map((item, i) => {
            return (
              <div className="Individual"
                onClick={() => navigate(`/SingleProduct/${item.id}`)}
                key={i}
              >
                {/* <Link to={`/products/${item.id}`}> */}
                <div><img src={`${item.image}`} /></div>
                <div><h3>{item.title}</h3></div>
                <div><p>{item.brand}</p></div>
                <div><p>Price-{item.price}</p></div>
                {/* </Link> */}
              </div>
            );
          })}

          
      </div>
      </div>
    </>
  );
};
