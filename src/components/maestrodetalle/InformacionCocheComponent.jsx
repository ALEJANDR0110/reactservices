import React, { Component } from 'react'
import Global from '../../Global'
import axios from 'axios'

export default class InformacionCocheComponent extends Component {

    state = {
        coche: null
    }

    loadCoche = () => {
        let id = this.props.idcoche
        let request = "api/Coches/FindCoche/" + id
        axios.get(Global.urlApiCoches + request).then((response) => {
            this.setState({
                coche: response.data
            })
        })
    }
    componentDidMount = () => {
        this.loadCoche();
    }

    componentDidUpdate = (oldProps) => {
        if(this.props.idcoche != oldProps.idCoche){
            this.loadCoche()
        }
    }

    render() {
            return (
            <div>
                <h1>Informacion Coche Component</h1>
                {
                    this.state.coche && 
                        <div>
                            <h2>ID Coche: {this.state.coche.idCoche} </h2>
                            <h2>Marca: {this.state.coche.marca} | Modelo: {this.state.coche.modelo}</h2>
                            <h2>Conductor: {this.state.coche.conductor}</h2>
                            <img src={this.state.coche.imagen} alt="" />
                        </div>
                }
            </div>
            )
        }
}
