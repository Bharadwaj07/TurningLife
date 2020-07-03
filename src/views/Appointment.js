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
    
        return (
            <AppointmentModal  
                open={props.open}
                closeModal={props.closeModal}
                nextStep={nextStep}
                prevStep={prevStep}
                step={step}
                >
                <AppointmentForm
                    step={step}
                />
            </AppointmentModal>
        )
   

}
export default Appointment;


