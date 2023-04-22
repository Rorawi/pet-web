import React from "react";
import Search from "./Search";
import { connect } from "react-redux";

const ItemData = (props) => {
  return (
    <div>
      {props.users.map((user, index) => {
        return (<Search data={user} key={index} />
        );
      })}
    </div>
  );
};



const mapStateToProps = (state) => ({
    users: state.UserReducer.user,
});
// const Item = (props) => {
//     return (
//       <div>
//         {props.users.map((user, index) => {
//           return (
//             <div key={index}>
//               <p>Name: {user.name}</p>
//               <p>Price: {user.price}</p>
//             </div>
//           );
//         })}
//       </div>
//     );
//   };
  

export default connect(mapStateToProps)(ItemData);
