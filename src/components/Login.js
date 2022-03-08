import React, { useState } from "react";
import "./Login.css";
import bg from "../assets/bg.svg";
import { useNavigate } from "react-router-dom";
const Login = () => {
  let navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === "randrboiz") {
      navigate("/adsja78sdiuasdyasdkha87878syad9a9");
    } else {
      setPassword("");
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 1000);
    }
  };
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  return (
    <div className="main">
      <img src={bg} alt="" />
      <form onSubmit={handleSubmit}>
        {error && (
          <div className="error">
            <h4>You had one JOB!!</h4>
          </div>
        )}
        <input
          type="password"
          name="pass"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
