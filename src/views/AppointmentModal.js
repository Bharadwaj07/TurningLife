import React from 'react';
import "./AppointmentModal.css";
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
  } from "reactstrap";
function AppointmentModal(props){
   const {open,closeModal,nextStep,prevStep,step} =props
return(
    <Modal isOpen={open} className='login-modal'>
        <ModalHeader>Get Appointment</ModalHeader>
        <ModalBody>
            {props.children}
        </ModalBody>
        <ModalFooter>
            {renderStep(
                step,nextStep,prevStep,closeModal
            )}
        </ModalFooter>
    </Modal>
)

}
export default AppointmentModal;


function renderStep(step,nextStep,prevStep,closeModal){
    switch(step){
        case 1:
            return(
                <>
                <Button color="secondary" onClick={closeModal}>Cancel</Button>{' '}
                <Button color="info" onClick={nextStep}>Next</Button>
                </>
            );
        case 2:
            return(
                <>
                    <Button color="secondary" onClick={prevStep}>Back</Button>{' '}
                    <Button color="info" onClick={nextStep}>Next</Button>
                </>
            );
        case 3:
            return(
                <>
                <Button color="secondary" onClick={prevStep}>Back</Button>{' '}
                {/* <Button color="info" onClick={closeModal}>Cancel</Button> */}
                </>
            )
    }

}

// function renderPagination(index,len,Next,Prev,Close){
//     if(index ===0){
//         return (
            // <>
            // <Button color="secondary" onClick={Close}>Cancel</Button>{' '}
            // <Button color="info" onClick={Next}>Next</Button>
            // </>
//         )
//     }
//     if(index >0 && index <len-1){
//         return(
            // <>
            // <Button color="secondary" onClick={Prev}>Back</Button>{' '}
            // <Button color="info" onClick={Next}>Next</Button>
            // </>
//         )
//     }
//     if(index===len-1){
//         return(
//             <>
//             <Button color="secondary" onClick={Prev}>Back</Button>{' '}
//             <Button color="primary" onClick={Close}>Cancel</Button>
//             </>
//         )
//     }

// }