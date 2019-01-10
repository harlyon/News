import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Container,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem } from 'reactstrap';


class Navba extends Component {

  state = {
    isOpen: false
  }

  toggle= () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
      <Navbar color="light" light expand="md">
       <Container>
        <NavbarBrand href="/">NewsLine</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Link to="/" className="a">Top News</Link>
              {/* <NavLink href="/">Top News</NavLink> */}
            </NavItem>
            <NavItem>
            <Link to="/business" className="a">Business</Link>
              {/* <NavLink href="/business">Business</NavLink> */}
            </NavItem>
            <NavItem>
            <Link to="/politics" className="a">Politics</Link>
              {/* <NavLink href="/politics">Politics</NavLink> */}
            </NavItem>
            <NavItem>
            <Link to="/health" className="a">Health</Link>
              {/* <NavLink href="/health">Health</NavLink> */}
            </NavItem>
            <NavItem>
            <Link to="/travel" className="a">Travel</Link>
              {/* <NavLink href="/travel">Travel</NavLink> */}
            </NavItem>
            <NavItem>
            <Link to="/culture" className="a">Culture</Link>
              {/* <NavLink href="/culture">Culture</NavLink> */}
            </NavItem>
            <NavItem>
            <Link to="/science" className="a">Science</Link>
              {/* <NavLink href="/science">Science</NavLink> */}
            </NavItem>
            <NavItem>
            <Link to="/technology" className="a">Technology</Link>
              {/* <NavLink href="/technology">Technology</NavLink> */}
            </NavItem>
            <NavItem>
            <Link to="/music" className="a">Music</Link>
              {/* <NavLink href="/music">Music</NavLink> */}
            </NavItem>
          </Nav>
        </Collapse>
        </Container>
      </Navbar>
    </div>
    );
  }
}

export default Navba;