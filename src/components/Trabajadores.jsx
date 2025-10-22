import { data } from 'jquery'
import React, { Component } from 'react'
import axios from 'axios'
import Global from './Global'

export default class Trabajadores extends Component {

    state = {
        mensaje: "",
        trabajadores: []
    }

    loadTrabajadores = () => {
        let idHospitales = this.props.idhospitales
        let data = ""

        for(const id of idHospitales){
            data += "idhospital=" + id + "&"
        }

        data = data.slice(0, data.length -1)

        this.setState({
            mensaje: data
        })
        let request = "api/Trabajadores/trabajadoreshospitales?" + data
        axios.get(Global.apiTrabajadores+request).then(response=>{
            console.log("Trabajadores recibidos!!!")
            this.setState({
                trabajadores: response.data
            })
        })
    }

    componentDidMount = () =>{
        this.loadTrabajadores()
    }

    componentDidUpdate = (oldProps) =>{
        if(oldProps.idhospitales != this.props.idhospitales){
            this.loadTrabajadores()
        }
    }

  render() {
    return (
      <div className='p-3'>
        <h2 style={{color: "ThreeDDarkShadow", textAlign: "center"}}>
             Currantes
        </h2>
    
        <table className='table table-primary w-50 mx-auto table-bordered'>
            <thead>
                <tr>
                    <th>Apellido</th>
                    <th>Oficio</th>
                    <th>Salario</th>
                    <th>ID Hospital</th>
                </tr>
            </thead>
            <tbody>
                {
                    this.state.trabajadores.map((trabajador,index)=>{
                        return(
                            <tr key={index}>
                                <td>{trabajador.apellido}</td>
                                <td>{trabajador.oficio}</td>
                                <td>{trabajador.salario}</td>
                                <td>{trabajador.idHospital}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>

      </div>
    )
  }
}
