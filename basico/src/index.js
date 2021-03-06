import React, { Component } from "react"
import ReactDOM from "react-dom"
import Button from './Button.jsx'
import ComponentA from './ComponentA.jsx'
import ComponentB from './ComponentB.jsx'
import "./styles.css"

const element = 'Digital Innovation'

const rootElement = document.getElementById("root")

const element2 = <h1>Olá José!! </h1>

const soma = (a, b) => alert(a + b)

class App extends Component {

    constructor (props){
        super(props)

        this.state = {
            clock: 1000,
            copo: "água"
        }
    }

    componentDidMount() {
        window.setTimeout(() => {
            this.setState({
                copo: 'suco'
            })
        }, 2000)
    }

    alterarCopo = () => {
        this.setState({
            copo: 'refrigerante'
        })

        // this.state.copo = 'refrigerante' //nao tem efeito na variavel copo de this.state
    }

    render(){

        const { clock, copo } = this.state

        return (
            <div className="teste">
                <h1>{clock}</h1>
                <button onClick={() => this.alterarCopo()}><h1>{copo}</h1></button>
            </div>
        )
    }

}

// const  App = () => {
//     return (
//         <div>
//             {element}
//             {element2}
//             <Button onClick={() => soma(10, 20)} name="José Romano"/>
//             <ComponentA>
//                 <ComponentB>
//                     <Button onClick={() => soma(10, 20)} name="José Romano"/>
//                 </ComponentB>
//             </ComponentA>
//         </div>
//     )
// }

ReactDOM.render(<App />, rootElement)