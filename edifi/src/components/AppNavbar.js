import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
} from 'reactstrap';

class AppNavBar extends Component {
    state = {
        isOpen: false
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <div>
                <Navbar color="primary" dark expand="sm" className="mb-5">
                    <Container>
                        <NavbarBrand href="/">Edifi</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="mr-auto" navbar>
                            <NavItem>
                                    <NavLink href="http://localhost:3000/Search">Search</NavLink>
                                </NavItem>
                                
                            </Nav>
                            <Nav className="ml-auto" navbar>
                            <NavItem>
                                    <NavLink href="http://localhost:3000/Profile">Brandon Wilson</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }
}


export default AppNavBar;