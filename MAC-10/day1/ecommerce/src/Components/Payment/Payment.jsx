import React, { useState } from "react";
import "./Payment.css";
import { store } from "../../Redux/Store";
import { useDispatch, useSelector } from "react-redux";
// import "./CartPage.css";
// import { store } from "../../Redux/Store"
import { deleteItemCart } from "../../Redux/Cart/Action";
import { useNavigate } from "react-router-dom";
// import { emptyCart } from '../../Redux/Cart/Action';
import { emptyCart } from "../../Redux/Cart/Action";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import { dataAdd } from "../../Redux/Shiping/Action";

export default function Payment() {
  const contactInfoAppend = useSelector(
    (store) => store.shippingDataInfo.ShippingData
  );
  console.log("contact data o append", contactInfoAppend);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const data = useSelector((store) => store.cart.cart);

  console.log("cart1111", data);

  var total = 0;

  for (var i = 0; i < data.length; i++) {
    total += data[i].price;
  }
  //   const dispatch = useDispatch()
  console.log("total all22", total);

  const handleCheckout = () => {
    console.log("out");
    dispatch(emptyCart());
    navigate("/success");
  };

  const [cardNumber, setCardnumber] = useState("");
  const [cvv, setCvv] = useState("");

  console.log("numbera caer", cardNumber);

  return (
    <div className="ConatctDetailsMain">
      <div className="ConatctDetails">
        <div>
          <p>
            <b>PAYMENT</b>
          </p>
          <hr></hr>
        </div>
        <br />

        <div className="flex_table" id="payment_icons">
          <img
            src="https://www.bobbibrowncosmetics.com/media/export/cms/icons/visa_card.svg"
            alt="visa"
          ></img>
          <img
            src="https://www.bobbibrowncosmetics.com/media/export/cms/icons/master_card.svg"
            alt="master"
          ></img>
          <img
            src="https://www.bobbibrowncosmetics.com/media/export/cms/icons/maestro_card.svg"
            alt="maestro"
          />
          <img
            src="https://www.bobbibrowncosmetics.com/media/export/cms/icons/discover_card.svg"
            alt="discover"
          />
          <img
            src="https://www.bobbibrowncosmetics.com/media/export/cms/icons/amex_card.svg"
            alt="amex_card"
          />
          <img
            src="https://www.bobbibrowncosmetics.com/media/export/cms/icons/paypal_icon.svg"
            alt="paypal"
          />
          <img
            src="https://www.bobbibrowncosmetics.com/media/export/cms/icons/afterpay_icon.svg"
            alt="afterpay"
          ></img>
        </div>
        <br />

        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "50ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <InputLabel htmlFor="standard-adornment-amount">
            CARD NUMBER
          </InputLabel>
          <TextField
            id="outlined-basic"
            label="Must be 16 digit No*"
            onChange={(e) => {
              {
                setCardnumber(e.target.value);
                if (cardNumber.length > 15) {
                  alert("number exceed");
                }
              }
            }}
            variant="outlined"
          />
          <div className="cvv">
            <div>
              <InputLabel htmlFor="standard-adornment-amount">
                EXP MONTH /EXP YEAR
              </InputLabel>
              <br />
              <TextField
                id="outlined-basic"
                label="mm/year*"
                variant="outlined"
              />
            </div>
            <div>
              <InputLabel htmlFor="standard-adornment-amount">CVV</InputLabel>
              <TextField
                id="outlined-basic"
                label="3 digits*"
                variant="outlined"
                onChange={(e) => {
                  setCardnumber(e.target.value);
                  if (cardNumber.length > 2) {
                    alert("exceed");
                  }
                }}
              />
            </div>
          </div>
        </Box>
        <button className="AddAddress1" onClick={handleCheckout}>
          <b>CHECKOUT</b>
        </button>
      </div>

      <div className="ProdAddress">
        {data.length !== 0 ? (
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
                    <p>{e.brand}</p>
                    <button
                    // onClick={() => dispatch(deleteItemCart(e.id))}
                    >
                      REMOVE
                    </button>
                  </div>
                  <div className="quantity">
                    <button>+</button>
                    <p>1</p>
                    <button>-</button>
                  </div>
                  <p>${e.price}</p>
                  <p>${e.price}</p>
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
                <p>$ price</p>
                <p>FREE</p>
                <p>
                  <b>$ {total}</b>
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="EmptyCart">
            <p>
              <b>Your Cart is Empty</b>
            </p>
          </div>
        )}

        <div className="Shipping">
          <p>
            <b>Shipping Address</b>
          </p>
          <hr />
          <p>Name: {contactInfoAppend ? contactInfoAppend.name : ""}</p>
          <p>Address: {contactInfoAppend ? contactInfoAppend.address : ""}</p>
          <p>
            Locality: {contactInfoAppend ? contactInfoAppend.locality : ""},
            City / District: {contactInfoAppend ? contactInfoAppend.city : ""}
          </p>
          <p>Pincode: {contactInfoAppend ? contactInfoAppend.pincode : ""}</p>
          <p>Mobile: {contactInfoAppend ? contactInfoAppend.mobile : ""}</p>
        </div>
      </div>
    </div>
  );
}

// brand: "Blackberry's"
// category: "men"
// id: 2
// image: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/10944602/2020/3/5/da4c1a83-987b-4afa-baad-f72039dbdedb1583385686526-Roadster-Men-Teal-Blue--Black-Regular-Fit-Printed-Casual-Shi-4.jpg"
// price: 699
// title: "Regukar Fit Printed Shirt"
