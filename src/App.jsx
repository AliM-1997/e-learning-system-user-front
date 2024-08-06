import "./styles/utilities.css";
import "./styles/colors.css";
import "./styles/index.css";
import React from "react";
import Layout from "./components/Layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import Signup from "./pages/signup/Signup";
import Enrollment from "./pages/enrollClass/Enrollment";
import DownloadFile from "./pages/downloadFile/DownloadFile";
import WithDraw from "./pages/withDraw/WithDraw";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/download-file" element={<DownloadFile />} />
            <Route path="/enroll" element={<Enrollment />} />
            <Route path="/withdrawal" element={<WithDraw />} />
          </Route>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
