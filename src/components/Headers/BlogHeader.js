import React from "react";

// reactstrap components
import {  Container } from "reactstrap";



// core components

function BlogHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });
  return (
    <>
      <div className="page-header clear-filter" filter-color="blue">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/anne-lsat-blog-writing-1.jpg") + ")"
          }}
          ref={pageHeader}
        ></div>
        <div className="content-center">
          <Container>
            <div className="post-heading text-center">
              <h1>Man must explore, and this is exploration at its greatest</h1>
              <h2 className="subheading">Problems look mighty small from 150 miles up</h2>
              <span className="meta">Posted by <a href="#">Start Bootstrap</a> on August 24, 2014</span>
            </div>
            
          </Container>
        </div>
      </div>
    </>
  );
}

export default BlogHeader;
