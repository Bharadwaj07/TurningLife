import React from 'react';
import {Button,ModalBody,ModalHeader,ModalFooter} from 'reactstrap';

function DInstruction(props) {
    const {closeModal,setInstructionPage} = props
    return (

       <>
        <ModalHeader>Instruction </ModalHeader>
            <ModalBody>
            <div>
                
                <h5>Beck  Depression Inventory</h5>
                <p>
                    Everyone gets the blues. Feeling sadness, loneliness, or grief when one go through a difficult life experience is part of being human. 
                    Go through the statements given below and mark according to what you  are going  through at least  for the past two weeks  in your life
                </p>
        
            </div>

            </ModalBody>
        <ModalFooter> 
            <Button onClick={closeModal}>Quit</Button>
                Are you ready to take test? 
            <Button color='info' onClick={setInstructionPage}>Yes</Button>
        </ModalFooter>
       </>
        
    )
}

export default DInstruction
