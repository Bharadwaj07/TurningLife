import React from 'react';
import {
    FormGroup,
    Label,
    Input,
    Button
  } from "reactstrap";
import DatePicker from "react-datepicker"; 
import "react-datepicker/dist/react-datepicker.css";

 function FormThirdStep(props) {
    const {formik} = props

    return (
            <>
                <FormGroup>
                    <Label>Book Your Appointment</Label>
                    <FormGroup>
                    <DatePicker
                        selected={formik.values.startDate}
                        dateFormat="MMMM d, yyyy"
                        onChange={(date)=> formik.setFieldValue("startDate",date)}
                        name="startDate"
                        value={formik.values.startDate} 
                    />
                    </FormGroup>
                    <FormGroup tag="fieldset"
                        name="timeslot"
                        onChange={formik.handleChange}
                    >
                        <label>Select the Timeslot</label>
                        <FormGroup check>
                            <Label check>
                                <Input type="radio" name="timeslot" />{' '}
                                     10am to 11:30am
                            </Label>
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input type="radio" name="timeslot" />{' '}
                                     11:30am to 12:30pm
                            </Label>
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input type="radio" name="timeslot" />{' '}
                                     1:30pm to 2:30pm 
                            </Label>
                        </FormGroup>
                    </FormGroup>
                    <Button type="submit" color="primary">Submit and Pay</Button>
                </FormGroup>
            </>
    )
}
export default FormThirdStep;
