import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
    return(
        <nav>
            <Link
                to="/"
                className="nav-link"
            >
                Home
            </Link>
            <Link
                to="/dogs"
                className="nav-link"
            >
                Adopt a Dog
            </Link>
            <Link
                to="/cats"
                className="nav-link"
            >
                Adopt a Cat
            </Link>
        </nav>
    )
}

export default NavBar;