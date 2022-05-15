import React, { useState } from "react";
import "./CheckoutPage.css";
import { useDispatch, useSelector } from "react-redux";
// import "./CartPage.css";
import { store } from "../../Redux/Store";
// import { deleteItemCart } from '../../Redux/Cart/Action';
import { deleteItemCart } from "../../Redux/Cart/Action";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
// import { dataAdd } from '../../Redux/Shiping/Action';
import { dataAdd } from "../../Redux/Shiping/Action";

export default function CheckoutPage() {
  const dipatch = useDispatch();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const data = useSelector((store) => store.cart.cart);
  // const data = []
  console.log("cart1111", data);

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [pincode, setPincose] = useState("");
  const [address, setAddress] = useState("");
  const [locality, setLocality] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  var total = 0;

  for (var i = 0; i < data.length; i++) {
    total += data[i].price;
  }
    // const dispatch = useDispatch()
  console.log("total all", total);

  const handleContinue = () => {
    const data = {
      name,
      mobile,
      pincode,
      address,
      locality,
      city,
      state,
    };
    dispatch(dataAdd(data))
    console.log("datatt", data);
    navigate("/payment");
  };

  return (
    <div className="ConatctDetailsMain">
      <div className="ConatctDetails">
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "50ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <InputLabel htmlFor="standard-adornment-amount">
            CONTACT DETAILS
          </InputLabel>
          <TextField
            id="outlined-basic"
            label="Name*"
            onChange={(e) => setName(e.target.value)}
            variant="outlined"
          />
          <br />
          <TextField
            id="outlined-basic"
            label="Mobile No*"
            onChange={(e) => setMobile(e.target.value)}
            variant="outlined"
          />

          <InputLabel htmlFor="standard-adornment-amount">ADDRESS</InputLabel>
          <TextField
            id="outlined-basic"
            label="Pin Code*"
            onChange={(e) => setPincose(e.target.value)}
            variant="outlined"
          />
          <br />
          <TextField
            id="outlined-basic"
            label="Address (House No, Building, Street, Area)*"
            onChange={(e) => setAddress(e.target.value)}
            variant="outlined"
          />
          <br />
          <TextField
            id="outlined-basic"
            label="Locality / Town*"
            onChange={(e) => setLocality(e.target.value)}
            variant="outlined"
          />
          <br />
          <TextField
            id="outlined-basic"
            label="City / District*"
            onChange={(e) => setCity(e.target.value)}
            variant="outlined"
          />
          <TextField
            id="outlined-basic"
            label="State*"
            onChange={(e) => setState(e.target.value)}
            variant="outlined"
          />
        </Box>

        <div>
          <div
            onClick={
              handleContinue
              // () => navigate("/payment")
            }
          >
            <button
              disabled={
                !name ||
                !mobile ||
                !pincode ||
                !address ||
                !locality ||
                !city ||
                !state
              }
              className="AddAddress"
            >
              <b>CONTINUE</b>
            </button>
          </div>
        </div>
      </div>
      <div className="ConatctCartData">
        <div className="flex_table">
          <div>
            <b>PRODUCT</b>
          </div>
          <div>
            <b>QUANTITY</b>
          </div>
          <div>
            <b>PRICE</b>
          </div>
          <div>
            <b>TOTAL</b>
          </div>
        </div>
        <hr></hr>

        {data.map((e) => (
          <div>
            <div className="cartProduct">
              <img src={e.image} alt="" width={80} height={90} />
              <div className="first">
                <p>{e.title}</p>
                <button
                  onClick={() => dispatch(deleteItemCart(e.id))}
                >
                  REMOVE
                </button>
              </div>
              <div className="quantity">
                <button>+</button>
                <p>1</p>
                <button>-</button>
              </div>
              <p>{e.price}</p>
              <p>{e.price}</p>
            </div>

            <hr></hr>
            <br></br>
          </div>
        ))}

        <div className="subTotal">
          <div className="heading">
            <p>Subtotal</p>
            <p>Shipping</p>
            <p>SUBTOTAL</p>
          </div>
          <div className="price">
            <p>$ {total}</p>
            <p>FREE</p>
            <p>
              <b>$ {total}</b>
            </p>
          </div>
        </div>
      </div>
      {/* :
      <div className="EmptyCart">
        <p>
          <b>Your Cart is Empty</b>
        </p>
      </div>
      } */}
    </div>
  );
}

// brand: "Roadster"
// category: "men"
// id: 1
// image: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/1376577/2016/9/15/11473928353466-Roadster-Men-Black-Regular-Fit-Checked-Casual-Shirt-4501473928353310-1.jpg"
// price: 844
// title: "cotton Checked Casual Shirt"
