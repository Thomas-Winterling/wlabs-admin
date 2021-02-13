import React from 'react'
import * as ReactBootStrap from "react-bootstrap"
import MenuIcon from '@material-ui/icons/Menu'
import PhoneIcon from '@material-ui/icons/Phone'
import SettingsIcon from '@material-ui/icons/Settings';
import MessageIcon from '@material-ui/icons/Message';
import SearchIcon from '@material-ui/icons/Search';
import { Avatar } from '@material-ui/core'

function Header() {
    return (
        <header>
            <nav>
                <div className="navigation">
                    <div className="logo">
                        <MenuIcon />
                        <h2>CRM</h2>
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
                        <PhoneIcon />
                        <SettingsIcon />
                        <MessageIcon />
                        <SearchIcon />
                    </div>
                    <div className="user">
                        <Avatar alt="Cindy Baker" src="2.jpg" />
                        <span>Cindy Baker</span>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header
