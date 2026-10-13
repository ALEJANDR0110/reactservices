import React, { Component } from 'react'

export default class CollatzComponent extends Component {
    state = {
        lista: []
    }

    realizarCollatz = () => {
        let num = parseInt(this.props.numero)
        let aux = []

        while(num != 1) {
            if(num % 2 === 0) {
                num = num / 2
            } else {
                num = num * 3 + 1
            }
            aux.push(num)
        }
        console.log(aux)
        this.setState({
            lista: aux
        })
    }

    componentDidMount = () => {
        this.realizarCollatz();
    }
    
    componentDidUpdate = (oldProps) => {
        if(oldProps.numero != this.props.numero) {
            this.realizarCollatz();
        }
    }

    render() {
        return (
            <div>
                <h1>Collatz Component</h1>
                <h2>{this.props.numero}</h2>
                <ul>
                    {
                        this.state.lista.map((num, index) => {
                           return (<li key={index}>{num}</li>)
                        })
                    }
                </ul>
            </div>
        )
    }
}
