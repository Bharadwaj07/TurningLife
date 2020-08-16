import React from 'react'
import {ModalBody,ModalHeader,ModalFooter,Button} from 'reactstrap'
function SEInstruction(props) {
    const {closeModal,setInstructionPage} =props

    return (
        <>
        <ModalHeader>Instruction </ModalHeader>
                    <ModalBody>
                    <div>
                        <p>
                            Below is a list of statements dealing with your general feelings about yourself.
                            The scale is a ten item Likert scale with item s answered on a four point scale –
                            from strongly agrees to strongly disagree.
                        </p>

                        <ul>
                            <li>If you strongly agree, circle SA. </li>
                            <li>If you agree with the statement, circle A. </li>
                            <li>If you disagree, circle D. </li>
                            <li>If you strongly disagree, circle SD</li>
                        </ul>
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

export default SEInstruction
