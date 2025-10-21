import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Menurutas extends Component {
  render() {
    return (
      <div>
        <h2 style={{ color: "green" }}>MENÚ RUTAS</h2>
        <ul>
          <li><NavLink to="/">HOME</NavLink></li>
          <li><NavLink to="/tabla/5">Tabla del 5</NavLink></li>
          <li><NavLink to="/tabla/10">Tabla del 10</NavLink></li>
          <li><NavLink to="/tabla/2">Tabla del 2</NavLink></li>
          <li><NavLink to="/collatz/50">Collatz 50</NavLink></li>
          <li><NavLink to="/collatz/10">Collatz 10</NavLink></li>
        </ul>
      </div>
    )
  }
}
