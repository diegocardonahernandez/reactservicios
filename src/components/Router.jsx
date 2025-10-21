import React, { Component } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Tabla from './Tabla'
import Home from '../Home'
import NotFound from '../NotFound'
import { useParams } from 'react-router-dom'
import Collatz from './Collatz'
import Menurutas from './Menurutas'
export default class Router extends Component {
    render() {

        function TablaMultiplicar() {
            let { minumero } = useParams()
            return <Tabla numero={minumero} />
        }

        function CollatzNumero(){
            let {num} = useParams()
            return <Collatz numero={num}/>
        }

        return (
            <BrowserRouter>
            <Menurutas/>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/tabla/:minumero"
                        element={<TablaMultiplicar />} />

                    <Route path='/collatz/:num'
                     element={<CollatzNumero/>}/>

                    {/* PARA INCLUIR LAS RUTAS QUE NO EXISTEN CON UNA 
            PAGINA 404 PERSONALIZADA DEBEMOS UTILIZAR EL ASTERISCO
            Y SIEMPRE DEBE SER LA ULTIMA RUTA */}
                    <Route path="*"
                        element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        )
    }
}