import React, { Component } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import HomeComponent from './HomeComponent'
import TablaMultiplicar from './TablaMultiplicar'
import NotFoundComponent from './NotFoundComponent'
import CollatzComponent from './CollatzComponent'
import MenuComponent from './MenuComponent'

export default class Router extends Component {
    render() {
        function TablaMultiplicarElement() {
            //ESTA FUNCION SERA PARA CAPTURAR LOS PARAMETROS DE PATH
            //Y ENVIARLOS AL COMPONENT MEDIANTE PROPS
            let {minumero} = useParams();
            //DEVOLVEMOS EL COMPONENT CON PROPS
            return (<TablaMultiplicar numero={minumero} />)
        }

        function CollatzElement() {
            let {numero} = useParams();

            return (<CollatzComponent numero={numero} />)
        }

        return (
            <BrowserRouter>
                <MenuComponent />
                <Routes>
                    <Route path="/" element={<HomeComponent/>}/>
                    <Route path="/tabla/:minumero" element={<TablaMultiplicarElement />}/>
                    <Route path="/collatz/:numero" element={<CollatzElement />}/>
                    {/* PARA 404 SIEMPRE EL ULTIMO Y ASTERISCO EN EL PATH */}
                    <Route path="*" element={<NotFoundComponent/>}/>
                </Routes>
            </BrowserRouter>
        )
    }
}