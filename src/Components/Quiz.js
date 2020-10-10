import React from 'react'
import Button from './Utils/Button'
import Title from './Utils/Title'
import AnswerDiv from './Utils/AnswerDiv'
import '../App.css'



class Quiz extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            questions: [[
                {"id":3, "title":"Mikor tört ki az Első világháború?", "answers":[
                    {"id":4, "text":"1939"},{"id":5,"text":"1914"}
                ]}
            ],
                [{"id":6, "title":"Ki volt Nikola Tesla?", "answers":[
                    {"id":7, "text":"Tudós"},{"id":8,"text":"Színész"}
                ]}
            ]],
            answers:[{"id":9}, {"id":10 }]
        }
        
    }
    onDragStart = (e) => {
        e.dataTransfer.setData("id", e.target.id);
    }
    
    onDragOver = (e) => {
        e.preventDefault();
    }
    
    onDrop = (e) => {
        let id = e.dataTransfer.getData("id");
    
        let button = this.state.questions.map(value => {
            var a = value[0]["answers"].find(element => element["id"] == id)  
            if(a != undefined){
                return a["text"]
            }
        })
        this.state.answers.map((value,index) =>{
            if(value["id"] == e.target.id){
                if(button[index] != undefined){
                    value["answer"] = button[index]
                }            
            }
        })
        
        this.forceUpdate()
    }

    
    render() {
        const handleClick = (props) => {
                this.props.done(true, this.props.id)
                this.props.allAns(this.state.answers.map(value => {return value["answer"]}))
        }
        const divs = this.state.questions.map((valueTitle,id) => {
            const possibleAnsweres = valueTitle[0]["answers"].map((value,index) => {
                return (
                        
                            <Button 
                            style={{ opacity: this.state.answers[id]["answer"] == value["text"] ? "0.5" : "1"}}
                            onDragStart={(e) => this.onDragStart(e)}
                            id={value["id"]}
                            text={value["text"]}>
                            </Button>
                        
                    )
            })
            return (
                <div className="RightFalse" style={{width:"80%" , margin:"30px auto auto auto"}}>
                    <Title
                        className={"div1"}
                        id={valueTitle[0]["id"]} 
                        title={valueTitle[0]["title"]}>
                    </Title>
                    <AnswerDiv 
                        className={"div2"}
                        id={this.state.answers[id]["id"]}
                        onDragOver={(e) => this.onDragOver(e)}
                        answer={this.state.answers[id]["answer"] ? this.state.answers[id]["answer"] : "Húzd be a válaszod!"}
                        onDrop={(e) => this.onDrop(e)}>
                    </AnswerDiv>
                    {possibleAnsweres}
                </div>
            )           
            
        })
    return (
            <div className="App">
                {divs}
                {Object.keys(this.state.answers[0]).length == 2 && Object.keys(this.state.answers[1]).length == 2 ? (
                    <div className="nextBtn" onClick={handleClick}> Tovább </div>

                ):(null)}
            </div>
      )   
    }
  }



export default Quiz;