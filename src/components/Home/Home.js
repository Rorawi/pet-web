import React from "react";
import "../Home/home.css";
import banner from "../images/dog2.jpg";
import parrot from "../images/parrot1.jpg";
import racoon from "../images/racoon1.jpg";
import cat from "../images/cat.jpg";
import snake from "../images/snake.jpg";
import cat2 from "../images/download-cat.jpg";
import {
  FaPaw,
  FaDog,
  FaTruck,
  FaCat,
  FaFrog,
  FaFeather,
  FaFish,
  FaApple,
  FaHatWizard,
} from "react-icons/fa";
import { BiCurrentLocation, BiSearch } from "react-icons/bi";
import { BsFillHandbagFill, BsEyeFill,BsGooglePlay } from "react-icons/bs";
import { GiRabbit, GiSeaTurtle, GiTurtleShell } from "react-icons/gi";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="banner">
        <img src={banner} alt="my banner" />
        <header className="header">
          <nav>
            <a href="#" className="brandName">
              <FaPaw className="paw-icon" />
              PetPals.
            </a>

            <div className="nav-items">
              <a href="#" className="nav-item">
                US
              </a>
              <Link to={'/search'} className="nav-item">
                Create an account
              </Link>
            </div>
          </nav>
        </header>

        <div className="title">
          <h1>Adopt your new best friend!</h1>
          <div className="input-div">
            <BiCurrentLocation className="location-icon" />
            <input
              type="input"
              placeholder="Enter your address to find local vendors"
            />
            <button className="search-icon-btn">
              <BiSearch className="search-icon" />
            </button>
          </div>
        </div>
      </div>

      <div className="home-section">
        <div className="thumbnail">
          <FaDog className="icon" />
          <h2>Hundreds of</h2>
          <h5>Find the perfect pet for</h5>
        </div>

        <div className="thumbnail">
          <BsFillHandbagFill className="icon" />
          <h2>Affordable</h2>
          <h5>Get the best deals</h5>
        </div>
        <div className="thumbnail">
          <FaTruck className="icon" />
          <h2>Fast Delivery</h2>
          <h5>Get your pet in no time</h5>
        </div>
        <div className="thumbnail">
          <BsEyeFill className="icon" />
          <h2>Live tracking</h2>
          <h5>Track your order in real time</h5>
        </div>
      </div>

      <div className="popular-vendors-section">
        <div className="popular-vendors-title">
          <h1>Popular Vendors</h1>
          <button className="see-all-btn">See all</button>
        </div>
        <div className="popular-vendors-div">
          <div className="popular-vendor">
            <button className="details-btn">Details</button>
            <FaCat className="popular-icon" />
            <h5>Fluffy Cat</h5>
          </div>
          <div className="popular-vendor">
            <button className="details-btn">Details</button>
            <GiRabbit className="popular-icon" />
            <h5>White Rabbit</h5>
          </div>
          <div className="popular-vendor">
            <button className="details-btn">Details</button>
            <FaFrog className="popular-icon" />
            <h5>Adorable Frog</h5>
          </div>
        </div>

        <div className="popular-vendors-div">
          <div className="popular-vendor">
            <button className="details-btn">Details</button>
            <FaFeather className="popular-icon" />
            <h5>Colorful Bird</h5>
          </div>
          <div className="popular-vendor">
            <button className="details-btn">Details</button>
            <FaFish className="popular-icon" />
            <h5>Tropical Fish</h5>
          </div>
          <div className="popular-vendor">
            <button className="details-btn">Details</button>
            <GiTurtleShell className="popular-icon" />
            <h5>Sea Turtle</h5>
          </div>
        </div>
      </div>

<div className="deliverySteps-div">
      <div className="deliverySteps-section">
        <div className="stepsDiv">
          <div className="img">
            <img src={parrot} alt="Step 1" />
          </div>
            <span className="badge">1</span>

          <h2>Choose the pet</h2>
          <h5>Find the perfect pet for you</h5>
        </div>

        <div className="stepsDiv">
          <div className="img">
            <img src={racoon} alt="Step 1" className="racoon"/>
          </div>
            <span className="badge">2</span>

          <h2>Shop</h2>
          <h5>All from the comfort</h5>
        </div>

        <div className="stepsDiv">
          <div className="img">
            <img src={cat} alt="Step 1" />
          </div>
            <span className="badge">3</span>

          <h2>Wait for delivery</h2>
          <h5>Delivery is fast and can be tracked</h5>
        </div>


        <div className="stepsDiv">
          <div className="img">
            <img src={snake} alt="Step 1" />
          </div>
            <span className="badge">4</span>

          <h2>Enjoy!</h2>
          <h5>Don't forget to leave a review</h5>
        </div>

        
      </div>
      <div className="download-div">
        <div className="download-text">
          <h2>Download the PetPals app and<br/> shop anywhere!</h2>
          <h5>The app is now avaliable in different stores<br/> supporting all systems!</h5>

          <div className="download-platforms">
              <a href="#" className="download">
                <FaApple/>
                <div className="download-text">
                  <h5>Download from</h5>
                  <h2>Apple Store</h2>
                </div>
              </a>

              <a href="#" className="download">
                <BsGooglePlay/>
                <div className="download-text">
                  <h5>Download from</h5>
                  <h2>Google Play</h2>
                </div>
              </a>

              <a href="#" className="download">
                <FaHatWizard/>
                <div className="download-text">
                  <h5>Download from</h5>
                  <h2>Uizard</h2>
                </div>
              </a>
          </div>

        </div>

        <div>
          <img srcSet={cat2} alt="my cat" className="download-pet-img"/>
        </div>
      </div>
      </div>
      <Footer/>
    </>
  );
};

export default Home;
