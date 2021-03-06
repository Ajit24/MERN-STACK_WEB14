import React from 'react';
import "./Navbar.css";
import { useNavigate } from 'react-router-dom'
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import{store} from "../../Redux/Store"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import Avatar from '@mui/material/Avatar';
import { useSelector } from 'react-redux';

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: `1px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }));
export default function Navbar() {

  const data = useSelector((store) => store.cart.cart)
  console.log("datataa", data.length)

  const navigate = useNavigate()

  const handleLogin = () => {
    navigate("/login")
  }

  return (
    <div>
        <div className='Navbar'>
        <div onClick={() => navigate("/")}>Home</div>
        <div onClick={() => navigate("/ProductPage")}>Men</div>
        <div onClick={() => navigate("/ProductPage")}>Women</div>
        <div onClick={() => navigate("/blog")}>Blog</div>
        <div onClick={() => navigate("/")}><input type="text" placeholder='Search' /></div>

        <div onClick={handleLogin}>
          <Avatar src="/broken-image.jpg" />
        </div>

        <div onClick={() => navigate("/cart")}>
          <IconButton aria-label="cart">
            <StyledBadge badgeContent={data.length} color="secondary">
              <ShoppingCartIcon />
            </StyledBadge>
          </IconButton>
        </div>
      </div>
    </div>
  )
}
