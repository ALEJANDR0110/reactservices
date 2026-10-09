import React, { Component } from 'react'
import axios from 'axios'
import Global from '../../Global'

export default class EmpleadosComponent extends Component {


    componentDidMount = () => {
        this.loadEmpleados();
    }

    state = {
        empleados: []
    }

    loadEmpleados = () => {
        let id = this.props.iddepartamento;
        let request = "api/empleados/empleadosdepartamento/" + id
        axios.get(Global.urlApiEmpleados + request).then((response) => {
            console.log("leyendo empleados")
            this.setState({
                empleados: response.data
            })
        })
    }

    componentDidUpdate = (oldProps) => {
        //oldProps son los valores anteriores a props
        console.log("current:" + this.props.iddepartamento);
        console.log("Old:" + oldProps.iddepartamento);
        //SOLAMENTE ACTUALIZAMOS STATE SI PROPS HA CAMBIADO
        if(this.props.iddepartamento != oldProps.iddepartamento) {
            this.loadEmpleados();
        }
    }
    render() {
        return (
            <div>
                <h1>Empleados Component</h1>
                <ul>
                {
                    this.state.empleados.map((emp, index) => {
                        return(
                            <li key={index}>
                                Apellido: {emp.apellido} | Oficio: {emp.oficio}
                            </li>
                        )
                    })
                }
            </ul>
            </div>
        )
    }
}
