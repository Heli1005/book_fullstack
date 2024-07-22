import React, { createContext, useContext, useState } from "react";
import UseLocalStorage from "../commonComponents/useLocalStorage";


const UserContext = createContext()

const Authentication = ({ children }) => { // this component managed for loggedin user (for authentication purpose)

  const [loggedUser, setLoggedUser] = UseLocalStorage('loggedUser', null)
  const [user, setUser] = useState(loggedUser ? loggedUser : null);

  const handleLogin = (tempuser) => {
    setUser(tempuser)
    setLoggedUser(tempuser)
  }
  const handleLogout = () => {
    setUser(null)
    setLoggedUser(null)
  }

  return <UserContext.Provider value={{ user, handleLogin, handleLogout }}>
    {children}
  </UserContext.Provider>
}

export default Authentication;

export const useAuth = () => useContext(UserContext) 