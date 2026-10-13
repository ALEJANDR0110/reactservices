import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class MenuComponent extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/tabla/34">Tabla Multiplicar 34</NavLink>
                    </li>
                    <li>
                        <NavLink to="/tabla/999999">Tabla Multiplicar 999999</NavLink>
                    </li>
                    <li>
                        <NavLink to="/tabla/3">Tabla Multiplicar 3</NavLink>
                    </li>
                    <li>
                        <NavLink to="/collatz/10">Conjetura de collatz de 10</NavLink>
                    </li>
                    <li>
                        <NavLink to="/collatz/101">Conjetura de collatz de 101</NavLink>
                    </li>
                </ul>
            </div>
        )
    }
}
