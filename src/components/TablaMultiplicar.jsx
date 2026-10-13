import React, { Component } from 'react'

export default class TablaMultiplicar extends Component {
    state = {
        tabla: []
    }

    generarTablaMultiplicar = () => {
        let aux = [];
        let numero = parseInt(this.props.numero);

        for(let i = 1; i <= 10; i++) {
            let resultado = numero * i;
            aux.push(resultado);
        }
        this.setState({
            tabla: aux
        })
    }

    componentDidMount = () => {
        this.generarTablaMultiplicar();
    }

    componentDidUpdate = (oldProps) => {
        if(oldProps.numero != this.props.numero) {
            this.generarTablaMultiplicar();
        }
    }
    
    render() {
        return (
            <div>
                <h1>Tabla Multiplicar Routing</h1>
                <h3 style={{color:"blue"}}>
                    Numero: {this.props.numero}
                </h3>
                <ul className='list-group'>
                    {
                        this.state.tabla.map((num, index) => {
                            return(
                                <li key={index} className='list-group-item' >{num}</li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}
