import React from "react";
import {withRouter} from 'react-router-dom';
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
} from "reactstrap";

function ThoughtNavBar(props) {
  const handleClick =() =>{
    props.history.goBack();
  }
  return (
    <>
      <Navbar className={"fixed-top "} color="info" expand="lg">
        <Container>
          <div className="navbar-translate">
            
            <Nav navbar>
                <NavItem>
                    <NavLink
                      onClick={handleClick}
                    > 
                    Back              
                    </NavLink>
                </NavItem>
            </Nav>
          </div>
        </Container>
      </Navbar>
    </>
  );
}

export default withRouter(ThoughtNavBar);
