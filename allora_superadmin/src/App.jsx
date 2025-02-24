import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

import Homepage from "./pages/common_pages/Homepage";
import Login from "./pages/user_pages/Login";
import Register from "./pages/user_pages/Register";
import UserDashboard from "./pages/user_pages/UserDashboard";
import Header from "./components/header_components/Header";
import Footer from "./components/header_components/Footer";
import PageNotFound from "./pages/common_pages/PageNotFound";
import ContactUs from "./pages/common_pages/ContactUs";

function App() {
  return (
    <>
      <ToastContainer />
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/home" element={<Homepage />}></Route>
          <Route path="/homepage" element={<Homepage />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/user-dashboard" element={<UserDashboard />}></Route>
          <Route path="/contact-us" element={<ContactUs />}></Route>

          <Route path="/page-not-found" element={<PageNotFound />}></Route>
          <Route path="/*" element={<PageNotFound />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
