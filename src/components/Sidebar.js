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
                    <ReactBootStrap.Nav.Link href="/calendar">Kalender</ReactBootStrap.Nav.Link>
                    <ReactBootStrap.Nav.Link href="/chat">Chat</ReactBootStrap.Nav.Link>
                    <ReactBootStrap.Nav.Link href="/emails">Emails</ReactBootStrap.Nav.Link>
                    <ReactBootStrap.Nav.Link href="/accounts">Accounts</ReactBootStrap.Nav.Link>
                    <ReactBootStrap.Nav.Link href="/projects">Projekte</ReactBootStrap.Nav.Link>
                    <ReactBootStrap.Nav.Link href="/terminplaner">Terminplaner</ReactBootStrap.Nav.Link>
                </ReactBootStrap.Nav>
                </ReactBootStrap.Navbar.Collapse>
                </ReactBootStrap.Navbar>
            </div>
        </div>
    )
}

export default Sidebar


