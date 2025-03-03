import { Navbar, Nav, Container, NavbarBrand } from "react-bootstrap"
import { FaShoppingCart, FaUser } from "react-icons/fa"
import { Link } from "react-router-dom"

function Header() {
    return (
        <header>
            <Navbar bg="dark" data-bs-theme="dark" expand="lg" collapseOnSelect>
                <Container>
                    <NavbarBrand as={Link} to="/">
                        ProShop
                    </NavbarBrand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={Link} to="/cart">
                                <FaShoppingCart /> Cart
                            </Nav.Link>
                            <Nav.Link as={Link} to="/login">
                                <FaUser /> Sign In
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
