import React,{useEffect,useState} from 'react';
import Routers from './Routers';
import { onAuthStateChanged } from "firebase/auth";
import {authUser} from './actions/authAction'
import { db,auth } from './firebase/config';
import { useDispatch } from 'react-redux';
import { addUser } from './actions/userAction';
import { collection, query, onSnapshot } from "firebase/firestore";
// import Item from './components/Item';


function App() {
  const dispatch = useDispatch()
  const [loading,setLoading] = useState(true)

useEffect(()=> {
const readData = () => {
  const q = query(collection(db, "pet"));
const unsubscribe = onSnapshot(q, (querySnapshot) => {
  const pets = [];
  querySnapshot.forEach((doc) => {
      pets.push(doc.data());
    });
    dispatch(addUser(pets))
  console.log(pets);
});
}
readData()
},[])

// useEffect(() => {
//   const readData = async () => {
//     const q = query(collection(db, "pets"));
//     const unsubscribe = onSnapshot(q, (querySnapshot) => {
//       const petsArr = [];
//       querySnapshot.forEach((doc) => {
//         petsArr.push(doc.data());
//       });
//       dispatch(addUser(petsArr))
//       console.log(petsArr);
//     });
//   };
//   readData()
// }, []
// )
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) dispatch(authUser(user))
      else { dispatch(authUser(null)) }
    })
  }, [])

  return (
    <div className="App">
      {/* <ItemData/> */}
     {loading?  <Routers/>: <h1>...Loading</h1>}
    </div>
  );
}

export default App;
