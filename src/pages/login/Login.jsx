import React, { useState } from "react";
import Input from "../../components/input/input";
import "./Login.css";
import Button from "../../components/button/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authRemote } from "../../data_source/remote/auth_remote";
import { authLocal } from "../../data_source/local/auth_local";
import { loadUser } from "../../redux/userSlice";
const Login = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (username === "" || password === "") {
      alert("Fields cannot be empty");
      return;
    }
    const data = await authRemote.login(username, password);
    console.log(data);
    if (data.token) {
      authLocal.saveToken(data.token);
      authLocal.saveid(data.user._id);
      dispatch(
        loadUser({
          username: data.user.username,
          id: data.user._id,
        })
      );
      navigate("/home");
    } else {
      console.log("Login failed");
    }
  };

  return (
    <div className="page flex column center">
      <div className="flex column center white-bg rounded auth-box">
        <h3>Login</h3>
        <Input
          name="username"
          type="text"
          placeholder="@username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          name="Password"
          placeholder="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button text={"Login"} onMouseClick={handleLogin}></Button>
      </div>
    </div>
  );
};

export default Login;
