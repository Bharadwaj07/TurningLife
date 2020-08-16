import React from 'react';
import {useFormik} from 'formik';
import {Form} from "reactstrap";
import FormFirstStep from './FormFirstStep';
import FormSecondStep from './FormSecondStep';
import FormThirdStep from './FormThirdStep';
import fireStore from '../../firebase';
import firebase from 'firebase';
import * as Yup from 'yup';
 function AppointmentForm(props) {
    const {validate} =props
    const initialValues ={
        name:'',
        email:'',
        number:'',
        age:'',
        gender:'',
        prevHistory:'',
        remarks:'',
        date:new Date(),
        timeslot:''
    }
    const phoneRegExp = /^\d{10}$/

    const validationSchema = Yup.object({
        name:Yup.string().required("Required"),
        email:Yup.string().email().required("Required"),
        number:Yup.string().matches(phoneRegExp,"Phone number is not valid").required("Required"),
        age:Yup.number().max(99).required("Required"),
        gender:Yup.string().required("Required"),
        remarks:Yup.string().required("Required"),
        timeslot:Yup.string().required("Required")
    })
    const onSubmit = (values,{resetForm}) =>{
        fireStore.collection('appointments').add(values);
        resetForm({values:''})
        props.setStep(1);
        props.closeModal();
        alert('appointment succelfull')
          
     
    }
     const formik =useFormik({
         initialValues,
         onSubmit,
         validationSchema
     })
     console.log(formik.errors)
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
            
    }
}