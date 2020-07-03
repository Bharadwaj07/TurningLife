import React from 'react';
import {  Form,FormGroup,Label,Input, Button } from "reactstrap";
import  selfEsteemQuestion from './SelfEsteemTestData';
 function SelfEsteemTest(props) {
     const {step,radioVal,handleChange} = props;
     const selfEsteem_qsn = selfEsteemQuestion[step-1];
    return (

            <FormGroup tag="fieldset" name={selfEsteem_qsn.id} >
                        <label>{selfEsteem_qsn.id}.{selfEsteem_qsn.qsn}</label>
                       {/* / {console.log(selfEsteem_qsn.id)} */}
                            {selfEsteem_qsn.options.map((option,i)=>
                                <FormGroup check  key={i}>
                                    <Label check>
                                        {console.log(selfEsteem_qsn.value[i],option)}
                                        
                                        <Input 
                                            type="radio" 
                                            name={selfEsteem_qsn.id} 
                                            value={selfEsteem_qsn.value[i]} 
                                            onChange={handleChange}  
                                            checked={radioVal==selfEsteem_qsn.value[i]}
                                        />{' '}
                                        {option}
                                    </Label>
                                </FormGroup>
                                
                            )}
            </FormGroup> 

    )
}
export default SelfEsteemTest;