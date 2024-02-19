import React, { Children } from "react";
import { Link, Outlet } from "react-router-dom";

const Navbar = ({children}) => {
    return (
        <nav>
            <ul>
                <li><Link to="/admin">Admin</Link></li>
                <li><Link to="/order">Order</Link></li>
            </ul>
            <div>
                <Outlet/>
            </div>
        </nav>
    );
}

export default Navbar;
