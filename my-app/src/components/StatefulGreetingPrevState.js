import React from "react"

class StatefulGreeting extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            introduction: "Hello!",
            buttonText: "Exit",
            count: 0,
        };
    }


    handleClick () {
        this.setState((prevState, prevProps) => {
            console.log('Previous State: ', prevState)
            console.log('Previous Props: ', prevProps)
            return {
                introduction: prevState.introduction === "Hello!" ? "Goodbye!" : "Hello!",
                buttonText: prevState.buttonText === "Exit" ? "Enter" : "Exit",
            } 
        })
        
    }

    increment() {
        this.setState((prevState, prevProps) => {
            console.log('Previous State: ', prevState)
            console.log('Previous Props: ', prevProps)
            return {
                count: prevState.count + 1
            }
        })
        
    }

    render() {
        return (
            <div>
                  <h1>{this.state.introduction}</h1>
                  <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
                  <p>{this.state.count}</p>
                  <button onClick={() => this.increment()}>Click me to count!</button> 
            </div>
        )
    }
}

export default StatefulGreeting;