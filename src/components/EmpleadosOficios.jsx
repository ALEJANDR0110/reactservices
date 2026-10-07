import React, { Component } from 'react'
import axios from 'axios'
import Global from '../Global'

export default class EmpleadosOficios extends Component {
    selectOficios = React.createRef();
    urlEmpleados = Global.urlApiEmpleados;

    state = {
        oficios: [],
        empleados: []
    }

    loadEmpleados = (event) => {
        event.preventDefault();
        let oficio = this.selectOficios.current.value
        let request = "api/Empleados";
        let newEmps = []

        axios.get(this.urlEmpleados + request).then((response) => {
            console.log("Leyendo empleados...")
            for(let emp of response.data) {
                if(emp.oficio == oficio){
                    newEmps.push({
                        apellido: emp.apellido,
                        oficio: emp.oficio,
                        salario: emp.salario
                    })
                }
            }
            this.setState({
                empleados: newEmps
            })
        })
    }

    loadOficios = () => {
        let request = "api/Empleados";

        axios.get(this.urlEmpleados + request).then((response) => {
            console.log("Leyendo departamentos...")
            for(let emp of response.data) {
                if(!this.state.oficios.includes(emp.oficio)){
                    this.state.oficios.push(emp.oficio)
                }
            }
            this.setState({
                oficios: this.state.oficios
            })
        })
    }

    componentDidMount = () => {
        this.loadOficios();
    }

    render() {
        return (
        <div>
            <h1>Empleados Oficios</h1>
            <select ref={this.selectOficios}>
                {
                    this.state.oficios.map((ofic, index) => {
                        return(
                            <option value={ofic.oficio} key={index}>{ofic}</option>
                        )
                    })
                }
            </select>
            <button onClick={this.loadEmpleados}>Buscar Empleados</button>
            <table>
                <thead>
                    <tr>
                        <th>
                            Apellido
                        </th>
                        <th>
                            Oficio
                        </th>
                        <th>
                            Salario
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.empleados.map((emp, index) => {
                            return(
                                <tr key={index}>
                                    <td>{emp.apellido}</td>
                                    <td>{emp.oficio}</td>
                                    <td>{emp.salario}</td>
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
