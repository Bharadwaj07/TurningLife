/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

function DarkFooter() {
  return (
    <footer className="footer" data-background-color="black">
      <Container>
        <div className="copyright" id="copyright">
          © {new Date().getFullYear()}, Designed and Coded by{" "}
          
            Bharath and Team MCA ,PES University
          
          
        </div>
      </Container>
    </footer>
  );
}

export default DarkFooter;
