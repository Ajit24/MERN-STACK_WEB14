import React from 'react'
import {useNavigate} from "react-router-dom"
import SimpleImageSlider from "react-simple-image-slider";

export default function LandingPage() {

    const images = [
        { url: "https://n.nordstrommedia.com/id/841a102d-0c7b-4620-a254-12c0c426c10c.jpeg?h=720&w=1608" },
        { url: "https://m.media-amazon.com/images/I/51r+YpWo9rL._SX1500_.jpg?h=720&w=1608"},
          
    ];
    const navigate = useNavigate()
  return (
    <div>
         <div onClick={() => navigate("/ProductPage")}>
      <SimpleImageSlider
        width={"100%"}
        height={504}
        images={images}
        showBullets={false}
        showNavs={false}
        autoPlay={true}
      />
    </div>
      
    </div>
  )
}