import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const DashboardWithoutUser = () => {
  const navigate = useNavigate()
  return <div>
    <Button onClick={() => navigate('/signin')}>Log In</Button>
  </div>;
};

export default DashboardWithoutUser;
