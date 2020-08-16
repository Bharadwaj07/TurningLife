import React from 'react';
import {ModalHeader,ModalFooter,ModalBody,Button} from 'reactstrap';
import isEmpty from '../is-empty';
import './SelfEsteem.css'
class SelfEsteem extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            questions :props.questions,
            currentQuestion:{},
            nextQuestion:{},
            currentQuestionIndex:0,
            score:0,
            nextButtonDisabled: false,
            previousButtonDisabled: true,
            

        }
        this.handleNextButton = this.handleNextButton.bind(this);
        this.handleOnClick = this.handleOnClick.bind(this)
    }
    componentDidMount(){
       const  {questions,currentQuestion,nextQuestion} = this.state;
        this.displayQuestion(questions,currentQuestion,nextQuestion);
    }
    displayQuestion =(questions=this.state.questions,currentQuestion,nextQuestion) =>{
        let { currentQuestionIndex } = this.state;
        if(!isEmpty(this.state.questions)){
            questions = this.state.questions;
            currentQuestion = questions[currentQuestionIndex];
            nextQuestion =questions[currentQuestionIndex +1]
            //console.log(nextQuestion)
            this.setState({
                currentQuestion,
                nextQuestion
            })
        }
        //console.log(this.state.currentQuestion)
    }
    handleNextButton(){
        //console.log(this.state.score)
        if(this.state.nextQuestion!==undefined){

            this.setState({
                currentQuestionIndex:this.state.currentQuestionIndex+1
            })
            this.displayQuestion(this.state,this.state.currentQuestion,this.state.nextQuestion)
            
        }
        if(this.state.nextQuestion === undefined){
            alert(this.state.score)
        }
    }
    handleOnClick(e){
        const id = parseInt(e.target.id);
        this.setState({
            score: this.state.score +id
        })
        this.handleNextButton()
        
    }
    render(){
        const {currentQuestion,nextQuestion} = this.state;
        return(
            <>
                <ModalHeader>Quizz mode</ModalHeader>
                    <ModalBody>
                    <h5 className='question'>{currentQuestion.id}.{' '}{currentQuestion.qsn}</h5>
                    <div className="options-container">
                        <div className="option-wrapper"
                            id="3"
                            onClick={this.handleOnClick}
                        >
                            {currentQuestion.optionA}
                        </div>
                        <div className="option-wrapper"
                            id='2'
                            onClick={this.handleOnClick}
                        >
                            {currentQuestion.optionB}
                        </div>
                        <div className="option-wrapper"
                            id='1'
                            onClick={this.handleOnClick}
                        >
                            {currentQuestion.optionC}
                        </div>
                        <div className="option-wrapper"
                            id="0"
                            onClick={this.handleOnClick}
                        >
                            {currentQuestion.optionD}
                        </div>
                    </div>

                    </ModalBody>
                <ModalFooter> 
                   {/* <Button onClick={this.handleNextButton}>Next</Button> */}
                </ModalFooter> 
            </>
        )
    }
}
export default SelfEsteem;