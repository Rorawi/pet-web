import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/config";
import { connect } from "react-redux";
import "../components/more.css";
import {
  BiSearch,
  BiLogOut,
  BiHeart,
  BiDollar,
  BiChevronDown,
  BiBasket,
  BiSliderAlt
} from "react-icons/bi";
import { FaDog, FaSearch, FaShoppingBag, FaShoppingCart } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import cat from "../components/images/cat.jpg";
import rabbit from "../components/images/rabbit.jpg";
import snake from "../components/images/snake.jpg";
import { useDispatch } from "react-redux";
import wini from "../components/images/wini.png";
import Footer from "./Footer/Footer"
import NavBar from "./NavBar";

const MoreSection = (props) => {

  return (
    <div className="more-sec">
     <NavBar/>
      <h5 className="category">
        Category/<span>Pet</span>
      </h5>

      <div className="category-imgDiv">
       <div>
       <img src={cat} alt="" />
       </div>
       <h2>Pets</h2>
      </div>

      <div className="category-tags">
     <div>
     <button className="tag-btn">All Products</button>
      <button className="tag-btn">Food</button>
      <button className="tag-btn">Treat</button>
      <button className="tag-btn">Supplies</button>
      <button className="tag-btn">Health</button>
     </div>
     <div className="seeAll">
     <select className="select">
  <option value="">Sort By:</option>
  <option value="apple">Apple</option>
  <option value="banana">Banana</option>
  <option value="orange">Orange</option>
  <option value="kiwi">Kiwi</option>
</select>

 <BiSliderAlt/>
     </div>
      </div>

      <div className="pet-section">
      <div className="petthumbnail">
        <div className="overlay">
            <Link className="more-link" to={'/addtocart'}>
        <button className="cart-btn">Add To Cart</button>
            </Link>
        </div>
              <div className="img-div">
                <img src={snake} alt="" />
              </div>
             <div className="detail">
             <div className="item-love">
             <h5>Here's some short description</h5>
             <BiHeart/>
             </div>
                  
                  <h5 className="priceItem"><BiDollar/>24</h5>
             </div>
            </div>
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
     
      <Link to={'/moreofsameitem'} className="more-link">
      <div className="load-div">
      <button className="load">Load More</button>
      </div>
      </Link>
      <br/>
      <br/>
      <hr/>
      <Footer/>
    </div>
  );
};

// const mapState =(state)=>({
//     item: state.ItemReducer.item
// })

export default MoreSection;
