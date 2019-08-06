import React from "react";
import history from "../../history";
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
    const { isAuthenticated } = this.props.auth;
    return (

      <div id="nav">
        <Navbar color="faded" light>

          {
            !isAuthenticated() && (
              <Button
                id="qsLoginBtn"
                bsstyle="primary"
                className="btn-margin"
                onClick={this.login.bind(this)}
              >
                Log In
                  </Button>
            )
          }
          {
            isAuthenticated() && (
              <Button
                id="qsProfileBtn"
                bsstyle="primary"
                className="btn-margin"
                onClick={() =>history.replace("/profile")}
              >
                Your Profile
                  </Button>
            )
          }
          {
            isAuthenticated() && (
              <Button
                id="qsLogoutBtn"
                bsstyle="primary"
                className="btn-margin"
                onClick={this.logout.bind(this)}
              >
                Log Out

                  </Button>

            )
          }
          <NavbarBrand href="/" className="text-center"><p id="logo"></p></NavbarBrand>

          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>

                <NavLink href="#" onClick={() => history.replace("/")}><p id="link">Home</p></NavLink>

              </NavItem>
              <NavItem>

                <NavLink href="#" onClick={() => history.replace("/quizzes")}><p id="link">View Quizzes</p></NavLink>

              </NavItem>
              <NavItem>
                <NavLink href="#" onClick={() => history.replace("/newquiz")}><p id="link">Create a Quiz</p></NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }



}

export default NavExample;