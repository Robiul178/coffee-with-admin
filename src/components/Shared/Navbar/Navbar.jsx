import { Link, NavLink } from "react-router-dom";
import { CgProfile } from "react-icons/cg";

import { Popover, Position, Menu, PeopleIcon, Button } from 'evergreen-ui'


const Navbar = () => {

    const links = <>
        <li>
            <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "border border-green-500" : ""
                }
            >
                HOME
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/contactus"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "border border-green-500" : ""
                }
            >
                CONTACTUS
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/dashbord"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "border border-green-500" : ""
                }
            >
                DASHBORD
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "border border-green-500" : ""
                }
            >
                OUR MENU
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/ourShop"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "border border-green-500" : ""
                }
            >
                OUR SHOP
            </NavLink>
        </li>
    </>

    return (
        <div>
            <div className="navbar max-w-screen-xl fixed bg-opacity-25 bg-black text-white z-10">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu text-white menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Bistro Boss</a>
                </div>
                <div className="navbar-end hidden">

                </div>
                <div className="navbar-end  lg:flex">
                    <ul className="menu menu-horizontal px-1 text-white">
                        {links}
                    </ul>


                    <div>
                        <Popover
                            position={Position.BOTTOM_LEFT}
                            content={
                                <Menu>
                                    <Menu.Group>
                                        <Menu.Item icon={PeopleIcon}>
                                            <Link to='/login'>
                                                <button>Login</button>
                                            </Link>
                                        </Menu.Item>
                                        <Menu.Item icon={PeopleIcon}>
                                            <Link to='/registration'>
                                                <button>Registration</button>
                                            </Link>
                                        </Menu.Item>
                                    </Menu.Group>
                                </Menu>
                            }
                        >
                            <Button className="flex item-center" marginRight={16}>
                                <CgProfile className="text-3xl ms-3" />
                            </Button>
                        </Popover>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Navbar;