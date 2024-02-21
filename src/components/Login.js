import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState();
  const [password, setPassword] = useState();
  const [vlaue, setValue] = useState(false);
  const Navigate = () => {
    navigate("/dash", { state: user });
  };
  const uncorrect = () => {
    return setValue(true);
  };
  return (
    <div className="container">
      <form>
        <div>
          <label>Username</label>
          <input
            placeholder="Username"
            required="required"
            onChange={(e) => setUser(e.target.value)}
          />
        </div>
        <div>
          <label>Password</label>

          <input
            placeholder="Password"
            required="required"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {vlaue && <div>Password uncorrect</div>}
        <div>
          <button
            onClick={(e) => {
              e.preventDefault();
              {
                password == "123456" ? Navigate() : uncorrect();
              }
            }}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
