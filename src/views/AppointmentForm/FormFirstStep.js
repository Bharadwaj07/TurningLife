import React from 'react';
import {
    Input,
    FormGroup,
    Label,
  } from "reactstrap";

function FormFirstStep(props) {
    const {formik} = props
    
    return (
        <>
            <FormGroup>
                <Label for="Name">Name</Label>
                <Input 
                    type="text" 
                    name="name"
                    onChange={formik.handleChange}
                    value={formik.values.name} 
                    onBlur={formik.handleBlur}   
                    id="Name" 
                    placeholder="Your name.." 
                
                />
                {formik.touched.name &&formik.errors.name ?(
                    <div className="error">{formik.errors.name}</div>
                ):null}
            </FormGroup>
            <FormGroup>
                <Label for="Email">Email</Label>
                <Input 
                    type="email" 
                    name="email"
                    onChange={formik.handleChange}
                    value={formik.values.email} 
                    onBlur={formik.handleBlur} 
                    id="Email" 
                    placeholder="enter your email" 
                />
                {formik.touched.email && formik.errors.email ?(
                    <div className="error">{formik.errors.email}</div>
                ):null}
            </FormGroup>
            <FormGroup>
                <Label for="Number">Phone number</Label>
                <Input 
                    type="text" 
                    name="number"
                    onChange={formik.handleChange}
                    value={formik.values.number}  
                    onBlur={formik.handleBlur}
                    id="Number" 
                    placeholder="enter your Phone number" 
                />
                {formik.touched.number && formik.errors.number ?(
                    <div className="error">{formik.errors.number}</div>
                ):null}
            </FormGroup>
            <FormGroup>
                <Label for="Age">Your Age</Label>
                <Input 
                    type="text" 
                    name="age" 
                    onChange={formik.handleChange}
                    value={formik.values.age} 
                    onBlur={formik.handleBlur}
                    id="Age" 
                    placeholder="enter your Age" 
                />
                {formik.touched.age && formik.errors.age ?(
                    <div className="error">{formik.errors.age}</div>
                ):null}
            </FormGroup>
            <FormGroup tag="fieldset"
                name="gender"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
            >
                <label>Gender</label>
                <FormGroup check>
                    <Label check>
                        <Input type="radio" name="gender"  value="Male"/>{' '}
                            Male
                    </Label>
                </FormGroup>
                <FormGroup check>
                    <Label check>
                        <Input type="radio" name="gender" value="Female"/>{' '}
                            Female
                    </Label>
                </FormGroup>
                <FormGroup check>
                    <Label check>
                        <Input type="radio" name="gender" value="Other"/>{' '}
                            Other
                    </Label>
                </FormGroup>
                {formik.touched.gender && formik.errors.gender ?(
                    <div className="error">{formik.errors.gender}</div>
                ):null}
            </FormGroup>
        </>
    )
}
export default   FormFirstStep;