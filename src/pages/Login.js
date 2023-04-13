import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const HandleLogin = async (e) => {
    e.preventDefault();
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      navigate("/seehomesearch", { replace: true });
      console.log(user);
    } catch (e) {
      console.log(e);
    }

    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <h2>Login here</h2>
      <form>
        <input
          type="text"
          value={email}
          placeholder="Email here..."
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <br />
        <br />
        <input
          type="password"
          value={password}
          placeholder="Password here..."
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type="submit" onClick={HandleLogin} />
      </form>
      <Link to={'/register'}>
        <h2>register here</h2>
      </Link>
    </div>
  );
};

export default Login;
