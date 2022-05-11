import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { Route, Routes } from "react-router-dom";
import LandingPage from './Components/LandingPage/LandingPage';
import Category from './Components/Category/Category';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Blog from './Components/Blog/Blog';
import CartPage from './Components/CartPage/CartPage';
import ProductType from './Components/ProductType/ProductType';
import {ProductPage} from './Components/ProductPage/ProductPage';
import {SingleProductList} from './Components/SingleProduct/SingleProduct';

function App() {
  return (
    <div className="App">
       <Navbar />
       <Routes>
         <Route  path="/" element={ 
           <>
            <LandingPage />
            <ProductType/>
             
           </>
        }/>
       </Routes>
       <Routes>
         <Route path="/login" element={<Login />}/>
       </Routes>
       <Routes>
        <Route path="/register" element={<Register />} />
      </Routes>

      <Routes>
        <Route path="/mens_Fashion" element={<LandingPage />} />
      </Routes>

      <Routes>
        <Route path="/womens_Fashion" element={<LandingPage />} />
      </Routes>


      <Routes>
        <Route path="/blog" element={<Blog />} />
      </Routes>

      
      <Routes>
        <Route path="/ProductPage" element={<ProductPage />} />
      </Routes>

{/*       
      <Routes>
        <Route path="/SingleProduct" element={<SingleProductList/>} />
      </Routes> */}

      
      <Routes>
        <Route path="/SingleProduct/:id" element={<SingleProductList/>} />
      </Routes>


      <Routes>
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </div>
  );
}

export default App;
