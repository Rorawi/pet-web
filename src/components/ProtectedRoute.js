import React from 'react';
import { Navigate } from 'react-router-dom';
import {connect} from 'react-redux'

const ProtectedRoute = ({children,authUser}) => {
    if(authUser) 
        return <Navigate to='/login' replace='true'/>
        return children
}

const mapStateToProps =(state)=> {
    return{
        authUser: state.AuthReducer.loggedInuser
    }
}


export default connect(mapStateToProps) (ProtectedRoute);
