import React from 'react'

function Button(props){
    return (<div style={props.style} className={props.className} draggable="true" onDragStart={props.onDragStart} id={props.id}>{props.text}</div>)
}

export default Button