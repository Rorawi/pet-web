import React,{ useState }  from "react";
import { connect } from "react-redux";
import "../components/order.css";
import Footer from "./Footer/Footer";
import NavBar from "./NavBar";
import shadeCat from "../components/images/shadecat1.jpg";


const Order = () => {
    const [hide,setHide] = useState(false)

    const hideOrderStatus=()=> {
        console.log("clicked");
        setHide(!hide)
    }
  return (
    <div className="more-sec">
      <NavBar />

      <div className="order-img">
        <img src={shadeCat} alt="" />
      </div>

      <div className="orderStatus-process">
        {!hide?<>
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
        </>:null}
        <div className="processing-div">
          <div className="processing-text-topic">
            <h2>Processing</h2>
          </div>

          <div className="processing-text">
            <h3>until delivered</h3>
            <hr />
            <p>
              Your prefect pet will be there shortly! You can always come back
              here to track your order.
            </p>
            <div className="hide-btn-div" onClick={hideOrderStatus}>
              <button className="hide-btn">
                {!hide?<h2>Hide order status</h2>: <h2>Show order status</h2>}
              </button>
            </div>
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <hr />
      <Footer />
    </div>
  );
};

export default Order;
