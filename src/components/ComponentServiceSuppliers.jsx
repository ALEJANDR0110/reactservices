import React, { Component } from 'react'
import axios from 'axios';
import Global from '../Global';

export default class ComponentServiceSuppliers extends Component {
    id = React.createRef()
    state = {
        suppliers: [],
        supp: null
    }


    loadSuppliers = () => {
        console.log("Antes del servicio");
        let request = "Suppliers"
        axios.get(Global.urlNorthWind + request).then((response) => {
            console.log("Leyendo servicio")
            //LOS DATOS DEL SERVICIO CON AXIOS SIEMPRE VIENEN
            ///DENTRO DE LA PROPIEDAD data.
            this.setState({
                suppliers: response.data.value
            })
        })
        console.log("Despues del servicio");
    }

    componentDidMount = () => {
        this.loadSuppliers();
    }

    searchSupplier = (event) => {
        event.preventDefault();
        let request = "Suppliers"
        let num = parseInt(this.id.current.value);

        axios.get(Global.urlNorthWind + request).then((response) => {
            for(let elem of response.data.value){
                if(elem.SupplierID == num) {
                    this.setState({
                        supp: elem
                    })
                }
            }
        })   
    }

    render() {
        return (
            <div>
                <h1>Service Api Suppliers</h1>
                <form>
                    <input type="number" ref={this.id} />
                    <button onClick={this.searchSupplier} >
                        Search Supplier
                    </button>
                </form>
                {
                    this.state.supp &&
                    (
                        <div>
                            <h2>Contact: {this.state.supp.ContactName}</h2>
                            <h2>title: {this.state.supp.ContactTitle}</h2>
                            <h2>Direccion: {this.state.supp.Address}</h2>
                        </div>
                    )
                }
                <ul>
                    {
                        this.state.suppliers.map((supp, index) => {
                            return(
                                <li key={index}>ID: {supp.SupplierID}, Name: {supp.ContactName}</li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}
