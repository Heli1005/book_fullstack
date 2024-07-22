import React from "react";
import { useAuth } from "./authentication/useAuthentication";
import { Container } from "react-bootstrap";

const DashboardWithUser = () => {
  const {user}=useAuth()
  return <div className="bg-gradient-to-r from-teal-500 to-slate-400 w-full vh-100 d-flex align-items-center">
    <Container className=" text-center ">
      <h2 className="mb-4 fs-1 font-medium text-teal-700 text-capitalize">{`Welcome ${user.name} to Book Dashboard`}</h2>
      {/* <p className="mb-4 font-mono">Explore a wide range of books and manage your collection efficiently. To get the best experience, please log in or register if you don't have an account.</p>
      <div>
        <Link to="/signin" className="btn btn-primary mr-3">Log In</Link>
        <Link to="/signup" className="btn btn-secondary">Register</Link>
      </div> */}
    </Container>
  </div>
};

export default DashboardWithUser;
