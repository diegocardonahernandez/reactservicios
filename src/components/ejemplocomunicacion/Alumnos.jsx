import React, { Component } from 'react'
import axios from 'axios'
import Global from '../../Global'

export default class Alumnos extends Component {

    state = {
        alumnos: []
    }

    loadAlumnosData = () => {
        let resquest = "api/Alumnos/FiltrarCurso/" + this.props.numCurso
        axios.get(Global.urlAlumnos + resquest).then(response => {
            this.setState({
                alumnos: response.data
            })
        })
    }

    componentDidUpdate = (oldProps) => {
        if (oldProps.numCurso != this.props.numCurso) {
            this.loadAlumnosData()
        }

        this.componentDidMount = () => {
            this.loadAlumnosData()
        }
    }

    render() {
        return (
            <div>
                {
                    (this.state.alumnos.length == 0) ?
                        <h3 style={{ color: "red" }}>No se han encontrado alumnos para este curso</h3> :

                        this.state.alumnos.map((alm, index) => {
                            return (
                                <li key={index}>{alm.nombre} {alm.apellidos}
                                    <button value={alm.idAlumno} onClick={() =>{
                                        this.props.selectAlumno(alm)
                                    }}>Detalles</button>
                                </li>
                            )
                        })


                }
            </div>
        )
    }
}
