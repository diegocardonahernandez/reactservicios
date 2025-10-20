import React, { Component } from 'react'

export default class Menurutas extends Component {
  render() {
    return (
      <div>
        <h2 style={{color: "green"}}>MENÚ RUTAS</h2>
        <ul>
            <li><a href="/tabla/5">Tabla multiplicar 5</a></li>
            <li><a href="/tabla/10">Tabla multiplicar 10</a></li>
            <li><a href="/collatz/50">Collatz número 50</a></li>
            <li><a href="/collatz/25">Collatz número 25</a></li>
            <li><a href="/collatz/16">Collatz número 16</a></li>
            <li><a href="/">Home</a></li>
        </ul>
      </div>
    )
  }
}
