import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";

const Routes = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
        </div>
    );
};

export default Routes;