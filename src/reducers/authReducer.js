const initialState = {
     loggedInuser: null
    }


const AuthReducer = (state = initialState,action) => {
       switch(action.type) {
        case "ADD_USER":
            return{...state,loggedInuser: action.payload}

            default:
             return state
       }

}

export default AuthReducer;
