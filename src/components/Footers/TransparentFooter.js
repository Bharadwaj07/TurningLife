/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

function TransparentFooter() {
  return (
    <footer className="footer">
      <Container>
        <div className="copyright" id="copyright">
          © {new Date().getFullYear()}, Designed and Coded by{" "}
          
            Bharath and Team MCA ,PES University
          
          
        </div>
      </Container>
    </footer>
  );
}

export default TransparentFooter;
