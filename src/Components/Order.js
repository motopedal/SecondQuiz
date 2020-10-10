import React , { useState } from 'react';
import Title from './Utils/Title'
import Button from './Utils/Button'
import AnswerDiv from './Utils/AnswerDiv'
import * as functions from './Functions/Functions'
import './styles/Order.css'

function Order(props) {
    const [question, ] = useState (
        {
          numbers: [Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)],
          answer: [],
          done: false
        }
      ) 
    const handleClick = e => {
        props.done(true, props.id)
        props.allAns([question.answer])
    }
    return (
        <div >
            <div className="Order">
                <div className="o">
                    <Title title="Rakd sorba a számokat!"></Title>
                </div>
            
            {question.numbers.map((value, index) => {
                return (
                    
                    <div className={"o"+index}>
                        <Button 
                            id={index} 
                            onDragStart={(e) => functions.onDragStart(e)} 
                            text={question.numbers[index]}>
                        </Button>
                    </div>
                    
                )
            })}
           
            {question.numbers.map((value,index) => {             
                return (<div className={"a"+index}>
                <AnswerDiv  
                    id={index}
                    onDragStart={(e) => functions.onDragStart(e)}
                    answer={question.answer[index]? question.answer[index]: "Valasz"}
                    onDrop={(e) => functions.onDrop(e, question, index , props.forceUpdate)}
                    onDragOver={(e) => functions.onDragOver(e)}>
                </AnswerDiv>
                </div>)
            })}
            </div>
            {question.numbers.length == question.answer.length && question.answer.includes(undefined) == false ? (
                <div className="nextBtn" onClick={handleClick}> Tovább </div>
            ):(null)}
        </div>
        
    )
}


export default Order;