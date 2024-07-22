import React from "react";
import { useAuth } from "./useAuthentication";
import { Navigate } from "react-router-dom";

const ValidUser = ({ children }) => {// manage if use loggedin then display component otherwise navigate to dashbaord (without user)
    const { user } = useAuth()
    return (
        user
            ?
            <>
                {children}
            </>
            :
            <Navigate to={'/'} />
    )

};

export default ValidUser;
