import React, { Component } from 'react'
import axios from 'axios'
import Global from '../Global'

export default class EmpleadosDepartamentos extends Component {
    selectIdDepartamento = React.createRef();
    urlEmpleados = Global.urlApiEmpleados;
    urlDepartamentos = Global.urlApiDepartamentos;

    state = {
        empleados: [],
        departamentos: []
    }

    buscarEmpleados = (event) => {
        event.preventDefault();
        //NO NECESITAMOS QUE SEA UN NUMERO (parseInt)
        //YA QUE LO VAMOS A CONCATENAR CON UN REQUEST
        let idDepartamento = this.selectIdDepartamento.current.value;
        let request = "api/Empleados/EmpleadosDepartamento/" + idDepartamento;
        axios.get(this.urlEmpleados + request).then((response) => {
            console.log("leyendo empleados");
            this.setState({
                empleados: response.data
            })
        })
    }

    loadDepartamentos = () => {
        let request = "webresources/departamentos"
        axios.get(this.urlDepartamentos + request).then((response) => {
            console.log("Leyendo departamentos")
            this.setState({
                departamentos: response.data
            })
        })
    }

    componentDidMount = () => {
        this.loadDepartamentos();
    }

    render() {
        return (
        <div>
            <h1>Api Empleado Departamentos</h1>
            <form>
                <label>Introduzca id departamento: </label>
                <select ref={this.selectIdDepartamento}>
                    {
                        this.state.departamentos.map((dept, index) => {
                            return(
                                <option key={index} value={dept.numero}>{dept.nombre}</option>
                            )
                        })
                    }
                </select>
                <button onClick={this.buscarEmpleados}>
                    Buscar Empleados
                </button>
            </form>
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