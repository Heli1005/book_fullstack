import React from "react";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import SignIn from "./components/authentication/SignIn";
import SignUp from "./components/authentication/SignUp";
import BookList from "./components/book/BookList";
import ErrorPage from "./ErrorPage";
import Authentication from "./components/authentication/useAuthentication";

const App = () => {
  return <>
    <Authentication>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/books" element={<BookList />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Authentication>
  </>;
};

export default App;
