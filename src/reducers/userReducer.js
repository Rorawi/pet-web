const initialState = {
  user: [
    {
      name: "Winifred",
      phonenumber: "0000 000 000",
      location: "Hamburg",
      id: "i1n1ij2u4dsi2",
    },
  ],
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_USER":
        return{...state, user: action.payload}
        default:
      return state;
  }
};

export default UserReducer;
