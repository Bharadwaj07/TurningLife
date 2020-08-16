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
                        onBlur={formik.handleBlur}
                        value={formik.values.prevHistory} 
                        id="History" 
                    />
                    {formik.touched.prevHistory && formik.errors.prevHistory ?(
                    <div className="error">{formik.errors.prevHistory}</div>
                    ):null}
                </FormGroup>
                <FormGroup>
                    <Label for="Remarks">Remarks</Label>
                    <Input 
                        type="textarea" 
                        name="remarks"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.remarks}  
                        id="Remarks" 
                    />
                    {formik.touched.remarks && formik.errors.remarks ?(
                    <div className="error">{formik.errors.remarks}</div>
                    ):null}
                </FormGroup>
            </>
    )
}
export default  FormSecondStep;