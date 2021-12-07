/*jshint esversion: 6 */
/*jshint -W033 */
/*jshint -W061 */

import React from "react"
import store from "./sore";
import './App.css'

class App extends React.Component {

    constructor() {
        super()
        this.state = {
            out: "0"
        }
        this.refOutput = React.createRef()

    }

    tapeNumber(num) {
        let currentValue = num;
        let output = this.refOutput.current;

        this.setState({
            out: currentValue
        })
        if (output.value === '0') {
            output.value = ''
        }
        if (num === "=") {
            alert(output.value)
            output.value = eval(output.value)
        } else {
            output.value = output.value + currentValue
        }

    }

    tape(operation) {
        let output = this.refOutput.current;

    }

  render() {
    return(
        <div className="container">
            <div><p>Enter SUM IN USD</p></div>
                <div className="output">
                    <input ref={this.refOutput} type="text" defaultValue={this.state.out}/>
                </div>
            {/*<div className="operations">*/}
            {/*  {store.operations.map(item => <button*/}
            {/*  onClick={(this.tape(item.val))}>{item.val}*/}
            {/*  </button>)}*/}
            {/*</div>*/}
            <div className="buttons">
              {store.buttons.map(item => <button
              onClick={() => {
                  this.tapeNumber(item.val)
              }}>{item.val}
              </button>)}
            </div>

        </div>
    )

  }
}

export default App