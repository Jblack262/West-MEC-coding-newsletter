import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {GiHamburgerMenu} from 'react-icons/gi'

function Navbar() {
    const [open, setOpen] = useState(false);
    return (
        <nav>
            <div className="row">
                <Link to="/" className="imgContainer">
                    <img src={require("../Student_Portraits/Coding_blue.png")} alt="" />
                </Link>
                <GiHamburgerMenu className="menuButton" onClick={() => setOpen(!open)}/>
            </div>
            <ul className={"links " + (open ? "open" : "")}>
                <li>
                    <Link to="/" onClick={() => setOpen(false)}>Home</Link>
                </li>
                <li>
                    <Link to="/blog" onClick={() => setOpen(false)}>Blog</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
