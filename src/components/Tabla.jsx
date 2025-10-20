import React, { Component } from 'react'

export default class Tabla extends Component {
    state = {
        tabla: []
    }

    generarTabla = () => {
        let aux = []
        let numero = parseInt(this.props.numero)

        for (var i = 1; i <= 10; i++) {
            var resultado = numero * i
            aux.push(resultado)
        }

        this.setState({
            tabla: aux
        })
    }

    componentDidMount = () => {
        this.generarTabla()
    }

    render() {
        return (
            <div>
                <h1>Tabla multiplicar</h1>
                <h3 style={{ color: "purple" }}>Numero {this.props.numero}</h3>
                <ul>
                    {this.state.tabla.map((res, index) => {
                        return (
                            <li key={index}>Resultado nº {index + 1}: {res}</li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}
