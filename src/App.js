/*jshint esversion: 6 */
/*jshint -W033 */
/*jshint -W061 */

import React from "react"
import store from "./sore";
import './App.css'
let stroja = false
class App extends React.Component {

    constructor() {
        super()
        this.state = {
            out: "0",
            error: null,
            isLoaded: false,
            items: []
        }
        this.refOutput = React.createRef()
        this.refBtc = React.createRef()

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
            output.value = eval(output.value)
        } else {
            output.value = output.value + currentValue
        }

    }
    calcBTC() {
        let btc = this.refBtc.current;
        let output = this.refOutput.current;
        fetch('https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,JPY,EUR').then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result

          }
          )
          btc.value = this.state.items.USD * output.value
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
    }


  render() {
    return(
        <div className="container">
            <div><p>Enter SUM IN USD</p></div>
                <div className="output">
                    <input ref={this.refOutput} type="text" defaultValue={this.state.out}/>
                </div>

            <div className="buttons">
              {store.buttons.map(item => <button
              onClick={() => {
                  this.tapeNumber(item.val)
              }}>{item.val}
              </button>)}
            </div>
        <input ref={this.refBtc} type='text'/>
            <button onClick={() => {this.calcBTC()}}>calc BTC</button>
            <text>{this.state.out}
        </text>
        </div>
    )

  }
}

export default App