import React, { Component } from 'react'

export default class Collatz extends Component {

    state = {
        numeros: []
    }

    generarCollatz = () => {
        let numero = parseInt(this.props.numero)
        let aux = []
        while (numero != 1) {
            if (numero % 2 == 0) {
                numero = numero / 2
                aux.push(numero)
            } else {
                numero = numero * 3 +1
                aux.push(numero)
            }
        }
        this.setState({
            numeros: aux
        })

    }

    componentDidMount = () =>{
        this.generarCollatz()
    }

    render() {
        return (
            <div>
                <h1 style={{ color: "red" }}>TEORÍA COLLATZ</h1>
                <ul>
                    {this.state.numeros.length != 0 &&
                        this.state.numeros.map((num, index) => {
                            return (
                                <li key={index}>{num}</li>
                            )
                        })}
                </ul>
            </div>
        )
    }
}
