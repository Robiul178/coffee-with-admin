import { FaAd, FaBook, FaCalendar, FaEnvelope, FaHome, FaList, FaSearch, FaShoppingCart, FaUsers, FaUtensils } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCarts from "../../Hooks/useCarts";
import useAdmin from "../../Hooks/useAdmin";

const DashBord = () => {

    const [carts] = useCarts()

    const [isAdmin] = useAdmin();

    return (
        <div className="flex">



            {/* dashboard side bar */}
            <div className="w-64 sticky top-1 min-h-screen bg-orange-400">
                <ul className="menu p-4">
                    {isAdmin ? <>
                        <li>
                            <NavLink to="/dashboard">
                                <FaHome></FaHome>
                                Admin Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard/addItems">
                                <FaUtensils></FaUtensils>
                                Add Items</NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard/manageItems">
                                <FaList></FaList>
                                Manage Items</NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard/bookings">
                                <FaBook></FaBook>
                                Manage Bookings</NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard/users">
                                <FaUsers></FaUsers>
                                All Users</NavLink>
                        </li>
                    </>
                        :
                        <>
                            <li>
                                <NavLink to="/">
                                    <FaHome></FaHome>
                                    User Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/reservation">
                                    <FaCalendar></FaCalendar>
                                    Reservation</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/cart">
                                    <FaShoppingCart></FaShoppingCart>
                                    My Cart
                                    ({carts.length})
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/review">
                                    <FaAd></FaAd>
                                    Add a Review</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/bookings">
                                    <FaList></FaList>
                                    My Bookings</NavLink>
                            </li>
                        </>
                    }
                    {/* shared nav links */}
                    <div className="divider"></div>
                    <li>
                        <NavLink to="/">
                            <FaHome></FaHome>
                            Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/order/salad">
                            <FaSearch></FaSearch>
                            Menu</NavLink>
                    </li>
                    <li>
                        <NavLink to="/order/contact">
                            <FaEnvelope></FaEnvelope>
                            Contact</NavLink>
                    </li>
                </ul>
            </div>
            {/* dashboard content */}
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashBord;