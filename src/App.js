import logo from './logo.svg';
import './App.css';
import Routers from './Routers';
import { onAuthStateChanged } from "firebase/auth";
import { loggedInuser } from './actions/authAction'
import { onAuthStateChanged } from "firebase/auth";


function App() {
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) dispatch(loggedInuser(user))
      else { dispatch(loggedInuser(null)) }
    })
  }, [])

  return (
    <div className="App">
      <Routers/>
    </div>
  );
}

export default App;
