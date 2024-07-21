import React, { createContext, useContext, useState } from "react";

const UserContext = createContext()

const Authentication = ({ children }) => { // this component managed for loggedin user
  
  const [user, setUser] = useState(null);

  const handleLogin = (tempuser) => {
    setUser(tempuser)
  }
  const handleLogout = () => {
    setUser(null)
  }

  return <UserContext.Provider value={{ user, handleLogin, handleLogout }}>
    {children}
  </UserContext.Provider>
}

export default Authentication;

export const useAuth = () => useContext(UserContext) 