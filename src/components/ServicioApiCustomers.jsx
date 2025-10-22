import React, { Component } from 'react'
import axios from 'axios'
import Global from './Global'

export default class ServicioApiCustomers extends Component {

    state = {
        customers: []
    }

    url = Global.urlNorthwind
    //Creamos un metodo para cargar los clientes

    loadcustomers = () => {
        console.log("Antes del servicio")
        axios.get(this.url + Global.customers).then(response => {
            console.log("Leyendo servicio")
            //La información viene en response.data
           this.setState({
            customers: response.data.value
           })
        })
        console.log("Despues del servicio")
    }

    componentDidMount = () => {
        console.log("Creando component")
        this.loadcustomers()
    }


  render() {
    return (
      <div>
        <h1>Servicio Api Customers</h1>       
        {
            this.state.customers.map((customer,index)=>{
                return(
                    <h3 style={{color: "red"}} key={index}>{customer.ContactName}</h3>
                )
            })
        }
      </div>
    )
  }
}
