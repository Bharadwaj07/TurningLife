import React,{Component} from 'react';
import {Row,Col} from 'reactstrap';
import {NavLink,withRouter} from 'react-router-dom';
import './BrainThought.css';


class BrainThought extends Component {
    constructor(props){
        super(props)
        this.ChangeRoute = this.ChangeRoute.bind(this)
    }
    ChangeRoute(){
        this.props.history.push('thought')
    }
    render(){
        return(
            <div className='thought-with-brain'>
                <Row>
                    <Col xs='3' sm='3'>
                    </Col>
                    <Col xs='3' sm='3'>
                        <NavLink
                            onClick={this.ChangeRoute}
                        >
                        <img className='thought' src={require('assets/img/cloud123.png')} ></img>
                        </NavLink>
                    </Col>
                    <Col xs='3' sm='3'>
                        <NavLink
                            onClick={this.ChangeRoute}
                        >
                        <img className='thought' src={require('assets/img/cloud123.png')} alt=''></img>
                        </NavLink>
                    </Col>
                    <Col xs='3' sm='3'>
                    
                    </Col>
                </Row>
                <Row>
                    <Col xs='3' sm='3'>
                        <NavLink
                            onClick={this.ChangeRoute}
                        >
                        <img  className='thought middle-left' src={require('assets/img/cloud123.png')} alt=''></img>
                        </NavLink>
                    </Col>
                    <Col xs='3' sm='3'>
                        <img className='brain' src={require('assets/img/tb.png')} alt=''></img>
                    </Col>
                    <Col xs='3' sm='3'>
                        <NavLink
                            onClick={this.ChangeRoute}
                        >
                        <img className='thought middle-right' src={require('assets/img/cloud123.png')} alt=''></img>
                        </NavLink>
                    </Col>
                </Row>
            </div>
        )
    }
}


export default  withRouter(BrainThought);