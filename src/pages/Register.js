import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const HandleRegister = async (e) => {
    e.preventDefault()
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      navigate("/login", { replace: true });
      console.log(user);
    } catch (e) {
      console.log(e);
    }

    setEmail("");
    setPassword("");
  };
  
  return (
    <div>
      <form>
        <input type="text" 
        value={email}
        placeholder="Email here..."
        onChange={(e) => setEmail(e.target.value)} />
<br/>
<br/>
<br/>
        <input type="password"
        value={password}
        placeholder="Password here..."
        onChange={(e) => setPassword(e.target.value)} />
        <input type="submit" onClick={HandleRegister} />
      </form>
    </div>
  );
};

export default Register;
