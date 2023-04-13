import React,{useEffect} from 'react';
import Routers from './Routers';
import { onAuthStateChanged } from "firebase/auth";
import {authUser} from './actions/authAction'
import { auth } from './firebase/config';
import { useDispatch } from 'react-redux';


function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) dispatch(authUser(user))
      else { dispatch(authUser(null)) }
    })
  }, [])

  return (
    <div className="App">
      <Routers/>
    </div>
  );
}

export default App;
