import { Link, NavLink } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { FaCartPlus } from "react-icons/fa";
import { Popover, Position, Menu, PeopleIcon, Button } from 'evergreen-ui'
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import useCarts from '../../Hooks/useCarts'

const Navbar = () => {

    const { user, logOutUser } = useContext(AuthContext)
    const [carts] = useCarts()

    const handleLogOut = () => {
        logOutUser()
            .then(() => {
                // Sign-out successful.
            }).catch(() => {
                // An error happened.
            });
    }

    const links = <>
        <li>
            <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "border border-green-500 text-yellow-400" : ""
                }
            >
                HOME
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/contactus"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "border border-green-500 text-yellow-400" : ""
                }
            >
                CONTACTUS
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/dashbord"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "border border-green-500 text-yellow-400" : ""
                }
            >
                DASHBORD
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "border border-green-500 text-yellow-400" : ""
                }
            >
                OUR MENU
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/ourShop"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "border border-green-500 text-yellow-400" : ""
                }
            >
                <>
                    <div className="indicator">
                        <span className="indicator-item badge badge-neutral">+ {carts.length}</span>
                        <span className="flex">
                            <span className="p-1">OUR SHOP </span>
                            <span><FaCartPlus className="text-2xl mt-2" /></span>
                        </span>
                    </div>
                </>
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

                        <div>
                            {
                                user ? <>
                                    <button
                                        onClick={handleLogOut}
                                        className="btn btn-outline bg-yellow-500 border-0 border-b-4">Log Out</button>
                                </>
                                    :
                                    <>
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
                                            <Button className="flex item-center bg-blue-900" marginRight={16}>
                                                <CgProfile className="text-3xl ms-3" />
                                            </Button>
                                        </Popover>
                                    </>
                            }
                        </div>



                    </div>

                </div>
            </div>
        </div>
    );
};

export default Navbar;