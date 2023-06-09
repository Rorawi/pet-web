import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/config";
import "../components/search.css";
import {
  BiSearch,
  BiLogOut,
  BiHeart,
  BiDollar,
  BiChevronDown,
} from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { filterSection } from "../actions/filterAction";
import rabbit from "../components/images/rabbit.jpg";
import monkey from "../components/images/monkey.jpg";
import chick from "../components/images/chick.jpg";
import lamb from "../components/images/lamb.jpg";
import panda from "../components/images/panda.jpg";
import parrot from "../components/images/parrot.jpg";
import downloadcat from "../components/images/download-cat.jpg";

import wini from "../components/images/wini.png";
// import ItemData from "./ItemData";
import { useSelector } from "react-redux";
import { details } from "./details";
import { detailBelow } from "./details";

const Search = (props) => {
  // const myData = useSelector(state => state.UserReducer.user);
  // console.log(myData);
  console.log(props);
  // console.log(user);
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
    setMenu(!menu);
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

  // const searchSection = () => {
  //   dispatch(filterSection(search));
  //   console.log(search);
  //   setSearch("");
  // };

  return (
    <div>
      <div>
        <div className="searchdiv">
          <div className="searchinput-div">
            <input
              value={search}
              type="input"
              placeholder="Enter your address to find local vendors"
              id="input"
              onChange={(e) => setSearch(e.target.value)}
            />
            <BiSearch className="seesearch-icon" />
          </div>
          <BiChevronDown className="chevron-down" onClick={toggleMenu} />

          <div className={`searchnav-items ${menu ? "open" : ""}`}>
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
                        <Link to={"/addtocart"}>Cart</Link>
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
        {/* <ItemData/> */}
        {/* <p>Name:{myData[user].name}</p> */}

        <section className="recommended-section">
          <div>
            <div className="recommended-div">
              <h5>Recommendations for you</h5>
              <div className="image-div">
                <div className="img">
                  <img src={rabbit} alt="Step 1" />
                </div>

                <div className="img">
                  <img src={monkey} alt="Step 1" />
                </div>

                <div className="img">
                  <img src={chick} alt="Step 1" className="chick" />
                </div>

                <div className="img">
                  <img src={lamb} alt="Step 1" />
                </div>
              </div>

              <h5>Tags</h5>
              <div className="tag-btn-div">
                <button className="tag-btn">All</button>
                <button className="tag-btn">Owned</button>
                <button className="tag-btn">Created</button>
                <button className="tag-btn">Vendors</button>
                <button className="tag-btn">Following</button>
                <button className="tag-btn">Activity</button>
              </div>

              <h5>Recently searched pets</h5>
              <div className="recent-searchs-div">
                <div className="thumbnails">
                  <div className="img">
                    <img src={panda} alt="Step 1" className="chick" />
                  </div>

                  <h5>Name of pets</h5>
                </div>
              </div>
              <div className="thumbnails">
                <div className="img">
                  <img src={chick} alt="Step 1" className="chick" />
                </div>

                <h5>Name of pets</h5>
              </div>

              <div className="thumbnails">
                <div className="img">
                  <img src={chick} alt="Step 1" className="chick" />
                </div>

                <h5>Name of pets</h5>
              </div>
            </div>

            <div className="pricingthumbnail-div margin-top">
              {
              detailBelow.filter((item)=> {
                if(search == "") {
                  return item;
                }

              else if (item.nameOfPet.toLowerCase().includes(search.toLowerCase())) {
                return item;
              }
              })
              .map((item) => {
                return (
                  <div className="pricingthumbnail">
                    <div className="img-div">
                      <img src={item.img} alt="" />
                    </div>
                    <h2>{item.nameOfPet}</h2>
                    <h5>{item.desc}</h5>
                    <div className="price-like">
                      <div className="price">
                        <BiDollar />
                        <h5>{item.price}</h5>
                      </div>
                      <div className="like">
                        <BiHeart />
                        <h5>{item.like}</h5>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div>
            <div className="pricingthumbnail-div">
            {details.filter((item)=> {
              if(search == "") {
                return item;
              }

            else if (item.nameOfPet.toLowerCase().includes(search.toLowerCase())) {
              return item;
            }
            })
            .map((item) => {
                return (
                  <div className="pricingthumbnail">
                    <div className="img-div">
                      <img src={item.img} alt="" />
                    </div>
                    <h2>{item.nameOfPet}</h2>
                    <h5>{item.desc}</h5>
                    <div className="price-like">
                      <div className="price">
                        <BiDollar />
                        <h5>{item.price}</h5>
                      </div>
                      <div className="like">
                        <BiHeart />
                        <h5>{item.like}</h5>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
      <Link to={"/more"} className="more-link">
        <div className="load-div">
          <button className="load">Load More</button>
        </div>
      </Link>
    </div>
  );
};

export default Search;
