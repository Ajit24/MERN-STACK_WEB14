import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./SingleProduct.css";

export const SingleProductList = () => {
  
  const { id } = useParams();
  const [data, setData] = useState(null);
  console.log("data", id);

  useEffect(() => {
    axios({
      method: "get",
      url: `http://localhost:3000/products/${id}`,
    })
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
    console.log(data);
  }, [id]);

  const handleAddCart =() => {
    console.log("cart")
  }
  // make a request to get the details
  return (
    <>
      <div className="SingleProductList">
        {/* <h1>SinglePage</h1> */}
        {data && (
          <>
            {" "}
            
            <div className="ImageProduct"><img src={data.image} /></div>
            <div><h2>{data.title}</h2></div>
            <div><h3> {data.brand} </h3></div>
            <div><h3> Rs. {data.price} </h3></div>
            <div><button onClick={handleAddCart}>Add To Cart</button></div>
          </>
        )}
      </div>
    </>
  );
};
