import React from "react";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import SignIn from "./components/authentication/SignIn";
import SignUp from "./components/authentication/SignUp";
import BookList from "./components/book/BookList";
import ErrorPage from "./ErrorPage";
import Authentication from "./components/authentication/useAuthentication";
import ValidUser from "./components/authentication/ValidUser";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return <div className="bg-slate-100  vh-100">
    <Authentication>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/books" element={<ValidUser><BookList /></ValidUser>} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Authentication>
    <ToastContainer
      position="bottom-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
  </div>
};

export default App;
