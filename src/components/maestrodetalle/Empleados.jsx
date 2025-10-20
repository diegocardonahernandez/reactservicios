import React, { Component } from 'react'
import axios from 'axios'
import Global from '../../Global'

export default class Empleados extends Component {

    state = {
        empleados: [],
        texto: ""
    }

    loadEmpleados = ()=>{
        let id = this.props.numeroDept
        let request = Global.empleadosDept + id
        axios.get(Global.urlEmpleados + request).then(response=>{
            this.setState({
                empleados: response.data
            })
        })
    }

    componentDidUpdate = (oldProps) =>{
      if(oldProps.numeroDept != this.props.numeroDept){
        this.loadEmpleados()
      }
    }

    componentDidMount = () =>{
        this.loadEmpleados()
    }

  render() {
    return (
      <div>
        <h1 style={{color: "blue"}}>
            EMpleados del departamento nº : {this.props.numeroDept}         
        </h1>
        <h2>
            {this.state.texto}
        </h2>
        <ul>
            {
                this.state.empleados.map((emp,index)=>{
                    return(
                        <li key={index}>{emp.apellido} - {emp.oficio} - DEPT: {emp.departamento}</li>
                    )
                })
            }
        </ul>
      </div>
    )
  }
}
