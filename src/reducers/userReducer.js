let initialState = {
    user: {
        name:'Wini',
        email: "wini@gmail.com"
    }
}

const UserReducer = (state = initialState,action) => {
   switch(action.type) {
    case "ADD_USER":
        return{...state,user: action.payload}
    default: 
    return state;
   }
}

export default UserReducer;
