import React,{useState} from 'react'
import { Form } from 'reactstrap';
import {useFormik} from 'formik';
import selfEsteemQuestion from './SelfEsteemTestData';
import SelfEsteemTest from './SelfEsteemTest';
import SelfEsteemInstruction from './SelfEsteemInstruction';


 function TestForm(props) {
     
    const [radioVal,setState] = useState(0)
    const {step} = props;
    const handleChange = (event)=>{
        
        setState(event.target.value)
        //console.log(radioVal)
    }
    
    return (
        <Form>
            {renderStep(
                step,radioVal,handleChange
            )}
        </Form>
    )
}
export default TestForm;

function renderStep(step,radioVal,handleChange){
    switch(true){
        case (step===0):
            return(
                <SelfEsteemInstruction/>
            );
        case (step <10):
            return(
                <SelfEsteemTest
                    step={step}
                    radioVal={radioVal}
                    handleChange={handleChange}
                />
            )
        default:
            return("bii")
    }
}