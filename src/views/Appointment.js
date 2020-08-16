import React,{useState}from 'react'
import AppointmentModal from './AppointmentModal';
import AppointmentForm from './AppointmentForm/AppointmentForm';



// globalizeLocalizer()
 function Appointment(props)  {
    const [step,setStep]= useState(1);
    const nextStep = () =>{
        const next = step +1;
        setStep(next);
    }
    const prevStep = () =>{
        const prev = step -1;
        setStep(prev);
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
        if(!values.date){
            errors.date ="Required"
        }
        
        if(!values.timeslot){
            errors.timeslot ="Required"
        }
        return errors
    }
    
        return (
            <AppointmentModal  
                open={props.open}
                closeModal={props.closeModal}
                nextStep={nextStep}
                prevStep={prevStep}
                setStep={setStep}
                step={step}
                validate={validate}
                >
                <AppointmentForm
                    validate={validate}
                    step={step}
                    setStep={setStep}
                    closeModal={props.closeModal}
                />
            </AppointmentModal>
        )
   

}
export default Appointment;


