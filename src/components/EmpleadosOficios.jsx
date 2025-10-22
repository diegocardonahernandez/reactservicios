import axios from 'axios'
import React, { Component } from 'react'
import Global from './Global'

export default class EmpleadosOficios extends Component {

    cajaOficio = React.createRef()
    state = {
        oficios: [],
        empleadosOficio: null
    }

    getOficios = () => {
        console.log("Accediendo al servicio...")
        var auxOficios = new Set()
        axios.get(Global.urlEmpleados + Global.empleados).then(response => {
            console.log("Datos recibidos")
            let empleados = response.data
            for (const emp of empleados) {
                auxOficios.add(emp.oficio)
            }//CORREGIR ESTOOOOO
            console.log(auxOficios)
            this.setState({
                oficios: Array.from(auxOficios)
            })
            console.log(this.state.oficios)
        })

    }

    getEmpleadosOficio = () => {
        console.log("Buscando empleados...")
        var oficioSeleccionado = this.cajaOficio.current.value
        axios.get(Global.urlEmpleados + Global.empleadosOficio + oficioSeleccionado).then(response => {
            this.setState({
                empleadosOficio: response.data
            })
        })


    }

    componentDidMount = () => {
        this.getOficios()
    }

    render() {
        return (
            <div>
                <h1 style={{ color: "purple" }}>
                    Empleados Oficios
                </h1>
                <label htmlFor="">Seleccione un Oficio </label>
                <select ref={this.cajaOficio} onChange={this.getEmpleadosOficio}>
                    {
                        this.state.oficios.map((oficio, index) => {
                            return <option value={oficio} key={index}>{oficio}</option>
                        })
                    }
                </select>
                <table border={1}>
                    <thead>
                        <tr>
                            <th>APELLIDO</th>
                            <th>OFICIO</th>
                            <th>SALARIO</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.empleadosOficio != null &&
                            this.state.empleadosOficio.map((empleado, index) => (
                                <tr key={index}>
                                    <td>{empleado.apellido}</td>
                                    <td>{empleado.oficio}</td>
                                    <td>{empleado.salario}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>

            </div>
        )
    }
}
