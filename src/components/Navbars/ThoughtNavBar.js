import React from "react";

import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
} from "reactstrap";

function ThoughtNavBar() {

  return (
    <>
      <Navbar className={"fixed-top "} color="info" expand="lg">
        <Container>
          <div className="navbar-translate">
            <NavbarBrand
              id="navbar-brand"
            >
              Back
            </NavbarBrand>
          </div>
        </Container>
      </Navbar>
    </>
  );
}

export default ThoughtNavBar;
