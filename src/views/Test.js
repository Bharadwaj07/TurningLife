import React,{useState}from 'react'
import TestModal from './TestModal';

import TestForm from './Test/TestForm';

function Test(props) {
    const [step,setStep] = useState(0);

    const nextStep = () =>{
       const next = step +1
       setStep(next);
    }
    const prevStep =() =>{
        const prev = step -1
        setStep(prev);
    }
    
    return (
        <TestModal 
            open={props.open} 
            closeModal={props.closeModal}
            step={step}
            nextStep={nextStep}
            prevStep ={prevStep}
        >
            <TestForm
                step={step}
            />
        </TestModal>
    )
}

export default Test;

// function renderPage(start,index,SEQ){
//     if(start){
//         return(
//             <>
//             <p>Hello are you ready to check your selfesteem and to check wether you are depressed are not ? </p>
//             </>
//         )
//     }
    

//     if(index>=0){
//         return(
//             <Form onSubmit={(e)=>handleSubmit(e)}>
//                 {index <SEQ.length?
//                  ( <FormGroup tag="fieldset">
//                         <legend>{SEQ[index].id}.{SEQ[index].qsn}</legend>
//                             {SEQ[index].options.map((option,i)=>
//                                 <FormGroup check  key={i}>
//                                     <Label check>
//                                         <Input type="radio" name={`ans_for_qsn${SEQ[index].id}`} value={3-i} />{' '}
//                                         {option}
//                                     </Label>
//                                 </FormGroup>
                                
//                             )}
//                     </FormGroup>  )  :(
//                         <FormGroup>
//                             <Button type='submit' color="primary">Submit</Button>
//                         </FormGroup>
//                     ) 
            
//             }
//             </Form>
//         )
//     }
    
// }

// function handleSubmit(e){
//     e.preventDefault();
//     console.log(e.target.value);
// }