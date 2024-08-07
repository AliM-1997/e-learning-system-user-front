import "./styles/utilities.css";
import "./styles/colors.css";
import "./styles/index.css";
import React from "react";
import Layout from "./components/Layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import Signup from "./pages/signup/Signup";
import WithDraw from "./pages/withDraw/WithDraw";
import { Provider } from "react-redux";
import store from "./redux/store";
import Requests from "./pages/requests/Requests";
import FileList from "./pages/fileList/FileList";

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
            <Route path="/list-files" element={<FileList />} />
            <Route path="/request" element={<Requests />} />
            <Route path="/withdrawal" element={<WithDraw />} />
          </Route>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
