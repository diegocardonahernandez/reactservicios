import React, { Component } from 'react'
import axios from 'axios'
import Global from '../Global'
import Empleados from './Empleados'

export default class Departamentos extends Component {

selectDepartamento = React.createRef()
state = {
    departamentos: [],
    idDepartamento: 0
}


loadDepts = () =>{
    axios.get(Global.urlDepartamentos + Global.departamentos).then(response=>{
        console.log("Leyendo servicio")
        this.setState({
            departamentos: response.data
        })
    })
}

componentDidMount = () =>{
    this.loadDepts()
}

buscarEmpleados = (e) =>{
    e.preventDefault()
    let idDept = this.selectDepartamento.current.value
    this.setState({
        idDepartamento: idDept
    })
}
    
  render() {
    return (
      <div>
        <h1 style={{color: "purple"}}>
            DEPARTAMENTOS
        </h1>
        <form onSubmit={this.buscarEmpleados}>
            <select ref={this.selectDepartamento}>
                {
                    this.state.departamentos.map((dept,index)=>{
                        return(
                            <option key={index} value={dept.numero}>{dept.nombre}</option>
                        )
                    })
                }
            </select>
            <input type="submit" value="Buscar" />
        </form>
        <div id="empleadosdept">
            {this.state.idDepartamento != 0 &&
            <Empleados numeroDept={this.state.idDepartamento}/>}
        </div>
      </div>
    )
  }
}
