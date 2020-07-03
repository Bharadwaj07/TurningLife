import React from 'react';
import {
    Input,
    FormGroup,
    Label,
  } from "reactstrap";

function FormFirstStep(props) {
    const {formik} = props
    console.log(props.formik)
    const onValueChange =(e)=>{
        console.log(e.target.value)
    }
    return (
        <>
            <FormGroup>
                <Label for="Name">Name</Label>
                <Input 
                    type="text" 
                    name="name"
                    onChange={formik.handleChange}
                    value={formik.values.name}    
                    id="Name" 
                    placeholder="Your name.." 
                
                />
            </FormGroup>
            <FormGroup>
                <Label for="Email">Email</Label>
                <Input 
                    type="email" 
                    name="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}  
                    id="Email" 
                    placeholder="enter your email" 
                />
            </FormGroup>
            <FormGroup>
                <Label for="Number">Phone number</Label>
                <Input 
                    type="text" 
                    name="number"
                    onChange={formik.handleChange}
                    value={formik.values.number}  
                    id="Number" 
                    placeholder="enter your Phone number" 
                />
            </FormGroup>
            <FormGroup>
                <Label for="Age">Your Age</Label>
                <Input 
                    type="text" 
                    name="age" 
                    onChange={formik.handleChange}
                    value={formik.values.age} 
                    id="Age" 
                    placeholder="enter your Age" 
                />
            </FormGroup>
            <FormGroup tag="fieldset"
                name="gender"
                onChange={formik.handleChange}
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
            </FormGroup>
        </>
    )
}
export default   FormFirstStep;