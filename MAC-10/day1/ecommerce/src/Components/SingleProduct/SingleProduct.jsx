import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const SingleProductList = () => {
  const {id}  = useParams();
  const [data, setData] = useState(null);
 console.log("data",id);
  useEffect(() => {
    axios({
      method: "get",
      url: `http://localhost:3000/products/${id}`
    })
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
      console.log(data)
  }, [id]);

  // make a request to get the details
  return (
    <>
         <h1>SinglePage</h1>
         {data && <> <h2>{data.title}</h2>
               <img src= {data.image}/>
         
               <h3> {data.brand} </h3>
               <h3> {data.price} </h3>
         </>}
    </>
    )
  }
