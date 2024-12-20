import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import AllUsers from "./components/AllUsers";
import CreateUser from "./components/CreateUser";
import UserDetails from "./components/UserDetails";
import Modal from "./components/Modal";
import PendingDues from "./components/PendingDues";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/allusers" element={<AllUsers />}></Route>
        <Route path="/createUser" element={<CreateUser />}></Route>
        <Route path="/userDetails" element={<UserDetails />}></Route>
        <Route path="/modal" element={<Modal />}></Route>
        <Route
          path="/pendingDues"
          element={<PendingDues dues={1000} />}
        ></Route>
      </Routes>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
