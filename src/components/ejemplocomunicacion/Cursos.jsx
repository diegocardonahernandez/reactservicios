import React, { Component } from 'react'
import axios from 'axios'
import Global from '../../Global'
import Alumnos from './Alumnos'

export default class Cursos extends Component {

    caajCurso = React.createRef()

    state = {
        cursos: [],
        curso: 0,
        alumno: null
    }

    loadCursos = () => {
        let request = "api/Alumnos/Cursos"
        axios.get(Global.urlAlumnos + request).then(response => {
            console.log("Cursos recibidos")
            this.setState({
                cursos: response.data
            })
        })
    }

    sendCurso = () => {
        console.log("Nuevo curso seleccionado!")
        let cursoSeleccionado = this.caajCurso.current.value
        this.setState({
            curso: cursoSeleccionado
        })
    }

    selectALumno = (alumnoseleccionado) => {
       
        this.setState({
            alumno: alumnoseleccionado
        })
    }

    componentDidMount = () => {
        this.loadCursos()
    }

    render() {
        return (
            <div>
                <h1 style={{ color: "purple" }}>CURSOS TAJAMAR REACT</h1>
                <select ref={this.caajCurso} onChange={this.sendCurso}>
                    {
                        this.state.cursos.map((curso, index) => {
                            return (
                                <option key={index} value={curso}>{curso}</option>
                            )
                        })
                    }
                </select>

                {this.state.curso != 0 &&
                    <ul>
                        <Alumnos numCurso={this.state.curso} selectAlumno={this.selectALumno} />
                    </ul>
                }

                {this.state.alumno != null &&

                    <div>
                        <h1>Nombre: {this.state.alumno.nombre}</h1>
                        <h2>Apellido: {this.state.alumno.apellidos}</h2>
                    </div>

                }

            </div>
        )
    }
}
