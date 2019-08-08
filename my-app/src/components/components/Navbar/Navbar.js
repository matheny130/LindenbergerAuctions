import React from "react";
import history from "../../../history";
import { Collapse, Navbar, NavbarBrand, NavbarToggler, Nav, NavItem, NavLink, Button } from 'reactstrap';
import './Navbar.css'

class NavExample extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
    goTo(route) {
      this.props.history.replace(`/${route}`)
    }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }


  render() {

    return (
      <div id="nav">
        <Navbar color="faded" light>

          <NavbarBrand href="/" className="text-center"><p id="logo"></p></NavbarBrand>

          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>

                <NavLink href="/">Home</NavLink>

              </NavItem>
              <NavItem>

                <NavLink href="/Products">View Quizzes</NavLink>

              </NavItem>
              <NavItem>
                <NavLink href="/newProduct">Create a Quiz</NavLink>
              </NavItem>
            </Nav>
          </Collapse>

        </Navbar>
      </div>
    );
  }



}

export default NavExample;