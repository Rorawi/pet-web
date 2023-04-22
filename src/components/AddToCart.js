import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/config";
import { connect } from "react-redux";
import "../components/addtocart.css";
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

const AddToCart = (props) => {

  const [name, setName] = useState("");
  const [surname, setSurName] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [address, setAddress] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [country, setCountry] = useState("");
  const dispatch = useDispatch();

  const handleSubmit =()=> {
    console.log(name,surname,email,phonenumber,address,zipcode,country);
    setName("");
    setSurName("");
    setEmail("");
    setPhonenumber("");
    setAddress("");
    setZipcode("");
    setCountry("");
  }


  return (
    <div className="more-sec">
      <NavBar/>
      <div className="cart-ship-info">
        <div className="cart-info">
          <h2>Shopping Cart</h2>
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Size</th>
                <th>Quantity</th>
                <th>Total Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="td">
                    <img src={snake} alt="" />
                    <div>
                      <h5> Some description here</h5>
                      <h6>Color</h6>
                    </div>
                  </div>
                </td>
                <td>
                  <select className="select">
                    {/* a tenary operator will be here to check if item will be sold in grams/size e.t.c */}
                    <option value="">Size:</option>
                    <option value="apple">S</option>
                    <option value="banana">M</option>
                    <option value="banana">L</option>
                    <option value="orange">XL</option>
                    <option value="orange">XXL</option>
                  </select>
                </td>
                <td>
                  <select className="select">
                    <option value="">Quantity:</option>
                    <option value="apple">Apple</option>
                    <option value="banana">Banana</option>
                    <option value="orange">Orange</option>
                    <option value="kiwi">Kiwi</option>
                  </select>
                </td>
                <td>$70</td>
                <AiOutlineClose className="cancel-order" />
              </tr>
            </tbody>
          </table>

          <div className="total-div">
            <div>
              <h5>Sub Total:</h5>
              <span>$70</span>
            </div>
            <div>
              <h5>Shipping:</h5>
              <span>$2</span>
            </div>
            <hr />
            <div>
              <h5>Total:</h5> <h2>$72</h2>
            </div>
          </div>
        </div>
        <div className="shipping-info">
          <h5>Checkout Step</h5>
          <h2>Shipping Info</h2>
          <form onSubmit={handleSubmit}>
            <div className="two-in-one">
              <div>
                <label>Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <label>Surname</label>
                <input
                  type="text"
                  value={surname}
                  onChange={(e) => setSurName(e.target.value)}
                />
              </div>
            </div>
            <div>
              <label>Email</label>
              <input type="text" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label>Phone number</label>
              <input type="text" 
              value={phonenumber}
              onChange={(e) => setPhonenumber(e.target.value)}
              />
            </div>
            <div>
              <label>Street Address</label>
              <input type="text" 
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              />
            </div>

            <div className="two-in-one">
              <div>
                <label>ZIP/Postal code</label>
                <input
                  type="text"
                  value={zipcode}
                  onChange={(e) => setZipcode(e.target.value)}
                />
              </div>
              <div>
                <label>Country</label>
                <input
                  type="text"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                />
              </div>
            </div>
            <div className="checkbox">
                <input
                  type="checkbox"
                  />
                  <h5>Use as billing address</h5>
              </div>

              <Link to={"/order"} className="submit-div">
              <button className="submit" onClick={handleSubmit}>Continue payment</button>
              </Link>
           
          </form>
        </div>
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <hr />
      <Footer />
    </div>
  );
};

export default AddToCart;
