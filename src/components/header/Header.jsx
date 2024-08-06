import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../button/Button";
import "./header.css";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className=" flex header my-nav ">
      <div className="logo bold ">e-learning</div>
      <div className="flex link-container">
        <Link className="nav-link" to="/enroll">
          enroll
        </Link>
        <Link className="nav-link" to="/"></Link>
        <Link className="nav-link" to="/download-file">
          download File
        </Link>
        <Link className="nav-link" to="/withDraw">
          Withdrawal Requests
        </Link>
      </div>
      <Button
        text="Log In"
        bgColor="green-bg"
        width="width-50 px"
        onMouseClick={() => {
          navigate("/login");
        }}
      ></Button>
      <Button
        text="signup"
        bgColor="white-bg"
        width="width-50px"
        onMouseClick={() => {
          navigate("/signup");
        }}
      ></Button>
    </div>
  );
};

export default Header;
