import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/config";
import "../components/search.css";
import { BiSearch,BiLogOut } from "react-icons/bi";
import {AiOutlineClose } from "react-icons/ai";
import cat from "../components/images/cat.jpg";

const Search = () => {
  const [dropdown, setDropdown] = useState(false);
  const navigate = useNavigate();

  const clickProfile = (e) => {
    e.preventDefault();
    console.log("clicked");
    setDropdown(true)
  };

  const closeDropdown =()=> {
    setDropdown(false)
  }

  const SignOut = async(e)=> {
    e.preventDefault();
    try {
        {signOut(auth)}
        navigate("/", { replace: true });
    } catch (error) {
        console.log(error);
        alert("An error occured")
    }
  }
  

//   setDropdown(true)

  return (
    <div>
      <div className="searchdiv">
        <div className="searchinput-div">
          <input
            type="input"
            placeholder="Enter your address to find local vendors"
          />
          <BiSearch className="search-icon" onClick={console.log("jiji")} />
        </div>

        <div className="searchnav-items">
          <a href="#" className="searchnav-item">
            Breed
          </a>
          <a href="#" className="searchnav-item">
            Size
          </a>
          <a href="#" className="searchnav-item">
            Price
          </a>
          <a href="#" className="searchnav-item">
            Location
          </a>

          <div className="profile-div">
            <img
              src={cat}
              alt="profile"
              className="profile"
              onClick={clickProfile}
            />
          </div>
          <div>
            {dropdown ? <>
            <div className="dropdown-div"
            //  onClick={closeDropdown}
             >
               <div className="dropdown">
                <AiOutlineClose onClick={closeDropdown} className="close-btn"/>
                <div className="drop-items">
                <a href="#">Username</a>
                <a href="#">Private Policies</a>
                <a href="#">Cart</a>
                <a href="#">Settings</a>
                </div>
               <div>
                    <hr/>
               <div className="logout-div" onClick={SignOut}>
                    <BiLogOut className="logout" />
                    <h3>Log out</h3>
                </div>
               </div>
               </div>
            </div>
            </> : null}
          </div>
        </div>
      </div>

      <section className="recommended-section">
        <div className="recommended-div"></div>
      </section>
    </div>
  );
};

export default Search;
