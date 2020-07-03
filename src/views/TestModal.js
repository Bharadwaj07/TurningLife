import React from 'react';
import './TestModal.css';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter
  } from "reactstrap";
function TestModal(props){
    const {open,closeModal,step,nextStep,prevStep} =props
    return(
        <>
        <Modal isOpen={open} className='test-modal' size="lg">
          <ModalHeader>Instructions</ModalHeader>
            <ModalBody>
              {props.children}
            </ModalBody>
            <ModalFooter>
                {renderStep(
                    step,nextStep,prevStep,closeModal
                )}
            </ModalFooter>
        </Modal>
        </>
    )

}
export default TestModal;


function renderStep(step,nextStep,prevStep,closeModal){
  switch(true){
    case (step ===0):
      return(
        <>
              <Button color="secondary" onClick={closeModal}>Cancel</Button>{' '}
              <Button color="info" onClick={nextStep}>Next</Button>
        </>
      );
    case (step <10):
      return(
        <>
              <Button color="secondary" onClick={prevStep}>Back</Button>{' '}
              <Button color="info" onClick={nextStep}>Next</Button>
        </>
      );
    
  }
}