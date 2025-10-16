
import React, { Component } from 'react'
import axios from 'axios'

export default class ServiceApiSuppliers extends Component {

  url = "https://services.odata.org/V4/Northwind/Northwind.svc/Suppliers"
  idBuscar = React.createRef()

  state = {
    suppliers: [],
    supplier: {}
  }

  loadSuppliers = () => {
    console.log("Ingresando al servicio...")
    axios.get(this.url).then(response => {
      console.log("Leyendo servicio...")
      this.setState({
        suppliers: response.data.value
      })
    })
  }

  loadInfoSupplier = () => {
    console.log("Petición de busqueda de cliente recibida!")
    var idcaja = this.idBuscar.current.value

    this.state.suppliers.map((supp, index) => {
      var idSupplier = parseInt(supp.SupplierID)
      if (idcaja == idSupplier) {
        this.setState({
          supplier: supp
        })
      }else{
        console.log("No se ha encontrado ningún sipplier con ese")
      }
    })
    console.log(this.state.supplier)
  }

  //CORREGIR

  componentDidMount = () => {
    console.log("Cargando datos")
    this.loadSuppliers()
  }


  render() {
    return (
      <div>
        <h1>
          INFORMACIÓN CUSTOMERS
        </h1>
        <ul>
          {
            this.state.suppliers.map((supplier, index) => {
              return (
                <li key={index}>ID: <b>{supplier.SupplierID}</b> - Nombre: <b>{supplier.ContactName}</b></li>
              )
            })
          }
        </ul>
        <label htmlFor="">Busque un cliente mediante su <b>ID: </b></label>
        <input type="text" ref={this.idBuscar} />
        <button onClick={this.loadInfoSupplier}>Buscar</button>
      </div>
    )
  }
}
