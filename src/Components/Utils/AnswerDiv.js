import React from 'react'

function AnswerDiv(props){
    return (
        <div
        style={{padding:10, backgroundColor:"#AD69DF", borderRadius:10}}
        className={props.className} 
        id={props.id} 
        onDragOver={props.onDragOver} 
        onDragStart={props.onDragStart}
        onDrop={props.onDrop}>{props.answer}</div>)
}

export default AnswerDiv



