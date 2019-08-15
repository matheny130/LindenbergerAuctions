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
                  <div className="link">
                    <Col>
                      <NavItem>
                        <NavLink href="/"><div className="nav">419-668-0000</div></NavLink>
                      </NavItem>
                    </Col>
                  </div>
                  <div className="link">
                    <Col>
                        <NavItem>
                          <NavLink href="/auctioneerservices"><div className="nav">Auctioneer Services</div></NavLink>
                        </NavItem>
                    </Col>
                  </div>
                  <div className="link">
                      <Col>
                          <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav>
                              <div className="nav">Items for Sale</div>
                        </DropdownToggle>
                          <div className="drop">
                              <DropdownMenu center>
                                <DropdownItem href="/products" color-dark>
                                  <div className="dropLink">Lamps</div>
                                </DropdownItem>
                                <DropdownItem href="/products" color-dark>
                                  Furniture
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem href="/products" color-dark>
                                  Miscellaneous
                                </DropdownItem>
                              </DropdownMenu>
                          </div>
                          </UncontrolledDropdown>
                      </Col>
                    </div>
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