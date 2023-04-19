import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/config";
import "../components/search.css";
import { BiSearch, BiLogOut, BiHeart, BiDollar, BiChevronDown } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import cat from "../components/images/cat.jpg";
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

import { useSelector } from "react-redux";

const Search = () => {
  // const item =useSelector((state)=>(state.recommendedItems))
  // console.log(item);
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

  const searchSection = () => {
    dispatch(filterSection(search));
    console.log(search);
    setSearch("");
  };

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
          <BiSearch className="seesearch-icon" onClick={searchSection} />
        </div>
        <BiChevronDown className="chevron-down" onClick={toggleMenu}/>

        <div className="searchnav-items ">
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
            <div className="pricingthumbnail">
              <div className="img-div">
                <img src={rabbit} alt="" />
              </div>
              <h2>Name of pet</h2>
              <h5>Here's some short description</h5>
              <div className="price-like">
                <div className="price">
                  <BiDollar />
                  <h5>24</h5>
                </div>
                <div className="like">
                  <BiHeart />
                  <h5>34</h5>
                </div>
              </div>
            </div>

            <div className="pricingthumbnail">
              <div className="img-div">
                <img src={lamb} alt="" />
              </div>
              <h2>Name of pet</h2>
              <h5>Here's some short description</h5>
              <div className="price-like">
                <div className="price">
                  <BiDollar />
                  <h5>56</h5>
                </div>
                <div className="like">
                  <BiHeart />
                  <h5>34</h5>
                </div>
              </div>
            </div>
          </div>
          </div>

        <div>
          <div className="pricingthumbnail-div">
            <div className="pricingthumbnail">
              <div className="img-div">
                <img src={cat} alt="" />
              </div>
              <h2>Name of pet</h2>
              <h5>Here's some short description</h5>
              <div className="price-like">
                <div className="price">
                  <BiDollar />
                  <h5>12</h5>
                </div>
                <div className="like">
                  <BiHeart />
                  <h5>34</h5>
                </div>
              </div>
            </div>

            <div className="pricingthumbnail">
              <div className="img-div">
                <img src={monkey} alt="" />
              </div>
              <h2>Name of pet</h2>
              <h5>Here's some short description</h5>
              <div className="price-like">
                <div className="price">
                  <BiDollar />
                  <h5>78</h5>
                </div>
                <div className="like">
                  <BiHeart />
                  <h5>34</h5>
                </div>
              </div>
            </div>
          </div>

          <div className="pricingthumbnail-div">
            <div className="pricingthumbnail">
              <div className="img-div">
                <img src={parrot} alt="" />
              </div>
              <h2>Name of pet</h2>
              <h5>Here's some short description</h5>
              <div className="price-like">
                <div className="price">
                  <BiDollar />
                  <h5>90</h5>
                </div>
                <div className="like">
                  <BiHeart />
                  <h5>34</h5>
                </div>
              </div>
            </div>

            <div className="pricingthumbnail">
              <div className="img-div">
                <img src={downloadcat} alt="" />
              </div>
              <h2>Name of pet</h2>
              <h5>Here's some short description</h5>
              <div className="price-like">
                <div className="price">
                  <BiDollar />
                  <h5>42</h5>
                </div>
                <div className="like">
                  <BiHeart />
                  <h5>3</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
        </div>
        
      </section>
      </div>
      <Link>
      <div className="load-div">
      <button className="load">Load More</button>
      </div>
      </Link>
    </div>
  );
};

export default Search;
