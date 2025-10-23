import React, { Component } from 'react'
import Trabajadores from './Trabajadores'
import axios from 'axios'
import Global from './Global'
import Swal from 'sweetalert2';

export default class HospitalesMultiples extends Component {

    selectHospital = React.createRef()    
    cajaNewSalario = React.createRef()
    
    state = {
        hospitales: [],
        hospitalesSeleccionados: [],
        salariosActualizados: false
    }

    loadHospitales = () => {
        console.log("Accediendo al servicio...")
        let request = "api/Hospitales"
        axios.get(Global.apiTrabajadores + request).then(response => {
            console.log("Hospitales recibidos!")
            this.setState({
                hospitales: response.data
            })
        })
    }

    componentDidMount = () => {
        this.loadHospitales()
    }

    getHospitalesSeleccionados = (e) => {
        e.preventDefault()
        let aux = []
        let options = this.selectHospital.current.options
        for(const option of options){
            if(option.selected){
                aux.push(option.value)
            }
        }
        this.setState({
            hospitalesSeleccionados: aux
        })

    }

    getSelecciones = () => {
         let aux = []
        let options = this.selectHospital.current.options
        for(const option of options){
            if(option.selected){
                aux.push(option.value)
            }
        }
        return aux
    }

    updateSalarioEmpleados = (e) =>{
        e.preventDefault()
        console.log("Procesando petición de subida de sueldo...")
        let newsalario = parseInt(this.cajaNewSalario.current.value)
        let hospitalesEmpleados = ""
        let aux = this.getSelecciones()

        for(const hosp of aux){
            hospitalesEmpleados += "idhospital=" + hosp + "&"
        }

        hospitalesEmpleados = hospitalesEmpleados.slice(0, hospitalesEmpleados.length -1)

        let request = "api/trabajadores/UpdateSalarioTrabajadoresHospitales?incremento="+newsalario+"&"+hospitalesEmpleados
        console.log(aux)
        console.log(request)

        axios.put(Global.apiTrabajadores+request).then(response=>{
            Swal.fire({
                title: "Salarios actualizados correctamente!",
                text: "Verifiquelo visualmente acontinuación",
                icon: "success",
                iconColor: "blue"
            }).then(()=>{
                this.setState({
                    salariosStatus: true,
                    hospitalesSeleccionados: aux
                })
            })
        })
    }

    updateDatosTrabajadores = (newValor) =>{
        this.setState({
            salariosActualizados: newValor
        })
    }
 
    render() {
        return (
            <div>
                <h1 className='text-center p-3'>Hospitales Múltiples</h1>
                <form className='w-50 mx-auto'>
                    <select multiple size={6} ref={this.selectHospital} className='form-control '>

                        {this.state.hospitales.map((hosp, index) => {
                            return (
                                <option key={index} value={hosp.idHospital}>{hosp.nombre}</option>
                            )
                        })}
                    </select>
                    <label className=''>Incremento salarial</label>
                    <input type="text" className=' form-control p-2' ref={this.cajaNewSalario} />
                    <div className="p-2 d-grid">
                        <button className='btn btn-outline-dark' onClick={this.updateSalarioEmpleados}>Actualizar Salario</button>
                    </div>
                    <div className='p-2 d-grid'>
                        <button onClick={this.getHospitalesSeleccionados} className='btn btn-outline-primary text-center'>
                            Mostrar Hospitales
                        </button>
                    </div>
                </form>

                        {
                            this.state.hospitalesSeleccionados.length != 0 &&
                            <Trabajadores idhospitales={this.state.hospitalesSeleccionados} salariosStatus={this.state.salariosActualizados}
                             updateDatosTrabajadores={this.updateDatosTrabajadores}/>
                        }
                        

            </div>
        )
    }
}
