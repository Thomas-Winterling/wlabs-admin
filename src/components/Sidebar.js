import React from 'react'
import * as ReactBootStrap from "react-bootstrap"

// https://www.w3schools.com/howto/howto_css_icon_bar.asp

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="menu">
                <ReactBootStrap.Navbar collapseOnSelect expand="xl" variant="dark"> 
                <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
                <ReactBootStrap.Nav className="mr-auto sidebar-menu"> 
                    <ReactBootStrap.Nav.Link href="/">Dashboard</ReactBootStrap.Nav.Link>
                    <ReactBootStrap.Nav.Link href="#aboutme">Kalender</ReactBootStrap.Nav.Link>
                    <ReactBootStrap.Nav.Link href="#projects">Chat</ReactBootStrap.Nav.Link>
                    <ReactBootStrap.Nav.Link href="#skills">Emails</ReactBootStrap.Nav.Link>
                    <ReactBootStrap.Nav.Link href="#contact">Accounts</ReactBootStrap.Nav.Link>
                    <ReactBootStrap.Nav.Link href="#contact">Projekte</ReactBootStrap.Nav.Link>
                    <ReactBootStrap.Nav.Link href="#contact">Terminplaner</ReactBootStrap.Nav.Link>
                </ReactBootStrap.Nav>
                </ReactBootStrap.Navbar.Collapse>
                </ReactBootStrap.Navbar>
            </div>
        </div>
    )
}

export default Sidebar


