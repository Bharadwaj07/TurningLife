import React from 'react';
import {
    Button,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Container,
    Row,
    Col,
    Form
  } from "reactstrap";
  import {useFormik} from 'formik';
  import fireStore from '../firebase';

function Feedback() {
    const [firstFocus, setFirstFocus] = React.useState(false);
    const [lastFocus, setLastFocus] = React.useState(false);
    // const [initialValues,setInitialValues] = React.useState({
    //     name:'',
    //     email:'',
    //     message:''
    // })
    const initialValues ={
        name:'',
        email:'',
        message:''
    }

    const onSubmit = (values,{resetForm}) =>{
        fireStore.collection('feedbacks').add(values);
        resetForm({values:''})
     }
     const validate = values =>{
        let errors ={}
        if(!values.name){
            errors.name ="Required"
        }
        if(!values.email){
            errors.email ="Required"
        }
        if(!values.message){
            errors.message = "Required"
        }
        
    }
    const formik =useFormik({
        initialValues,
        onSubmit,
        validate
    })
    return (
        <Container>
            <h2 className="title">Have any querries</h2>
            <p className="description">Your feedback  matters </p>
            <Row>
              <Col className="text-center ml-auto mr-auto" lg="6" md="8">
                <Form
                    onSubmit={formik.handleSubmit}
                >
                <InputGroup
                  className={
                    "input-lg" + (firstFocus ? " input-group-focus" : "")
                  }
                >
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="now-ui-icons users_circle-08"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Name..."
                    type="text"
                    name="name"
                    onChange={formik.handleChange}
                    value={formik.values.name} 
                    onFocus={() => setFirstFocus(true)}
                    onBlur={() => setFirstFocus(false)}
                  ></Input>
                </InputGroup>
                <InputGroup
                  className={
                    "input-lg" + (lastFocus ? " input-group-focus" : "")
                  }
                >
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="now-ui-icons ui-1_email-85"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Email..."
                    type="email"
                    name="email"
                    onChange={formik.handleChange}
                    value={formik.values.email} 
                    onFocus={() => setLastFocus(true)}
                    onBlur={() => setLastFocus(false)}
                  ></Input>
                </InputGroup>
                <div className="textarea-container">
                  <Input
                    cols="80"
                    name="message"
                    placeholder="Type a message..."
                    rows="4"
                    type="textarea"
                    onChange={formik.handleChange}
                    value={formik.values.message} 
                  ></Input>
                </div>
                <div className="send-button">
                  <Button 
                    type="submit" 
                    color="info"
                    size="lg"
                    className="btn-round"
                    >
                        Submit
                    </Button>
                </div>
                </Form>
              </Col>
            </Row>
          </Container>
    )
}

export default Feedback
