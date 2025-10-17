import React, { Component } from 'react'
import axios from 'axios'
import Global from '../Global'

export default class EmpleadosDepartamento extends Component {

    url = Global.urlEmpleados
    cajaIdDept = React.createRef()

    state = {
        empleadosDept: []
    }

    getEmpleadosDept = (e) => {
        e.preventDefault()
        console.log("Accediendo al servicio...")
        var iddept = parseInt(this.cajaIdDept.current.value)
        axios.get(this.url + Global.empleadosDept + iddept).then(response=>{
            console.log("Guardando información empleados...")
            this.setState({
                empleadosDept: response.data
            })
        })
    }

    render() {
        return (
            <div>
                <h1 style={{color: "green"}}>Empleados Departamento</h1>
                <form onSubmit={this.getEmpleadosDept}>
                    <label htmlFor="">Introduzcael ID Departamento </label>
                    <input type="text" ref={this.cajaIdDept}/>
                    <input type="submit" value="Buscar" />
                </form>

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
                            this.state.empleadosDept.map((empleado,index)=>{
                                return(
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
