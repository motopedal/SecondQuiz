import React , { useState , useReducer } from 'react';
import './App.css';
import RightFalse from "./Components/RightFalse"
import Quiz from "./Components/Quiz"
import Order from './Components/Order'



function App() {
  var [count, ] = useState(0)
  const [, forceUpdate] = useReducer(x => x + 1, 0)
  const [question, ] = useState (
    {
      question: ["Ronaldo egy focista","Messi egy kosaras"],
      answer: ["A válaszod","A válaszod"],
    }
  )

  const [allAnsweres , ] = useState (
    {
      answeres: []
    }
  )
  const allAns = (data) => {
    data.map(value => {
      return allAnsweres.answeres.push(value)})
  }
  
  const [done,] = useState([false,false])
  const doneHandle = (data, key) => {
    done[key] = data
    forceUpdate()
  }

  const countSetter = () => {
    let a = allAnsweres.answeres
    var b = a[2].slice().sort()
    if(question.answer[0] === "Igaz"){
      count = count + 1
    }
    if(question.answer[1] === "Hamis"){
      count = count + 1
    }
    if(a[0] == "1914"){
      count = count + 1
    }
    if(a[1] == "Tudós"){
      count = count + 1
    }
    if(b[0] == a[2][0] && b[1] == a[2][1] && b[2] == a[2][2]){
      count = count + 1 
    }
    return (
      <div>
        {count}/5
      </div>
    )
  }
  
  return (
    question.answer[0] == "A válaszod" || question.answer[1] == "A válaszod" ? (
      <div>
        <RightFalse 
        forceUpdate={forceUpdate}
        question={question.question}
        answer={question.answer}>
        </RightFalse>
      </div>
  ) : (
    done[0] != true ? (
      <Quiz allAns={allAns} id={"0"} done={doneHandle}></Quiz>
    ): (
      done[1] != true ? (
        <Order allAns={allAns} id={"1"} done={doneHandle} forceUpdate={forceUpdate}></Order>
      ): (
        <div className="App">
          <h1> Az összes válaszod:</h1>
          
          {question.answer.map((value,index) => {
            return (
              <div>
                <h2> {value}</h2>
              </div>
            )
          })}
          {allAnsweres.answeres.map((value,index) => {
            return (
              <div>
                <h2 id={index} >{value + " "}</h2>
              </div>
            )
          })}
          <h2>{countSetter()}</h2>
        </div>
      )
    )
  )

  );
}

export default App;
