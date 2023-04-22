import React from "react";
import { connect } from "react-redux";
import "../components/order.css";
import Footer from "./Footer/Footer";
import NavBar from "./NavBar";
import shadeCat from "../components/images/shadecat1.jpg"
const Order = () => {
      
    return (
        <div className="more-sec">
        <NavBar/>

        <div className="order-img">
            <img src={shadeCat} alt="" />
        </div>

        <div className="orderStatus-process">
        <div className="order-status">
            <h2>Order Status</h2>
            <div className="step">
                <div className="lefthr"></div>
                <div className="badge-num">
                    <h3>1</h3>
                </div>

                <div className="order-text">
                    <h3>Almost there</h3>
                    <h5>Your order is being prepared now.</h5>
                </div>
            </div>
            <div className="step">
                <div className="lefthr"></div>
                <div className="badge-num">
                    <h3>2</h3>
                </div>

                <div className="order-text">
                    <h3>Done!</h3>
                    <h5>Your order is ready and is being delivered now.</h5>
                </div>
            </div>
            <div className="step">
                <div className="lefthr"></div>
                <div className="badge-num">
                    <h3>3</h3>
                </div>

                <div className="order-text">
                    <h3>Delivered!</h3>
                    <h5>Your order has been delivered.</h5>
                </div>
            </div>

        </div>
        <div className="processing-div">
            <div className="processing-text-topic">
                <h2>Processing</h2>
            </div>

            <div className="processing-text">

            </div>
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
}

export default Order;
