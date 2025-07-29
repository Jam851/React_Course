import { Outlet } from "react-router-dom";
import Home from "./Home";
import Settings from "./Settings";

function Dashboard(){
    return (
        <>
        <h1>Dashboard Page</h1>
        <Outlet />
        </>
    )
}

export default Dashboard