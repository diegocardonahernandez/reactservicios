import React, { Component } from 'react'
import axios from 'axios'
import Global from '../Global'

export default class EmpleadosDepartamentov2 extends Component {

  url = Global.urlDepartamentos
  cajaDept = React.createRef()

  state = {
    empleadosDept: [],
    departamentos: []
  }

  getEmpleadosDept = () => {
    console.log("Buscando empleados...")
    var dept = parseInt(this.cajaDept.current.value)
    console.log(dept)
    axios.get(Global.urlEmpleados + Global.empleadosDept + dept).then(response=>{
      this.setState({
        empleadosDept: response.data
      })
    })

  }

  getDepartamentos = () => {
    console.log("Accediendo al servicio...")
    axios.get(this.url + Global.departamentos).then(response=>{
      console.log("Departamentos recibidos!")
      this.setState({
        departamentos: response.data
      })
    })
  }

  componentDidMount = () =>{
    this.getDepartamentos()
  }

  render() {
    return (
      <div>
        <h1 style={{ color: "green" }}>Empleados Departamento V2</h1>       
          <label htmlFor="">Seleccione un departamento: </label>
          <select name="" id="" ref={this.cajaDept} onChange={this.getEmpleadosDept} >
            {
              this.state.departamentos.map((dept,index)=>{
                return(
                  <option key={index} value={dept.numero}>{dept.nombre}</option>
                )
              })
            }
          </select>

        <table border={1}>
          <thead>
            <tr>
              <th>ID EMPLEADO</th>
              <th>APELLIDO</th>
              <th>OFICIO</th>
              <th>SALARIO</th>
              <th>DEPARTAMENTO</th>
            </tr>
            {
              this.state.empleadosDept.map((empleado, index) => {
                return (
                  <tr key={index}>
                    <td>{empleado.idEmpleado}</td>
                    <td>{empleado.apellido}</td>
                    <td>{empleado.oficio}</td>
                    <td>{empleado.salario}</td>
                    <td>{empleado.departamento}</td>
                  </tr>
                )
              })
            }
          </thead>
        </table>

      </div>
    )
  }
}
