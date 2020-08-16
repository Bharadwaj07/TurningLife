import React from "react";

// reactstrap components
import {  Container,Button, Modal } from "reactstrap";
import SEInstruction from '../../views/Test/SelfEsteem/SEInstruction';
import SEQuestions from '../../views/Test/SelfEsteem/SEQuestions';
import DInstruction from '../../views/Test/DepressionLevel/DInstruction';
import DepreessionLevelTest from '../../views/Test/DepressionLevel/DQuestions';
import SelfEsteem from '../../views/Test/SelfEsteem/SelfEsteem';
import Depression from "../../views/Test/DepressionLevel/Depression";


// core components

function TestHeader() { 
    let pageHeader = React.createRef();
    const [selfEsteem,setSelfEsteem] = React.useState(false);
    const [depression,setDepression] = React.useState(false);
    const [isInstructionPage, setInstructionPage] =React.useState(true);
    const closeSelfEsteem  = () => setSelfEsteem(!selfEsteem);
    const closeDepression = () => setDepression(!depression);

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
    
            <Container>
             
              <h2 className="title">Turning Life </h2>
              <div className="text-center">
                  <h3>Check your self esteem and depression level...</h3>
                 
                <div className="test-buttons">
                        <Button className="btn-round" color="neutral" outline type="button"
                          onClick={() => setSelfEsteem(!selfEsteem)}
                        >
                        Self Esteem Test
                        <Modal
                          isOpen={selfEsteem}
                        >
                            {renderSelfEsteem(
                              closeSelfEsteem,
                              isInstructionPage,
                              setInstructionPage
                            )}
                        </Modal>
                            
                        </Button>    
                        <Button className="btn-round" color="neutral" outline type="button"
                          onClick={() => setDepression(!depression)}
                        >
                        Depression level Test
                              <Modal 
                              className="test-modal"
                              isOpen={depression}>
                                {renderDepression(
                                  closeDepression,
                                  isInstructionPage,
                                  setInstructionPage
                                )}
                              </Modal>
                            
                        </Button>  
                </div>         
              </div>
            </Container>
          </div>
        </div>
      </>
    );
  }
  



  function renderSelfEsteem(closeModal,isInstructionPage,setInstructionPage){
    if( isInstructionPage ===true){
      return <SEInstruction closeModal={closeModal} setInstructionPage={setInstructionPage}/>
    }
    else {
      return <SelfEsteem
                questions={SEQuestions}
                />
    }
  }
  function renderDepression(closeModal,isInstructionPage,setInstructionPage){
    if( isInstructionPage ===true){
      return <DInstruction
              setInstructionPage={setInstructionPage}
              closeModal={closeModal}
              />
    }
    else {
      return <Depression
                questions={DepreessionLevelTest}
                />
    }
  }
  
  
export default TestHeader;
