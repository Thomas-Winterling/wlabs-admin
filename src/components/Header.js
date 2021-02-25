import React, { useState, useEffect } from "react"
import * as ReactBootStrap from "react-bootstrap"
import MenuIcon from '@material-ui/icons/Menu'
import { Avatar, IconButton } from '@material-ui/core';
import User from './popover/User'
import Phone from './popover/Phone'
import Settings from './popover/Settings'
import Message from './popover/Message'
import Email from './popover/Email'
import Calendar from './popover/Calendar'
import Search from './popover/Search'

function Header() {
    
    const [seed, setSeed] = useState("");

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, []);

    return (
        <header>
            <nav className="navigation">
                    <div className="logo">
                        <h2>CRM</h2>
                    </div>
                    <div className="sidebar-icon">
                        <IconButton>
                            <MenuIcon color="primary" />
                        </IconButton>
                    </div>
                    <div className="menu">
                        <ReactBootStrap.Navbar collapseOnSelect expand="xl" variant="dark"> 
                        <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
                        <ReactBootStrap.Nav className="mr-auto"> 
                            <ReactBootStrap.Nav.Link href="/">Home</ReactBootStrap.Nav.Link>
                            <ReactBootStrap.Nav.Link href="#aboutme">Über mich</ReactBootStrap.Nav.Link>
                            <ReactBootStrap.Nav.Link href="#projects">Webanwendungen</ReactBootStrap.Nav.Link>
                            <ReactBootStrap.Nav.Link href="#skills">Skills</ReactBootStrap.Nav.Link>
                            <ReactBootStrap.Nav.Link href="#contact">Kontakt</ReactBootStrap.Nav.Link>
                        </ReactBootStrap.Nav>
                        </ReactBootStrap.Navbar.Collapse>
                        </ReactBootStrap.Navbar>
                    </div>
                    <div className="icons">
                        <div>
                            <Calendar />
                        </div>
                        <div>
                            <Phone />
                        </div>
                        <div>
                            <Settings />
                        </div>
                        <div>
                            <Email />
                        </div>
                        <div>
                            <Message />
                        </div>
                        <div>
                            <Search />
                        </div>
                    </div>
                    <div className="user">
                        <Avatar src={`https://avatars.dicebear.com/api/avataaars/${seed}.svg`} />
                        <User />
                    </div> 
            </nav>
        </header>
    )
}

export default Header
