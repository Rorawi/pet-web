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
  BiSliderAlt,
} from "react-icons/bi";
import { FaDog, FaSearch, FaShoppingBag, FaShoppingCart } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import cat from "../components/images/cat.jpg";
import rabbit from "../components/images/rabbit.jpg";
import snake from "../components/images/snake.jpg";
import { useDispatch } from "react-redux";
import wini from "../components/images/wini.png";
import Footer from "./Footer/Footer";
import NavBar from "./NavBar";
import AddToCart from "./AddToCart"
import { detailBelow } from "./details";

const MoreSection = () => {
  const [filter, setFilter] = useState("");
  const [propItem,setPropItem] = useState("");

  const filteredCategory = (category) => {
    setFilter(category);
  };
  
  const openCart =(item)=> {
    setPropItem(item)
  }



  return (
    <>

    {propItem&& (
      <AddToCart 
      img= {propItem.img}
      desc= {propItem.desc}
      />
      
    )}
    
    <div className="more-sec">
      <NavBar />
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
          <button className="tag-btn" onClick={() => filteredCategory("")}>
            All Products
          </button>
          <button className="tag-btn" onClick={() => filteredCategory("Food")}>
            Food
          </button>
          <button className="tag-btn" onClick={() => filteredCategory("Treat")}>
            Treat
          </button>
          <button
            className="tag-btn"
            onClick={() => filteredCategory("Supplies")}
          >
            Supplies
          </button>
          <button
            className="tag-btn"
            onClick={() => filteredCategory("Health")}
          >
            Health
          </button>
        </div>
        <div className="seeAll">
          <select className="select">
            <option value="" >Sort By:</option>
            <option value="apple">Apple</option>
            <option value="banana">Banana</option>
            <option value="orange">Orange</option>
            <option value="kiwi">Kiwi</option>
          </select>

          <BiSliderAlt />
        </div>
      </div>

      <div className="pet-section">
        {detailBelow
          .filter((item) => (filter ? item.category == filter : true))

          .map((item) => {
            return (
              <div className="petthumbnail" key={item.id}>
                <div className="overlay">
                  <Link className="more-link" to={"/addtocart"} >
                    
                    <button className="cart-btn" onClick={() => openCart(item)}>Add To Cart</button>
                  </Link>
                </div>
                <div className="img-div">
                  <img src={item.img} alt="" />
                </div>
                <div className="detail">
                  <div className="item-love">
                    <h5>{item.desc}</h5>
                    <BiHeart />
                  </div>

                  <h5 className="priceItem">
                    <BiDollar />
                    {item.price}
                  </h5>
                </div>
              </div>
            );
          })}
      </div>
      <br />
      <br />
      <br />
      <br />

      <Link to={"/moreofsameitem"} className="more-link">
        <div className="load-div">
          <button className="load">Load More</button>
        </div>
      </Link>
      <br />
      <br />
      <hr />
      <Footer />
    </div>
    </>
  );
};


// const mapState =(state)=>({
//     item: state.ItemReducer.item
// })


export default MoreSection;
