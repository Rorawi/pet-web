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
const NavBar = () => {
    const [dropdown, setDropdown] = useState(false);
    const [menu, setMenu] = useState(false);
    const [search, setSearch] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const clickProfile = (e) => {
        e.preventDefault();
        console.log("clicked");
        setDropdown(true);
      };
    
      const toggleMenu = (e) => {
        e.preventDefault();
        console.log("clicked");
        setMenu(true);
      };
    
      const closeDropdown = () => {
        setDropdown(false);
      };
  
      const SignOut = async (e) => {
          e.preventDefault();
          try {
            {
              signOut(auth);
            }
            navigate("/", { replace: true });
          } catch (error) {
            console.log(error);
            alert("An error occured");
          }
        };
    return (
        <div>
            <div className="more-div">
          <div className="more-header">
            <FaDog className="dog-icon" />
  
            <div className="morenav-items">
              <Link to={"/"} className="morenav-item">
                Home
              </Link>
              <Link to={"/more"} className="morenav-item">
                Categories
              </Link>
              <Link href="#" className="morenav-item">
                Blog
              </Link>
              <Link href="#" className="morenav-item">
                Contact
              </Link>
            </div>
          </div>
  
          <div className="morenav-items">
            <FaSearch className="morenav-icon" />
            <Link to={"/addtocart"} className="more-link">
              <FaShoppingCart className="morenav-icon" />
            </Link>
            <div className="profile-div">
              <img
                src={wini}
                alt="profile"
                className="profile"
                onClick={clickProfile}
              />
            </div>
            <div>
              {dropdown ? (
                <>
                  <div
                    className="dropdown-div"
                    //  onClick={closeDropdown}
                  >
                    <div className="dropdown">
                      <AiOutlineClose
                        onClick={closeDropdown}
                        className="close-btn"
                      />
                      <div className="drop-items">
                        <a href="#">Profile</a>
                        <a href="#">Private Policies</a>
                        <a href="#">Cart</a>
                        <a href="#">Settings</a>
                        <a href="#">Delete Account</a>
                      </div>
                      <div>
                        <hr />
                        <div className="logout-div" onClick={SignOut}>
                          <BiLogOut className="logout" />
                          <h3>Log out</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ) : null}
            </div>
          </div>
        </div>
            
        </div>
    );
}

export default NavBar;
