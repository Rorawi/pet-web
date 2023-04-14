import React, { useState } from "react";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";
import { useNavigate } from "react-router-dom";
import dog from "../components/images/good-doggy.png";
import "../pages/register.css";
import { FaPaw } from "react-icons/fa";

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const HandleRegister = async (e) => {
    e.preventDefault();
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      navigate("/seehomesearch", { replace: true });
      console.log(user);
    } catch (e) {
      console.log(e);
      alert('Invalid email/password')
    }

    setName("");
    setEmail("");
    setPassword("");
    console.log(name);
  };

  return (
    <div className="container">
      <a href="#" className="brandName">
        <FaPaw className="paw-icon" />
        PetPals.
      </a>
      <div className="form-div">
        <div className="form">
          <img src={dog} alt="" />
          <form>
            <h2>Register here</h2>
            <input
              type="text"
              value={name}
              placeholder="Name here..."
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              value={email}
              placeholder="Email here..."
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              value={password}
              placeholder="Password here..."
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={HandleRegister} className="submit">
              Submit
            </button>
            <Link to={'/login'} className="register-link">Already have an account?Log in</Link>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
