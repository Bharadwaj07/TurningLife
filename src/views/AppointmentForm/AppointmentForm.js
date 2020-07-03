import React from 'react';
import {useFormik} from 'formik';
import {Form} from "reactstrap";
import FormFirstStep from './FormFirstStep';
import FormSecondStep from './FormSecondStep';
import FormThirdStep from './FormThirdStep';
 function AppointmentForm(props) {

    const initialValues ={
        name:'',
        email:'',
        number:'',
        age:'',
        gender:'',
        prevHistory:'',
        remarks:'',
        startDate:new Date(),
        timeslot:''
    }
    const onSubmit = values =>{


        console.log(values);
    }
    const validate = values =>{
        let errors ={}
        if(!values.name){
            errors.name ="Required"
        }
        if(!values.email){
            errors.email ="Required"
        }
        if(!values.number){
            errors.number = "Required"
        }
        if(!values.age){
            errors.age ="Required"
        }
        if(!values.gender){
            errors.gender ="Required"
        }
        if(!values.remarks){
            errors.remarks ="Required"
        }
        if(!values.startDate){
            errors.startDate ="Required"
        }
        if(!values.timeslot){
            errors.timeslot ="Required"
        }
    }
     const formik =useFormik({
         initialValues,
         onSubmit,
         validate
     })
     
    return (
        <Form 
            onSubmit={formik.handleSubmit}
        >
            {renderstep(props.step,
                formik
                )}
        </Form>
    )
}
export default AppointmentForm;

function renderstep(step,formik){
    switch (step) {
        case 1:
            return(
                <FormFirstStep
                    formik ={formik}
                />
            );
        case 2:
            return(
                <FormSecondStep
                    formik ={formik}
                />
            )
        case 3:
            return(
                <FormThirdStep
                    formik ={formik}
                />
            )
        default:
            return("bii")
            
    }
}