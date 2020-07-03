import React from 'react';
import {
    Input,
    FormGroup,
    Label
  } from "reactstrap";

function FormSecondStep(props) {
    const {formik} = props;
    return (
            <>
                <FormGroup>
                    <Label for="History">Previous History </Label>
                    <Input 
                        type="textarea" 
                        name="prevHistory" 
                        onChange={formik.handleChange}
                        value={formik.values.prevHistory} 
                        id="History" 
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="Remarks">Remarks</Label>
                    <Input 
                        type="textarea" 
                        name="remarks"
                        onChange={formik.handleChange}
                        value={formik.values.remarks}  
                        id="Remarks" 
                    />
                </FormGroup>
            </>
    )
}
export default  FormSecondStep;