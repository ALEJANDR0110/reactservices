import React, { Component } from 'react'
import axios from 'axios'
import Global from '../Global'

export default class ComponentServiceCustomer extends Component {
    state = {
        customers: []
    }


    loadCustomers = () => {
        let request = "Customers"
        console.log("Antes del servicio");
        axios.get(Global.urlNorthWind + request).then((response) => {
            console.log("Leyendo servicio")
            //LOS DATOS DEL SERVICIO CON AXIOS SIEMPRE VIENEN
            ///DENTRO DE LA PROPIEDAD data.
            this.setState({
                customers: response.data.value
            })
        })
        console.log("Despues del servicio");
    }

    componentDidMount = () => {
        this.loadCustomers();
    }

    render() {
        return (
            <div>
                <h1>Service Api Customers</h1>
                <button onClick={this.loadCustomers}>
                    Load Customers
                </button>
                {
                    this.state.customers.map((cliente, index) => {
                        return(
                            <h4 key={index} style={{color: "blue"}}>
                                Contacto: {cliente.ContactName}, 
                                Titulo: {cliente.ContactTitle}
                            </h4>
                        )
                    })
                }
            </div>
        )
    }
}
