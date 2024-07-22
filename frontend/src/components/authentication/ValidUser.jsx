import React from "react";
import { useAuth } from "./useAuthentication";
import { Navigate } from "react-router-dom";

const ValidUser = ({ children }) => {
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
