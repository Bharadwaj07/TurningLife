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
    const onChangeDate = (d) =>{
         formik.setFieldValue("date",d)
    }

    return (
            <>
                <FormGroup>
                    <Label>Book Your Appointment</Label>
                    <FormGroup>
                    <DatePicker
                        selected={formik.values.date}
                        dateFormat="MMMM d, yyyy"
                        // onChange={(d)=> formik.setFieldValue("date",d)}
                        onChange={onChangeDate}
                        onBlur={formik.handleBlur}
                        name="date"
                        value={formik.values.date} 
                    />
                    {formik.touched.date && formik.errors.date ?(
                        <div className="error">{formik.errors.date}</div>
                        ):null}
                    </FormGroup>
                    <FormGroup tag="fieldset"
                        name="timeslot"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    >
                        <label>Select the Timeslot</label>
                        <FormGroup check>
                            <Label check>
                                <Input type="radio" name="timeslot" value="10am to 11:30am"/>{' '}
                                     10am to 11:30am
                            </Label>
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input type="radio" name="timeslot" value="10am to 11:30am"/>{' '}
                                     11:30am to 12:30pm
                            </Label>
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input type="radio" name="timeslot" value="10am to 11:30am" />{' '}
                                     1:30pm to 2:30pm 
                            </Label>
                        </FormGroup>
                        {formik.touched.timeslot && formik.errors.timeslot ?(
                            <div className="error">{formik.errors.timeslot}</div>
                            ):null}
                    </FormGroup>
                    <Button type="submit" color="primary">Submit and Pay</Button>
                </FormGroup>
            </>
    )
}
export default FormThirdStep;
