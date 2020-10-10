import React from 'react'

function Title(props){
    return (<div className={props.className} id={props.id}>{props.title}</div>)
}

export default Title