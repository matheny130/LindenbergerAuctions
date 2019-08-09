import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Collapse, Navbar, NavbarBrand, NavbarToggler, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Row, Col, Container } from 'reactstrap';
import './Navbar.css'

class NavExample extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div className="app">
        <Container fluid>
              <Navbar expand="md">
                <Row>

                  <NavbarToggler onClick={this.toggle} />
                  <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                  <Col xs="10">
                    <NavItem>
                      <NavLink href="/">419-668-0000</NavLink>
                    </NavItem>
                  </Col>
                    <Col xs="10">
                        <NavItem>
                          <NavLink href="/components/">Home</NavLink>
                        </NavItem>
                    </Col>
                    <Col xs="10">
                        <NavItem>
                          <NavLink href="https://github.com/reactstrap/reactstrap">Auctioneer Services</NavLink>
                        </NavItem>
                    </Col>
                    <Col xs="10">
                        <UncontrolledDropdown nav inNavbar>
                          <DropdownToggle nav caret>
                            Items for Sale
                          </DropdownToggle>
                          <DropdownMenu right>
                            <DropdownItem>
                              Lamps
                            </DropdownItem>
                            <DropdownItem>
                              Furniture
                            </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>
                              Miscellaneous
                            </DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                  </Col>
                  </Nav>
                  </Collapse>
                </Row>
          </Navbar>
      </Container>
    </div>
    );
  }
}

export default NavExample;