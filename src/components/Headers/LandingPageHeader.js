import React from "react";

// reactstrap components
import { Button, Container } from "reactstrap";
import Appointment from "views/Appointment";
import BrainThought from "views/BrainThpught/BrainThought";

// core components

function LandingPageHeader() {
  let pageHeader = React.createRef();

  const [opneLogin,setAppointmentModal] = React.useState(false);


  const closeAPModal = () =>{
    setAppointmentModal(!opneLogin)
  }
  // const closeTestModal =()=>{
  //   setTestModal(!openTest);
  // }
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
            backgroundImage: "url(" + require("assets/img/landingpage.jpg") + ")"
          }}
          ref={pageHeader}
        ></div>
        <div className="content-center">
        <BrainThought/>
          <Container>
           
            <h1 className="title">Turning Life </h1>
            <div className="text-center">
                <h3>We offers an integrated program for</h3>
               
              <Button className="btn-round" color="neutral" outline type="button"
                onClick={()=>setAppointmentModal(true)}
              >
                Get Appointment 
                <Appointment  open={opneLogin} closeModal={closeAPModal} />
              </Button>              
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}

export default LandingPageHeader;
