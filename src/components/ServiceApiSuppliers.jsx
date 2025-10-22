import axios from 'axios'
import react from 'react'
import Global from './Global'
import React, { Component } from 'react'

export default class ServiceApiSuppliers extends Component {

  url = Global.urlNorthwind
  cajaid = React.createRef()

  state = {
    suppliers: [],
    supplier: null
  }

  loadSuppliers = () =>{

    console.log("Cargando proveedores...")
    axios.get(this.url + Global.suppliers).then(response=>{
      console.log("Provedoores recibidos!")
      this.setState({
        suppliers: response.data.value
      })
    })
  }

  loadSupplierData = (e) =>{
    e.preventDefault( )
    console.log("Buscando provedor...")
    var id = this.cajaid.current.value
    this.state.suppliers.map((currentSupplier,index)=>{
      if(id == currentSupplier.SupplierID){
        this.setState({
          supplier: currentSupplier
        })
      }
    })
    
  }


  componentDidMount = () =>{
    this.loadSuppliers()
  }

  render() {
    return (
      <div>
        <h1>Service Supliers</h1>
          <ul>
              {
                this.state.suppliers.map((currentSupplier,index)=>{
                  return(
                    <li key={index}><b>ID: </b>{currentSupplier.SupplierID} - <b>NOMBRE: </b>{currentSupplier.ContactName}</li>
                  )
                })
              }
          </ul>
          <form onSubmit={this.loadSupplierData}>
          <label htmlFor="">Indique un ID</label>
          <input type="number" ref={this.cajaid}/>
          <input type="submit" value="Buscar" />
          </form>

              {
                (this.state.supplier == null )?
                <h1 style={{color: "red"}}>No se ha ecnotrado ningúnn proveedor</h1>:
                <div>
                  <h2>Nombre: {this.state.supplier.ContactName}</h2>
                  <h3>ID: {this.state.supplier.SupplierID}</h3>
                  <h3>Compañia: {this.state.supplier.CompanyName}</h3>
                </div>
              }

      </div>
    )
  }
}
