import React from "react";
import Search from "./Search";
import { connect } from "react-redux";
import { useSelector } from "react-redux";

const ItemData = (props) => {
  
  const myData = useSelector(state => state.UserReducer.user);
  console.log(myData);
  {props.users.map((info,index) => {
    return (
        <Search data={info}
              key={index}
              />
    )
})}
};
  

const mapStateToProps =(state) => ({
  users:state.UserReducer.user
})

export default connect(mapStateToProps) (ItemData);
