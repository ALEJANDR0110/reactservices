import React, { Component } from 'react'
import Global from '../../Global'
import axios from 'axios'
import InformacionCocheComponent from './InformacionCocheComponent';

export default class CochesComponent extends Component {
    selectIdCoche = React.createRef();
    state = {
        listaCoches: [],
        idCoche: 0
    }

    loadCoches = () => {
        let request = "api/Coches"
        axios.get(Global.urlApiCoches + request).then((response) => {
            this.setState({
                listaCoches: response.data
            })
        })
    }

    componentDidMount = () => {
        this.loadCoches();
    }

    mostrarDatos = (event) => {
        event.preventDefault();
        let id = parseInt(this.selectIdCoche.current.value);
        this.setState({
            idCoche: id
        })
    }

    render() {
        return (
        <div>
            <h1>CochesComponent</h1>
            <form>
                <label>Seleccionar coche: </label>
                <select ref={this.selectIdCoche}>
                    {
                        this.state.listaCoches.map((coche, index) => {
                            return(
                                <option value={coche.idCoche} key={index} >{coche.marca}</option>
                            )
                        })
                    }
                </select>
                <button onClick={this.mostrarDatos}>Mostrar Datos</button>
            </form>
            {
                this.state.idCoche != 0 &&
                <InformacionCocheComponent idcoche={this.state.idCoche} />
            }
        </div>
        )
    }
}
