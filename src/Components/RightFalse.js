import React ,{ Fragment }from 'react'
import '../App.css';



function RightFalse(props) {



const handleClick = e => {
    const index = e.target.id
    if (e.target.innerText === "Hamis"){
        props.answer[index] = "Hamis"
        props.forceUpdate()
    }else
        props.answer[index] = "Igaz"   
        props.forceUpdate()
}
const divs = props.question.map((value, index) => {            
    return [
        <div className="RightFalse">
            <h3 className="div1">{value}</h3>
            <p className="div2" >{props.answer[index]}</p>
            <div className="div3" id={parseInt(index)} onClick={handleClick}>Igaz</div>
            <div className="div4" id={parseInt(index)} onClick={handleClick}>Hamis</div>
        </div>]
})

return (
    <Fragment>
        <div style={{padding:100}}>
            {divs}
        </div>
    </Fragment>
)
}


export default  RightFalse;
