import * as React from 'react'
import './SSMenu.scss'
import { Navbar, NavDropdown, Nav } from 'react-bootstrap'

interface IMEnuProps{
    activeMenu:string;
}
export default class SSMenu extends React.Component {

    public render() {
        return (
            <div className="ss-menubar">
                <Navbar className="navbar navbar-inverse" expand="md" bg="drak" variant="dark">
                    <Navbar.Brand className="navbar-brand" href="/">WebSiteName</Navbar.Brand>
                    <Navbar.Toggle aria-controls="myNavbar" />
                    <Navbar.Collapse className="navbar-right" id="myNavbar">
                        <Nav className="mr-auto">
                            <Nav.Link href="/">Pag1</Nav.Link>
                            <Nav.Link href="/">Pag2</Nav.Link>
                            <Nav.Link href="/">Pag3</Nav.Link>
                            <NavDropdown id="drp-item" title="Product" class="nav-link-drop">
                                <NavDropdown.Item href="/">Page 1 1 </NavDropdown.Item>
                                <NavDropdown.Item href="/">Page 1 2 </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}