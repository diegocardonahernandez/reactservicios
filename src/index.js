import 'bootstrap/dist/css/bootstrap.min.css'
import $ from 'jquery'
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle'
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ServicioApiCustomers from './components/ServicioApiCustomers';
import ServiceApiSuppliers from './components/ServiceApiSuppliers';
import EmpleadosDepartamento from './components/EmpleadosDepartamento';
import EmpleadosDepartamentov2 from './components/EmpleadosDepartamentosv2';
import EmpleadosOficios from './components/EmpleadosOficios';
import Departamentos from './components/maestrodetalle/Departamentos';
import Tabla from './components/Tabla';
import Router from './components/Router';
import Menurutas from './components/Menurutas';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Router />
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
