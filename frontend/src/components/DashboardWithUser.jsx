import React from "react";
import { useAuth } from "./authentication/useAuthentication";

const DashboardWithUser = () => {
  const {user}=useAuth()
  return <div>
    <h2>{user.name}</h2>
  </div>;
};

export default DashboardWithUser;
