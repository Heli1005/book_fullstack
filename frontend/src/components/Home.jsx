import React from "react";
import DashboardWithUser from "./DashboardWithUser";
import DashboardWithoutUser from "./DashboardWithoutUser";
import { useAuth } from "./authentication/useAuthentication";

const Home = () => {
    let {user} = useAuth()

    return <>
        {
            user
                ?
                <DashboardWithUser />
                :
                <DashboardWithoutUser />
        }
    </>;
};

export default Home;
