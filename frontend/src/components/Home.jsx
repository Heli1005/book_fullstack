import React from "react";
import DashboardWithUser from "./DashboardWithUser";
import DashboardWithoutUser from "./DashboardWithoutUser";

const Home = () => {
    let user = true

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
